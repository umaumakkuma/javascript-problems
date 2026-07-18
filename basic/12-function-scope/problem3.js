/**
 * 12-function-scope / 問題3: クロージャーの基本（カウンター）
 *
 * 【課題】
 * クロージャーを使ったカウンター関数 createCounter を作成してください。
 * クロージャーとは「関数が、自身の外側のスコープの変数を記憶し続ける」
 * 仕組みです。
 *
 * 【要求事項】
 * - createCounterは「呼ぶたびに1ずつ増えた数を返す関数」を返す
 * - カウントを保持する変数は createCounter の中で宣言する
 *   （グローバル変数を使わない）
 * - createCounter()で作った2つのカウンターは、互いに影響しない
 *   独立したカウントを持つこと
 *
 * 【参考】JavaScript Primer「関数とスコープ」
 * https://jsprimer.net/basic/function-scope/
 *
 * 【目安時間】15分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題3の実行結果 ===');
try {
    const counterA = createCounter();
    const counterB = createCounter();
    console.log('counterA():', counterA()); // 期待値: 1
    console.log('counterA():', counterA()); // 期待値: 2
    console.log('counterA():', counterA()); // 期待値: 3
    console.log('counterB():', counterB()); // 期待値: 1（counterAとは独立）
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
