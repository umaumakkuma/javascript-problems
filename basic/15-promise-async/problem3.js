/**
 * 15-promise-async / 問題3: Async Functionとawait
 *
 * 【課題】
 * async/awaitを使って、Promiseの結果を同期処理のように扱ってください。
 *
 * 以下の関数が与えられています（変更不要）：
 * fetchNumber() ... 50ミリ秒後に42を返すPromise
 *
 * - Async Function doubleNumber を作成する
 * - doubleNumberの中でfetchNumber()をawaitし、その結果を2倍して返す
 *
 * 【要求事項】
 * - async functionキーワードを使用する
 * - awaitはAsync Functionの中でしか使えないことをコメントで説明する
 * - Async Functionの戻り値は常にPromiseになることをコメントで説明する
 *
 * 【参考】JavaScript Primer「非同期処理:Promise/Async Function」
 * https://jsprimer.net/basic/async/
 *
 * 【目安時間】10分
 */

// 与えられた関数（変更不要）
function fetchNumber() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(42), 50);
    });
}

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題3の実行結果 ===');
(async () => {
    try {
        const result = await doubleNumber();
        console.log('doubleNumberの結果:', result); // 期待値: 84
        console.log('✅ 正常に実行されました');
    } catch (error) {
        console.log('❌ エラー:', error.message);
    }
})();
