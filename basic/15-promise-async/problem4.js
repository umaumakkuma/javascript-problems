/**
 * 15-promise-async / 問題4: async/awaitのエラーハンドリング
 *
 * 【課題】
 * awaitしたPromiseがrejectされた場合、try-catchでエラーを捕捉できます。
 *
 * 以下の関数が与えられています（変更不要）：
 * mayFail(shouldFail) ... shouldFailがtrueならreject、falseならresolveするPromise
 *
 * - Async Function safeCall を作成する（引数は shouldFail の1つ）
 * - mayFail(shouldFail)をawaitし、成功したら "成功: <値>" を返す
 * - 失敗したらtry-catchで捕捉し、"エラー: <エラーメッセージ>" を返す
 *
 * 【要求事項】
 * - try-catch文とawaitを組み合わせる
 * - 同期処理と同じtry-catch構文で非同期のエラーを扱えるのが
 *   async/awaitの利点であることをコメントで説明する
 *
 * 【参考】JavaScript Primer「非同期処理:Promise/Async Function」
 * https://jsprimer.net/basic/async/
 *
 * 【目安時間】15分
 */

// 与えられた関数（変更不要）
function mayFail(shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("処理に失敗しました"));
            } else {
                resolve("データ取得完了");
            }
        }, 50);
    });
}

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題4の実行結果 ===');
(async () => {
    try {
        console.log('safeCall(false):', await safeCall(false)); // 期待値: "成功: データ取得完了"
        console.log('safeCall(true):', await safeCall(true));   // 期待値: "エラー: 処理に失敗しました"
        console.log('✅ 正常に実行されました');
    } catch (error) {
        console.log('❌ エラー:', error.message);
    }
})();
