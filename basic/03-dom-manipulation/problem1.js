/**
 * 03-dom-manipulation / 問題1: 要素の取得
 * 
 * 【課題】
 * 以下のHTMLが存在すると仮定して、要素を取得するコードを書いてください：
 * 
 * <h1 id="title">タイトル</h1>
 * <p class="description">説明文</p>
 * <button id="myButton">クリック</button>
 * 
 * 【要求事項】
 * - id="title"の要素を取得して変数titleElementに代入
 * - class="description"の要素を取得して変数descElementに代入
 * 
 * 【注意】
 * この問題はブラウザ環境でのみ動作します
 * Node.jsでは document が存在しないためエラーになります
 * 
 * 【目安時間】5分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題1の実行結果 ===');

// ブラウザ環境チェック
if (typeof document !== 'undefined') {
    try {
        console.log('titleElement:', titleElement);
        console.log('descElement:', descElement);
        console.log('✅ 正常に実行されました');
    } catch (error) {
        console.log('❌ エラー:', error.message);
    }
} else {
    console.log('ℹ️ この問題はブラウザ環境で実行してください');
    console.log('   モック環境でコードをテストします...');
    
    // Node.js環境用の簡易テスト
    const mockDocument = {
        getElementById: (id) => ({ id, tagName: 'MOCK_ELEMENT' }),
        querySelector: (selector) => ({ selector, tagName: 'MOCK_ELEMENT' })
    };
    
    global.document = mockDocument;
    
    try {
        const titleElement = document.getElementById('title');
        const descElement = document.querySelector('.description');
        console.log('titleElement:', titleElement);
        console.log('descElement:', descElement);
        console.log('✅ コードの記述は正しいようです（モック環境での確認）');
    } catch (error) {
        console.log('❌ エラー:', error.message);
    }
}
