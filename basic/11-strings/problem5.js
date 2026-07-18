/**
 * 11-strings / 問題5: 文字列とUnicode（絵文字の文字数）
 *
 * 【課題】
 * JavaScriptのlengthプロパティはCode Unit（UTF-16の符号単位）の数を返すため、
 * 絵文字などサロゲートペアの文字は2とカウントされてしまいます。
 * 見た目の文字数を正しく数える関数 countCharacters を作成してください。
 *
 * - "🍎".length の結果を変数 emojiLength に代入（2になることを確認）
 * - Code Point単位で文字数を数える関数 countCharacters を作成
 *
 * 【要求事項】
 * - countCharactersの引数は1つ（str）
 * - Array.from(str)またはスプレッド構文[...str]で文字列をCode Point単位の
 *   配列に変換し、その要素数を返す
 * - lengthが2になる理由（サロゲートペア）をコメントで説明する
 *
 * 【参考】JavaScript Primer「文字列とUnicode」
 * https://jsprimer.net/basic/string-unicode/
 *
 * 【目安時間】15分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題5の実行結果 ===');
try {
    console.log('emojiLength:', emojiLength);                       // 期待値: 2
    console.log('countCharacters("🍎"):', countCharacters("🍎"));   // 期待値: 1
    console.log('countCharacters("🍎🍊"):', countCharacters("🍎🍊")); // 期待値: 2
    console.log('countCharacters("abc"):', countCharacters("abc")); // 期待値: 3
    console.log('countCharacters("あいう"):', countCharacters("あいう")); // 期待値: 3
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
