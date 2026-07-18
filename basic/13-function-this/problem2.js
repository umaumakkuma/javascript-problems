/**
 * 13-function-this / 問題2: thisが失われる問題とbindによる修正
 *
 * 【課題】
 * メソッドを変数に代入して呼び出すと、thisが失われて正しく動作しません。
 *
 * const user = {
 *     name: "田中",
 *     sayName() {
 *         return this.name;
 *     }
 * };
 * const say = user.sayName;
 * say(); // thisがuserではなくなるため、"田中"は返らない
 *
 * bind()を使ってthisをuserに固定した関数を作り、この問題を解決してください。
 *
 * 【要求事項】
 * - 上記のuserオブジェクトを自分で定義する
 * - user.sayNameにbind(user)を適用した関数を変数 boundSay に代入
 * - 「thisは関数の定義時ではなく、呼び出し方で決まる」ことを
 *   コメントで説明する
 *
 * 【参考】JavaScript Primer「関数とthis」
 * https://jsprimer.net/basic/function-this/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題2の実行結果 ===');
try {
    console.log('user.sayName():', user.sayName()); // 期待値: "田中"（メソッドとして呼ぶとthisはuser）
    console.log('boundSay():', boundSay());         // 期待値: "田中"（bindでthisを固定済み）
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
