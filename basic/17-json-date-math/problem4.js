/**
 * 17-json-date-math / 問題4: 日付の計算
 *
 * 【課題】
 * 2つの日付の間が何日あるかを計算する関数 daysBetween を作成してください。
 *
 * 【要求事項】
 * - 関数名は daysBetween、引数は2つ（date1, date2）
 * - getTime()でミリ秒単位の数値に変換して差を計算する
 * - 1日 = 1000ミリ秒 × 60秒 × 60分 × 24時間
 * - どちらの日付が先でも正の数を返す（Math.abs()を使用）
 * - Dateの引き算がミリ秒の差になる仕組みをコメントで説明する
 *
 * 【参考】JavaScript Primer「Date」
 * https://jsprimer.net/basic/date/
 *
 * 【目安時間】15分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題4の実行結果 ===');
try {
    const dateA = new Date(2026, 6, 18); // 2026年7月18日
    const dateB = new Date(2026, 6, 25); // 2026年7月25日
    const dateC = new Date(2026, 0, 1);  // 2026年1月1日
    console.log('daysBetween(dateA, dateB):', daysBetween(dateA, dateB)); // 期待値: 7
    console.log('daysBetween(dateB, dateA):', daysBetween(dateB, dateA)); // 期待値: 7（順序が逆でも正の数）
    console.log('daysBetween(dateC, dateA):', daysBetween(dateC, dateA)); // 期待値: 198
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
