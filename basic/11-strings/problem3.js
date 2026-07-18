/**
 * 11-strings / 問題3: 文字列の置換
 *
 * 【課題】
 * replace()とreplaceAll()で文字列を置換してください：
 * - "2026-07-18" の "-" をすべて "/" に置換した文字列を
 *   変数 slashDate に代入（replaceAll使用）
 * - テンプレート文字列 "こんにちは、{name}さん" の {name} を
 *   引数の名前に置き換える関数 greet を作成
 *
 * 【要求事項】
 * - replace()は「最初の1件だけ」、replaceAll()は「すべて」を置換する違いを
 *   コメントで説明する
 * - greet関数の引数は1つ（name）
 * - greet("田中") は "こんにちは、田中さん" を返す
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
console.log('=== 問題3の実行結果 ===');
try {
    console.log('slashDate:', slashDate);         // 期待値: "2026/07/18"
    console.log('greet("田中"):', greet("田中")); // 期待値: "こんにちは、田中さん"
    console.log('greet("佐藤"):', greet("佐藤")); // 期待値: "こんにちは、佐藤さん"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
