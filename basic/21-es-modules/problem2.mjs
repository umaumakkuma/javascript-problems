/**
 * 21-es-modules / 問題2: デフォルトインポート
 *
 * 【課題】
 * ./lib/math.mjs は square 関数をデフォルトエクスポートしています。
 * - import文で ./lib/math.mjs のデフォルトエクスポートを
 *   square という名前でインポートする
 * - square(6) の結果を変数 squared に代入する
 *
 * 【要求事項】
 * - デフォルトインポート（import 名前 from "..."）を使用する
 * - デフォルトエクスポートはモジュールに1つだけ定義でき、
 *   インポート側は任意の名前を付けられる（名前付きエクスポートとの違い）
 *   ことをコメントで説明する
 *
 * 【参考】JavaScript Primer「ECMAScriptモジュール」
 * https://jsprimer.net/basic/module/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題2の実行結果 ===');
try {
    console.log('squared:', squared); // 期待値: 36
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
