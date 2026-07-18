/**
 * 15-promise-async / 問題1: Promiseを作る
 *
 * 【課題】
 * 指定したミリ秒後にresolveするPromiseを返す関数 delay を作成してください。
 * setTimeoutをPromiseでラップする、非同期処理の基本パターンです。
 *
 * 【要求事項】
 * - 関数名は delay、引数は1つ（ms）
 * - new Promise((resolve) => { ... }) の形でPromiseを作成する
 * - setTimeoutでmsミリ秒後にresolveを呼ぶ
 * - resolveの引数には "msミリ秒経過"（例: "100ミリ秒経過"）という文字列を渡す
 *
 * 【参考】JavaScript Primer「非同期処理:Promise/Async Function」
 * https://jsprimer.net/basic/async/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題1の実行結果 ===');
try {
    const promise = delay(100);
    console.log('delayの戻り値はPromise:', promise instanceof Promise); // 期待値: true
    promise.then((message) => {
        console.log('resolveされた値:', message); // 期待値: "100ミリ秒経過"
        console.log('✅ 正常に実行されました');
    });
} catch (error) {
    console.log('❌ エラー:', error.message);
}
