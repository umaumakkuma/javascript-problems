/**
 * 06-error-handling-debug / 問題5: ブラウザ開発者ツールの基本
 * 
 * 【課題】
 * 以下のHTMLとJavaScriptコードについて、
 * ブラウザの開発者ツールで確認すべき項目を3つ挙げてください
 * 
 * HTML:
 * <button id="clickMe">クリック</button>
 * <div id="output"></div>
 * 
 * JavaScript:
 * document.getElementById("clickMe").addEventListener("click", function() {
 *     const output = document.getElementById("output");
 *     output.textContent = "ボタンがクリックされました：" + new Date();
 * });
 * 
 * 【要求事項】
 * - 開発者ツールの機能を理解する
 * - デバッグに役立つ確認項目を挙げる
 * 
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// 開発者ツールで確認すべき項目を3つコメントで記述してください：

// 1. 


// 2. 


// 3. 


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題5の実行結果 ===');

if (typeof document !== 'undefined') {
    try {
        document.getElementById("clickMe").addEventListener("click", function() {
            const output = document.getElementById("output");
            output.textContent = "ボタンがクリックされました：" + new Date();
        });
        console.log('✅ イベントリスナーが正常に設定されました');
        console.log('ブラウザで実際にボタンをクリックして確認してください');
    } catch (error) {
        console.log('❌ エラー:', error.message);
        console.log('HTMLに必要な要素が存在するか確認してください');
    }
} else {
    console.log('ℹ️ この問題はブラウザ環境で確認してください');
    console.log('開発者ツールでの確認項目について考察してください');
}
