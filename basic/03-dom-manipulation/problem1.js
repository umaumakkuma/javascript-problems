/**
 * 03-dom-manipulation / 問題1: 要素の取得
 *
 * 【課題】
 * problem1.html には以下のHTMLがあります：
 *
 * <h1 id="title">タイトル</h1>
 * <p class="description">説明文</p>
 * <button id="myButton">クリック</button>
 *
 * 【要求事項】
 * - id="title"の要素を取得して変数titleElementに代入
 * - class="description"の要素を取得して変数descElementに代入
 *
 * 【動作確認】
 * この問題はブラウザで確認します。problem1.html をブラウザで開き、
 * 開発者ツール（F12）のConsoleで ✅ / ❌ を確認してください
 *
 * 【目安時間】5分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題1の実行結果 ===');
if (typeof document === 'undefined') {
    console.log('ℹ️ この問題はブラウザ環境で実行してください');
    console.log('   problem1.html をブラウザで開き、開発者ツール（F12）のConsoleで確認します');
} else {
    try {
        console.log('titleElement:', titleElement); // 期待値: <h1 id="title"> の要素
        console.log('descElement:', descElement);   // 期待値: <p class="description"> の要素
        if (!titleElement || titleElement.id !== 'title') {
            throw new Error('titleElement に id="title" の要素が入っていません');
        }
        if (!descElement || !descElement.classList.contains('description')) {
            throw new Error('descElement に class="description" の要素が入っていません');
        }
        console.log('✅ 正常に実行されました');
    } catch (error) {
        console.log('❌ エラー:', error.message);
    }
}
