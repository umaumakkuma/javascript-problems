/**
 * 11-strings / 問題2: 文字列の分解と結合
 *
 * 【課題】
 * split()とjoin()、slice()を使って文字列を加工してください：
 *
 * const filePath = "src/components/Button.js";
 *
 * - "/"で分割した配列を変数 parts に代入（split使用）
 * - partsを " > " で連結した文字列を変数 breadcrumb に代入（join使用）
 * - filePathからファイル名部分（最後の"/"より後ろ）だけを取り出して
 *   変数 fileName に代入（lastIndexOf()とslice()を組み合わせる）
 *
 * 【要求事項】
 * - filePathは自分で定義する
 * - split（文字列→配列）とjoin（配列→文字列）が対になる操作であることを
 *   コメントで説明する
 *
 * 【参考】JavaScript Primer「文字列」
 * https://jsprimer.net/basic/string/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題2の実行結果 ===');
try {
    console.log('parts:', parts);           // 期待値: ["src", "components", "Button.js"]
    console.log('breadcrumb:', breadcrumb); // 期待値: "src > components > Button.js"
    console.log('fileName:', fileName);     // 期待値: "Button.js"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
