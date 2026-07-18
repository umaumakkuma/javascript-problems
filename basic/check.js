/**
 * basic/ の全問題を一括実行して回答状況を集計するスクリプト
 *
 * 使い方:
 *   node check.js              # 全カテゴリを集計
 *   node check.js 19 21       # カテゴリ番号を指定して集計
 *
 * 判定方法:
 *   各問題ファイルを実行し、動作確認コードの出力から判定する
 *   ✅ 回答済み / ❌ 未回答・誤答 / 📝 出力の目視確認が必要な問題 / 💥 実行時クラッシュ
 */
const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const baseDir = __dirname;
const filterNumbers = process.argv.slice(2);

const categories = fs
    .readdirSync(baseDir)
    .filter((name) => /^\d{2}-/.test(name))
    // 00-tutorialは回答済みの状態で配布するチュートリアルなので集計対象外
    .filter((name) => !name.startsWith("00-"))
    .filter((name) => fs.statSync(path.join(baseDir, name)).isDirectory())
    .filter((name) => filterNumbers.length === 0 || filterNumbers.includes(name.slice(0, 2)))
    .sort();

if (categories.length === 0) {
    console.error("対象カテゴリが見つかりません。カテゴリ番号（例: 07）を確認してください。");
    process.exit(1);
}

console.log("=== JavaScript実技テスト 回答状況 ===\n");

let answeredTotal = 0;
let autoTotal = 0;
let manualTotal = 0;
const crashedFiles = [];

for (const category of categories) {
    const categoryDir = path.join(baseDir, category);
    const problems = fs
        .readdirSync(categoryDir)
        .filter((name) => /^problem\d+\.(js|mjs)$/.test(name))
        .sort();

    const marks = [];
    let answered = 0;
    let auto = 0;

    for (const problem of problems) {
        const result = spawnSync(process.execPath, [path.join(categoryDir, problem)], {
            encoding: "utf8",
            timeout: 10000,
        });
        const output = (result.stdout || "") + (result.stderr || "");

        if (result.status !== 0 || result.error) {
            marks.push("💥");
            crashedFiles.push(`${category}/${problem}`);
            auto += 1;
        } else if (output.includes("ブラウザ環境で実行") || output.includes("モック環境")) {
            // ブラウザ向け問題のNode実行はモックのデモであり回答の正誤判定にならない
            marks.push("📝");
            manualTotal += 1;
        } else if (output.includes("❌")) {
            marks.push("❌");
            auto += 1;
        } else if (output.includes("✅")) {
            marks.push("✅");
            answered += 1;
            auto += 1;
        } else {
            // 動作確認コードが✅/❌を出力しない問題（出力順序の予想など）は目視確認
            marks.push("📝");
            manualTotal += 1;
        }
    }

    answeredTotal += answered;
    autoTotal += auto;
    const label = auto > 0 ? `${answered}/${auto}` : "-";
    console.log(`${category.padEnd(26)} ${marks.join("")}  ${label}`);
}

console.log(`\n回答済み: ${answeredTotal}/${autoTotal}`);
if (manualTotal > 0) {
    console.log(`📝 自動判定できない問題が ${manualTotal} 問あります。ファイルを個別に実行して出力を確認してください。`);
}
if (crashedFiles.length > 0) {
    console.log(`💥 実行時にクラッシュした問題があります（回答の構文エラーの可能性）:`);
    for (const file of crashedFiles) {
        console.log(`   - ${file}`);
    }
    process.exitCode = 1;
}
