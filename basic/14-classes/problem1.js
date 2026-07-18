/**
 * 14-classes / 問題1: クラスの定義とインスタンス化
 *
 * 【課題】
 * classキーワードを使ってクラスを定義し、インスタンスを作成してください：
 * - Personクラスを定義する
 * - constructorで name と age の2つの引数を受け取り、
 *   this.name と this.age に代入する
 * - new演算子で Person("田中", 25) のインスタンスを作成し、
 *   変数 person に代入する
 *
 * 【要求事項】
 * - class構文を使用する
 * - constructorの役割（newしたときに呼ばれる初期化処理）を
 *   コメントで説明する
 *
 * 【参考】JavaScript Primer「クラス」
 * https://jsprimer.net/basic/class/
 *
 * 【目安時間】5分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題1の実行結果 ===');
try {
    console.log('person.name:', person.name);                     // 期待値: "田中"
    console.log('person.age:', person.age);                       // 期待値: 25
    console.log('person instanceof Person:', person instanceof Person); // 期待値: true
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
