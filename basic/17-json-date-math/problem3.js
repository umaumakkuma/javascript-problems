/**
 * 17-json-date-math / 問題3: Dateの基本
 *
 * 【課題】
 * Dateオブジェクトから日付の各要素を取り出し、フォーマットしてください：
 * - new Date(2026, 6, 18) で2026年7月18日のDateを作成し、変数 date に代入
 *   （月は0始まりなので、6が7月を表すことに注意！）
 * - Dateオブジェクトを受け取り "2026/07/18" 形式の文字列を返す関数
 *   formatDate を作成
 *
 * 【要求事項】
 * - formatDateでは getFullYear() / getMonth() / getDate() を使用する
 * - getMonth()は0始まりなので+1する
 * - 月と日はpadStart(2, "0")で2桁にゼロ埋めする
 * - 「月が0始まり」はバグの原因になりやすいことをコメントで説明する
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
console.log('=== 問題3の実行結果 ===');
try {
    console.log('date.getFullYear():', date.getFullYear()); // 期待値: 2026
    console.log('formatDate(date):', formatDate(date));     // 期待値: "2026/07/18"
    console.log('formatDate(new Date(2025, 0, 5)):', formatDate(new Date(2025, 0, 5))); // 期待値: "2025/01/05"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
