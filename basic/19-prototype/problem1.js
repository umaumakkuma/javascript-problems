/**
 * 19-prototype / 問題1: プロトタイプオブジェクトの存在
 *
 * 【課題】
 * 空のオブジェクトでも toString などのメソッドが呼べるのは、
 * Object.prototype というプロトタイプオブジェクトからメソッドを
 * 継承しているためです。これを確認します。
 * - 空のオブジェクトを変数 obj に代入する
 * - Object.getPrototypeOf(obj) の結果を変数 proto に代入する
 * - obj.toString と Object.prototype.toString が同じ関数であるかを
 *   厳密等価（===）で比較した結果を変数 isSameMethod に代入する
 *
 * 【要求事項】
 * - Object.getPrototypeOf を使用する
 * - 「objはtoStringを自分で持っておらず、プロトタイプチェーンを
 *   さかのぼって Object.prototype のメソッドが見つかる」ことを
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
console.log('=== 問題1の実行結果 ===');
try {
    console.log('proto === Object.prototype:', proto === Object.prototype); // 期待値: true
    console.log('isSameMethod:', isSameMethod);                             // 期待値: true
    console.log('obj.toString():', obj.toString());                         // 期待値: "[object Object]"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
