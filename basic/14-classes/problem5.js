/**
 * 14-classes / 問題5: 継承（extendsとsuper）
 *
 * 【課題】
 * extendsを使ったクラスの継承を実装してください：
 * - Animalクラス: constructorで name を受け取る。
 *   makeSound()メソッドは "..." を返す。
 *   introduce()メソッドは "私は<name>です" を返す。
 * - Dogクラス: Animalを継承する。
 *   constructorで name と breed（犬種）を受け取り、
 *   nameはsuper()で親クラスに渡し、breedは自分で保持する。
 *   makeSound()をオーバーライドして "ワン！" を返す。
 *
 * 【要求事項】
 * - extendsとsuper()を使用する
 * - 子クラスのconstructorでは、this に触る前に super() を呼ぶ必要が
 *   あることをコメントで説明する
 * - introduce()はDogで再定義せず、親クラスのものがそのまま使えることを確認する
 *
 * 【参考】JavaScript Primer「クラス」
 * https://jsprimer.net/basic/class/
 *
 * 【目安時間】15分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題5の実行結果 ===');
try {
    const animal = new Animal("ポチ");
    const dog = new Dog("ハチ", "秋田犬");
    console.log('animal.makeSound():', animal.makeSound()); // 期待値: "..."
    console.log('dog.makeSound():', dog.makeSound());       // 期待値: "ワン！"（オーバーライド）
    console.log('dog.introduce():', dog.introduce());       // 期待値: "私はハチです"（親クラスから継承）
    console.log('dog.breed:', dog.breed);                   // 期待値: "秋田犬"
    console.log('dog instanceof Animal:', dog instanceof Animal); // 期待値: true
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
