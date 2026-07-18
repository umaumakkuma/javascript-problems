/**
 * 03-dom-manipulation / 問題5: 要素の表示・非表示
 *
 * 【課題】
 * problem5.html には以下のHTMLがあります：
 *
 * <div id="content">表示される内容</div>
 * <button id="toggleButton">表示/非表示</button>
 *
 * id="toggleButton"がクリックされた時に、id="content"の要素の表示・非表示を切り替える
 * 処理を実装してください（display: noneとdisplay: blockを使用）
 *
 * 【要求事項】
 * - addEventListener を使用する
 * - style.display プロパティを使用する
 * - クリックするたびに表示・非表示が切り替わる
 *
 * 【動作確認】
 * この問題はブラウザで確認します。problem5.html をブラウザで開き、
 * Consoleの ✅ / ❌ と、実際にボタンをクリックしたときの動きを確認してください
 *
 * 【目安時間】15分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題5の実行結果 ===');
if (typeof document === 'undefined') {
    console.log('ℹ️ この問題はブラウザ環境で実行してください');
    console.log('   problem5.html をブラウザで開き、開発者ツール（F12）のConsoleで確認します');
} else {
    try {
        const checkedContent = document.getElementById('content');
        const checkedButton = document.getElementById('toggleButton');
        // クリックを2回シミュレートして、表示・非表示が切り替わるか確認する
        checkedButton.click();
        const afterFirstClick = checkedContent.style.display;
        checkedButton.click();
        const afterSecondClick = checkedContent.style.display;
        console.log('1回クリック後のdisplay:', afterFirstClick);   // 期待値: "none"
        console.log('2回クリック後のdisplay:', afterSecondClick);  // 期待値: "block"
        if (afterFirstClick !== 'none' || afterSecondClick !== 'block') {
            throw new Error('クリックで表示・非表示が切り替わっていません');
        }
        console.log('✅ 正常に実行されました（ボタンを自分でもクリックして確認してみましょう）');
    } catch (error) {
        console.log('❌ エラー:', error.message);
    }
}
