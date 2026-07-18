/**
 * 13-function-this / 問題1: メソッドにおけるthis
 *
 * 【課題】
 * メソッドの中のthisは「そのメソッドが属するオブジェクト」を参照します。
 * これを利用したオブジェクトを作成してください：
 * - nameプロパティ（"田中"）を持つオブジェクト person を作成
 * - personに greetメソッドを定義し、thisを使って
 *   "こんにちは、田中です" という文字列を返す
 *
 * 【要求事項】
 * - greetメソッドはメソッドの短縮記法（greet() { ... }）で定義する
 * - メソッド内では person.name ではなく this.name で参照する
 * - テンプレートリテラルを使用する
 *
 * 【参考】JavaScript Primer「関数とthis」
 * https://jsprimer.net/basic/function-this/
 *
 * 【目安時間】5分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題1の実行結果 ===');
try {
    console.log('person.greet():', person.greet()); // 期待値: "こんにちは、田中です"
    person.name = "佐藤";
    console.log('名前変更後:', person.greet());     // 期待値: "こんにちは、佐藤です"（thisで参照していれば変わる）
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
