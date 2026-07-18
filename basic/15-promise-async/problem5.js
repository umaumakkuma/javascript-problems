/**
 * 15-promise-async / 問題5: Promise.allで並行処理
 *
 * 【課題】
 * 複数の非同期処理を「並行」して実行し、すべての結果を待つには
 * Promise.allを使います。
 *
 * 以下の関数が与えられています（変更不要）：
 * fetchUser() ... 100ミリ秒後に "田中" を返す
 * fetchScore() ... 100ミリ秒後に 85 を返す
 *
 * - Async Function fetchProfile を作成する
 * - Promise.allでfetchUser()とfetchScore()を並行実行する
 * - 結果を { name: "田中", score: 85 } の形のオブジェクトで返す
 *
 * 【要求事項】
 * - Promise.all([...]) と await、分割代入を組み合わせる
 * - 順番にawaitすると約200ミリ秒かかるが、Promise.allなら約100ミリ秒で
 *   済む理由をコメントで説明する
 *
 * 【参考】JavaScript Primer「非同期処理:Promise/Async Function」
 * https://jsprimer.net/basic/async/
 *
 * 【目安時間】15分
 */

// 与えられた関数（変更不要）
function fetchUser() {
    return new Promise((resolve) => setTimeout(() => resolve("田中"), 100));
}
function fetchScore() {
    return new Promise((resolve) => setTimeout(() => resolve(85), 100));
}

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題5の実行結果 ===');
(async () => {
    try {
        const startTime = Date.now();
        const profile = await fetchProfile();
        const elapsed = Date.now() - startTime;
        console.log('profile.name:', profile.name);   // 期待値: "田中"
        console.log('profile.score:', profile.score); // 期待値: 85
        console.log(`実行時間: 約${elapsed}ミリ秒`);   // 並行実行なら約100ミリ秒
        console.log('✅ 正常に実行されました');
    } catch (error) {
        console.log('❌ エラー:', error.message);
    }
})();
