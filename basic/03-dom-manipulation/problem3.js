/**
 * 03-dom-manipulation / 問題3: スタイルの変更
 *
 * 【課題】
 * problem3.html には以下のHTMLがあります：
 *
 * <div id="box">ボックス</div>
 *
 * id="box"の要素に以下のスタイルを適用してください：
 * - 背景色を青色(blue)に変更
 * - 文字色を白色(white)に変更
 *
 * 【要求事項】
 * - getElementById を使用する
 * - style プロパティを使用する
 *
 * 【動作確認】
 * この問題はブラウザで確認します。problem3.html をブラウザで開き、
 * ボックスの見た目とConsoleの ✅ / ❌ を確認してください
 *
 * 【目安時間】5分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題3の実行結果 ===');
if (typeof document === 'undefined') {
    console.log('ℹ️ この問題はブラウザ環境で実行してください');
    console.log('   problem3.html をブラウザで開き、開発者ツール（F12）のConsoleで確認します');
} else {
    try {
        const checkedElement = document.getElementById('box');
        console.log('背景色:', checkedElement.style.backgroundColor); // 期待値: "blue"
        console.log('文字色:', checkedElement.style.color);           // 期待値: "white"
        if (checkedElement.style.backgroundColor !== 'blue' || checkedElement.style.color !== 'white') {
            throw new Error('id="box" のスタイルが 背景色blue・文字色white になっていません');
        }
        console.log('✅ 正常に実行されました（青いボックスが表示されているはずです）');
    } catch (error) {
        console.log('❌ エラー:', error.message);
    }
}
