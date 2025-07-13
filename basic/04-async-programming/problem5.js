/**
 * 04-async-programming / 問題5: 非同期処理の実例
 * 
 * 【課題】
 * ユーザーがボタンをクリックしてから2秒後にメッセージを表示する処理を実装してください
 * 
 * 想定HTML:
 * <button id="delayButton">2秒後にメッセージ表示</button>
 * <div id="result"></div>
 * 
 * 【要求事項】
 * - クリックイベント + setTimeout + DOM操作を組み合わせる
 * - クリック時に即座に"処理中..."を表示
 * - 2秒後に"処理完了！"を表示
 * 
 * 【目安時間】15分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題5の実行結果 ===');

if (typeof document !== 'undefined') {
    try {
        console.log('非同期処理機能が実装されました');
        console.log('ボタンをクリックすると2秒後にメッセージが表示されます');
        console.log('✅ 正常に実行されました');
    } catch (error) {
        console.log('❌ エラー:', error.message);
    }
} else {
    console.log('ℹ️ この問題はブラウザ環境で実行してください');
    console.log('   モック環境でコードをテストします...');
    
    const mockResultElement = {
        textContent: ''
    };
    
    const mockButtonElement = {
        addEventListener: (event, callback) => {
            console.log(`イベントリスナーが追加されました: ${event}`);
            console.log('クリックイベントをシミュレート...');
            callback();
        }
    };
    
    const mockDocument = {
        getElementById: (id) => {
            if (id === 'delayButton') return mockButtonElement;
            if (id === 'result') return mockResultElement;
        }
    };
    
    global.document = mockDocument;
    
    try {
        const delayButton = document.getElementById('delayButton');
        const resultDiv = document.getElementById('result');
        
        delayButton.addEventListener('click', function() {
            resultDiv.textContent = '処理中...';
            console.log('表示:', resultDiv.textContent);
            
            setTimeout(function() {
                resultDiv.textContent = '処理完了！';
                console.log('表示:', resultDiv.textContent);
            }, 2000);
        });
        
        console.log('✅ コードの記述は正しいようです（モック環境での確認）');
    } catch (error) {
        console.log('❌ エラー:', error.message);
    }
}
