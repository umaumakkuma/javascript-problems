/**
 * 05-es6-modern / 問題3: テンプレートリテラル
 * 
 * 【課題】
 * 以下の文字列連結をテンプレートリテラルを使って書き換えてください
 * 
 * const name = "佐藤";
 * const age = 30;
 * const job = "デザイナー";
 * 
 * const introduction = "私の名前は" + name + "です。年齢は" + age + "歳で、職業は" + job + "です。";
 * 
 * 【要求事項】
 * - テンプレートリテラル（バッククォート）を使用する
 * - 変数の埋め込みには ${} を使用する
 * 
 * 【目安時間】5分
 */

// 与えられた変数（変更不要）
const name = "佐藤";
const age = 30;
const job = "デザイナー";

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題3の実行結果 ===');
try {
    console.log('introduction:', introduction);
    console.log('期待値: 私の名前は佐藤です。年齢は30歳で、職業はデザイナーです。');
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
