/**
 * 11-strings / 問題1: 文字列の検索
 *
 * 【課題】
 * 文字列の検索メソッドを使い分けてください：
 *
 * const url = "https://example.com/index.html";
 *
 * - "https:"で始まっているかをstartsWith()で判定し、変数 isHttps に代入
 * - ".html"で終わっているかをendsWith()で判定し、変数 isHtml に代入
 * - "example"が含まれているかをincludes()で判定し、変数 hasExample に代入
 * - "com"が最初に現れる位置をindexOf()で取得し、変数 comIndex に代入
 *
 * 【要求事項】
 * - urlは自分で定義する
 * - 真偽値が欲しい場合はincludes等、位置が欲しい場合はindexOfという
 *   使い分けをコメントで説明する
 *
 * 【参考】JavaScript Primer「文字列」
 * https://jsprimer.net/basic/string/
 *
 * 【目安時間】5分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題1の実行結果 ===');
try {
    console.log('isHttps:', isHttps);       // 期待値: true
    console.log('isHtml:', isHtml);         // 期待値: true
    console.log('hasExample:', hasExample); // 期待値: true
    console.log('comIndex:', comIndex);     // 期待値: 16
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
