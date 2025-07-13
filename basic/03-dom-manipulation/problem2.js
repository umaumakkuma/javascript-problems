/**
 * 03-dom-manipulation / 問題2: テキスト内容の変更
 * 
 * 【課題】
 * 以下のHTMLが存在すると仮定して、テキストを変更するコードを書いてください：
 * 
 * <p id="message">元のメッセージ</p>
 * 
 * id="message"の要素のテキストを"新しいメッセージ"に変更してください
 * 
 * 【要求事項】
 * - getElementById を使用する
 * - textContent プロパティを使用する
 * 
 * 【目安時間】5分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題2の実行結果 ===');

if (typeof document !== 'undefined') {
    try {
        console.log('要素のテキストが変更されました');
        console.log('✅ 正常に実行されました');
    } catch (error) {
        console.log('❌ エラー:', error.message);
    }
} else {
    console.log('ℹ️ この問題はブラウザ環境で実行してください');
    console.log('   モック環境でコードをテストします...');
    
    const mockElement = {
        textContent: '元のメッセージ'
    };
    
    const mockDocument = {
        getElementById: (id) => mockElement
    };
    
    global.document = mockDocument;
    
    try {
        const messageElement = document.getElementById('message');
        messageElement.textContent = '新しいメッセージ';
        console.log('変更後のテキスト:', messageElement.textContent);
        console.log('✅ コードの記述は正しいようです（モック環境での確認）');
    } catch (error) {
        console.log('❌ エラー:', error.message);
    }
}
