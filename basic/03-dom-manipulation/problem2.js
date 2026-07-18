/**
 * 03-dom-manipulation / 問題2: テキスト内容の変更
 *
 * 【課題】
 * problem2.html には以下のHTMLがあります：
 *
 * <p id="message">元のメッセージ</p>
 *
 * id="message"の要素のテキストを"新しいメッセージ"に変更してください
 *
 * 【要求事項】
 * - getElementById を使用する
 * - textContent プロパティを使用する
 *
 * 【動作確認】
 * この問題はブラウザで確認します。problem2.html をブラウザで開き、
 * 画面の表示とConsoleの ✅ / ❌ を確認してください
 *
 * 【目安時間】5分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題2の実行結果 ===');
if (typeof document === 'undefined') {
    console.log('ℹ️ この問題はブラウザ環境で実行してください');
    console.log('   problem2.html をブラウザで開き、開発者ツール（F12）のConsoleで確認します');
} else {
    try {
        const checkedElement = document.getElementById('message');
        console.log('現在のテキスト:', checkedElement.textContent); // 期待値: "新しいメッセージ"
        if (checkedElement.textContent !== '新しいメッセージ') {
            throw new Error('id="message" のテキストが "新しいメッセージ" になっていません');
        }
        console.log('✅ 正常に実行されました（画面の表示も変わっているはずです）');
    } catch (error) {
        console.log('❌ エラー:', error.message);
    }
}
