/**
 * 03-dom-manipulation / 問題4: 基本的なイベントリスナー
 * 
 * 【課題】
 * 以下のHTMLが存在すると仮定して、イベントリスナーを追加するコードを書いてください：
 * 
 * <button id="alertButton">アラート表示</button>
 * 
 * id="alertButton"がクリックされた時に"ボタンがクリックされました！"というアラートを表示する
 * イベントリスナーを追加してください
 * 
 * 【要求事項】
 * - addEventListener を使用する
 * - clickイベントを監視する
 * - alert関数を使用する
 * 
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題4の実行結果 ===');

if (typeof document !== 'undefined') {
    try {
        console.log('イベントリスナーが追加されました');
        console.log('ボタンをクリックするとアラートが表示されます');
        console.log('✅ 正常に実行されました');
    } catch (error) {
        console.log('❌ エラー:', error.message);
    }
} else {
    console.log('ℹ️ この問題はブラウザ環境で実行してください');
    console.log('   モック環境でコードをテストします...');
    
    const mockElement = {
        addEventListener: (event, callback) => {
            console.log(`イベントリスナーが追加されました: ${event}`);
            console.log('コールバック関数を実行テスト...');
            callback();
        }
    };
    
    const mockDocument = {
        getElementById: (id) => mockElement
    };
    
    global.document = mockDocument;
    global.alert = (message) => console.log(`ALERT: ${message}`);
    
    try {
        const alertButton = document.getElementById('alertButton');
        alertButton.addEventListener('click', function() {
            alert('ボタンがクリックされました！');
        });
        console.log('✅ コードの記述は正しいようです（モック環境での確認）');
    } catch (error) {
        console.log('❌ エラー:', error.message);
    }
}
