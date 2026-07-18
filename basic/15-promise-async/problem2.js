/**
 * 15-promise-async / 問題2: resolveとreject
 *
 * 【課題】
 * 成功と失敗の両方がありえるPromiseを返す関数 checkAge を作成してください。
 *
 * 【要求事項】
 * - 関数名は checkAge、引数は1つ（age）
 * - ageが0以上なら resolve(age) する
 * - ageが負の数なら reject(new Error("年齢は0以上を指定してください")) する
 * - rejectには必ずErrorオブジェクトを渡す（文字列を直接渡さない）ことを
 *   コメントで説明する
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
console.log('=== 問題2の実行結果 ===');
try {
    checkAge(25)
        .then((age) => {
            console.log('成功:', age); // 期待値: 25
            return checkAge(-1);
        })
        .then(() => {
            console.log('❌ ここは実行されないはずです');
        })
        .catch((error) => {
            console.log('失敗:', error.message); // 期待値: "年齢は0以上を指定してください"
            console.log('✅ 正常に実行されました');
        });
} catch (error) {
    console.log('❌ エラー:', error.message);
}
