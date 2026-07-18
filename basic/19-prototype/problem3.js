/**
 * 19-prototype / 問題3: Object.createによるプロトタイプチェーンの構築
 *
 * 【課題】
 * Object.create(proto) を使うと、protoをプロトタイプに持つ
 * 新しいオブジェクトを作れます。
 * - greet() メソッド（"こんにちは" を返す）を持つオブジェクトを
 *   変数 animal に代入する
 * - Object.create(animal) で作ったオブジェクトを変数 dog に代入する
 * - dog に name プロパティ "ポチ" を追加する
 *
 * 【要求事項】
 * - Object.create を使用する
 * - dog.greet() が呼べるのは「dogが自分でgreetを持っているから」では
 *   なく「プロトタイプであるanimalのgreetが見つかるから」であることを
 *   コメントで説明する
 *
 * 【参考】JavaScript Primer「プロトタイプオブジェクト」
 * https://jsprimer.net/basic/prototype-object/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題3の実行結果 ===');
try {
    console.log('dog.greet():', dog.greet());                                   // 期待値: "こんにちは"
    console.log('dog.name:', dog.name);                                         // 期待値: "ポチ"
    console.log('プロトタイプはanimalか:', Object.getPrototypeOf(dog) === animal); // 期待値: true
    console.log('greetは自身のプロパティか:', Object.hasOwn(dog, 'greet'));       // 期待値: false
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
