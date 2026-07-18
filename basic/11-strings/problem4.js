/**
 * 11-strings / 問題4: 文字列の組み立てとパディング
 *
 * 【課題】
 * 時と分を受け取り、"09:05" のようなゼロ埋め形式の文字列を返す関数
 * formatTime を作成してください。
 *
 * 【要求事項】
 * - 関数名は formatTime、引数は2つ（hours, minutes）
 * - String()で文字列に変換してから、padStart(2, "0")で2桁にゼロ埋めする
 * - テンプレートリテラルで "時:分" の形式に組み立てる
 * - formatTime(9, 5) は "09:05" を返す
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
console.log('=== 問題4の実行結果 ===');
try {
    console.log('formatTime(9, 5):', formatTime(9, 5));     // 期待値: "09:05"
    console.log('formatTime(23, 59):', formatTime(23, 59)); // 期待値: "23:59"
    console.log('formatTime(0, 0):', formatTime(0, 0));     // 期待値: "00:00"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
