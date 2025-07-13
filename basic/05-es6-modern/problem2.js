/**
 * 05-es6-modern / 問題2: アロー関数の基本
 * 
 * 【課題】
 * 以下の通常の関数をアロー関数に書き換えてください
 * 
 * function multiply(a, b) {
 *     return a * b;
 * }
 * 
 * function sayHello(name) {
 *     return "Hello, " + name;
 * }
 * 
 * 【要求事項】
 * - アロー関数記法を使用する
 * - 同じ機能を保つ
 * 
 * 【目安時間】5分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題2の実行結果 ===');
try {
    console.log('multiply(4, 5) =', multiply(4, 5)); // 期待値: 20
    console.log('multiply(3, 7) =', multiply(3, 7)); // 期待値: 21
    console.log('sayHello("太郎") =', sayHello("太郎")); // 期待値: "Hello, 太郎"
    console.log('sayHello("花子") =', sayHello("花子")); // 期待値: "Hello, 花子"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
