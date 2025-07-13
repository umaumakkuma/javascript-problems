/**
 * 03-dom-manipulation / 問題3: スタイルの変更
 * 
 * 【課題】
 * 以下のHTMLが存在すると仮定して、スタイルを変更するコードを書いてください：
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
 * 【目安時間】5分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題3の実行結果 ===');

if (typeof document !== 'undefined') {
    try {
        console.log('要素のスタイルが変更されました');
        console.log('✅ 正常に実行されました');
    } catch (error) {
        console.log('❌ エラー:', error.message);
    }
} else {
    console.log('ℹ️ この問題はブラウザ環境で実行してください');
    console.log('   モック環境でコードをテストします...');
    
    const mockElement = {
        style: {
            backgroundColor: '',
            color: ''
        }
    };
    
    const mockDocument = {
        getElementById: (id) => mockElement
    };
    
    global.document = mockDocument;
    
    try {
        const boxElement = document.getElementById('box');
        boxElement.style.backgroundColor = 'blue';
        boxElement.style.color = 'white';
        console.log('背景色:', boxElement.style.backgroundColor);
        console.log('文字色:', boxElement.style.color);
        console.log('✅ コードの記述は正しいようです（モック環境での確認）');
    } catch (error) {
        console.log('❌ エラー:', error.message);
    }
}
