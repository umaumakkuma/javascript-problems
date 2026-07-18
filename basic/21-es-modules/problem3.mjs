/**
 * 21-es-modules / 問題3: 自分でエクスポートする
 *
 * 【課題】
 * 今度はエクスポートする側を書きます。
 * ★回答はこのファイルではなく ./lib/my-module.mjs に記述してください★
 *
 * ./lib/my-module.mjs に以下を実装する:
 * - 文字列の定数 AUTHOR を名前付きエクスポートする（値は自分の名前など任意の文字列）
 * - 引数 name を受け取り `こんにちは、${name}さん` を返す関数 greet を
 *   名前付きエクスポートする
 *
 * 【要求事項】
 * - export文（名前付きエクスポート）を使用する
 * - 宣言と同時にエクスポートする書き方（export const / export function）を使う
 *
 * 【参考】JavaScript Primer「ECMAScriptモジュール」
 * https://jsprimer.net/basic/module/
 *
 * 【目安時間】10分
 */

// 動作確認用のコード（変更不要）
// このファイルが ./lib/my-module.mjs を読み込んで検証します
console.log('=== 問題3の実行結果 ===');
try {
    const mod = await import("./lib/my-module.mjs");
    if (typeof mod.AUTHOR !== "string") {
        throw new Error("AUTHOR が文字列としてエクスポートされていません");
    }
    if (typeof mod.greet !== "function") {
        throw new Error("greet が関数としてエクスポートされていません");
    }
    console.log('AUTHOR:', mod.AUTHOR);               // 期待値: 任意の文字列
    console.log('greet("太郎"):', mod.greet("太郎")); // 期待値: "こんにちは、太郎さん"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
