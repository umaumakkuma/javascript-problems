/**
 * 08-operators-coercion / 問題3: Nullish coalescing演算子（??）
 *
 * 【課題】
 * ||演算子でデフォルト値を設定すると、0や""といった「有効なfalsyの値」まで
 * デフォルト値に置き換えられてしまう問題があります。
 * ??演算子（Nullish coalescing）を使って、音量を設定する関数 setVolume を
 * 作成してください。
 *
 * 【要求事項】
 * - 関数名は setVolume、引数は1つ（volume）
 * - volumeが null または undefined の場合のみ、デフォルト値の50を返す
 * - volumeが 0 の場合は 0 をそのまま返す（ここが||との違い）
 * - ??演算子を使用する
 * - 比較用に、0 || 50 の結果を代入した変数 orResult も定義する
 *
 * 【参考】JavaScript Primer「演算子」
 * https://jsprimer.net/basic/operator/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題3の実行結果 ===');
try {
    console.log('setVolume(80):', setVolume(80));               // 期待値: 80
    console.log('setVolume(0):', setVolume(0));                 // 期待値: 0
    console.log('setVolume(null):', setVolume(null));           // 期待値: 50
    console.log('setVolume(undefined):', setVolume(undefined)); // 期待値: 50
    console.log('orResult:', orResult);                         // 期待値: 50（||では0が消えてしまう）
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
