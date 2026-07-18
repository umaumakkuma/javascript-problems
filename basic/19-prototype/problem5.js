/**
 * 19-prototype / 問題5: クラスのメソッドはprototypeに定義される
 *
 * 【課題】
 * class構文で定義したメソッドは、実はインスタンスではなく
 * クラスのprototypeオブジェクトに1つだけ定義されます。
 * - constructorでnameを受け取り、hello() メソッドで
 *   `こんにちは、${this.name}` を返すクラス Greeter を定義する
 * - new Greeter("太郎") で作ったインスタンスを変数 greeter に代入する
 * - greeter.hello === Greeter.prototype.hello の結果を
 *   変数 isPrototypeMethod に代入する
 *
 * 【要求事項】
 * - class構文を使用する
 * - 「メソッドは各インスタンスにコピーされるのではなく、全インスタンスが
 *   プロトタイプチェーン経由で同じ1つの関数を共有している」ことを
 *   コメントで説明する
 *
 * 【参考】JavaScript Primer「プロトタイプオブジェクト」
 * https://jsprimer.net/basic/prototype-object/
 * （あわせて「クラス」https://jsprimer.net/basic/class/ も参照）
 *
 * 【目安時間】15分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題5の実行結果 ===');
try {
    console.log('greeter.hello():', greeter.hello());                       // 期待値: "こんにちは、太郎"
    console.log('isPrototypeMethod:', isPrototypeMethod);                   // 期待値: true
    console.log('helloは自身のプロパティか:', Object.hasOwn(greeter, 'hello')); // 期待値: false
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
