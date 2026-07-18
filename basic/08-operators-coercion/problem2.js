/**
 * 08-operators-coercion / 問題2: 論理演算子とデフォルト値
 *
 * 【課題】
 * OR演算子（||）は「左辺がfalsyなら右辺を返す」という性質があり、
 * デフォルト値の設定によく使われます。
 * 表示名を返す関数 getDisplayName を作成してください。
 *
 * 【要求事項】
 * - 関数名は getDisplayName、引数は1つ（name）
 * - nameが undefined、null、空文字("") のいずれかの場合は "名無しさん" を返す
 * - それ以外はnameをそのまま返す
 * - ||演算子を使って1行で書けることを確認する
 *
 * 【参考】JavaScript Primer「演算子」
 * https://jsprimer.net/basic/operator/
 *
 * 【目安時間】5分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題2の実行結果 ===');
try {
    console.log('getDisplayName("田中"):', getDisplayName("田中"));         // 期待値: "田中"
    console.log('getDisplayName(undefined):', getDisplayName(undefined)); // 期待値: "名無しさん"
    console.log('getDisplayName(null):', getDisplayName(null));           // 期待値: "名無しさん"
    console.log('getDisplayName(""):', getDisplayName(""));               // 期待値: "名無しさん"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
