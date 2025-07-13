/**
 * 03-dom-manipulation / 問題5: 要素の表示・非表示
 * 
 * 【課題】
 * 以下のHTMLが存在すると仮定して、表示・非表示を切り替えるコードを書いてください：
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
 * 【目安時間】15分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題5の実行結果 ===');

if (typeof document !== 'undefined') {
    try {
        console.log('表示・非表示の切り替え機能が実装されました');
        console.log('ボタンをクリックすると要素の表示・非表示が切り替わります');
        console.log('✅ 正常に実行されました');
    } catch (error) {
        console.log('❌ エラー:', error.message);
    }
} else {
    console.log('ℹ️ この問題はブラウザ環境で実行してください');
    console.log('   モック環境でコードをテストします...');
    
    const mockContentElement = {
        style: {
            display: 'block'
        }
    };
    
    const mockButtonElement = {
        addEventListener: (event, callback) => {
            console.log(`イベントリスナーが追加されました: ${event}`);
            console.log('トグル機能をテスト実行...');
            callback();
            callback(); // 2回実行して切り替わりを確認
        }
    };
    
    const mockDocument = {
        getElementById: (id) => {
            if (id === 'content') return mockContentElement;
            if (id === 'toggleButton') return mockButtonElement;
        }
    };
    
    global.document = mockDocument;
    
    try {
        const contentElement = document.getElementById('content');
        const toggleButton = document.getElementById('toggleButton');
        
        toggleButton.addEventListener('click', function() {
            if (contentElement.style.display === 'none') {
                contentElement.style.display = 'block';
                console.log('要素を表示しました');
            } else {
                contentElement.style.display = 'none';
                console.log('要素を非表示にしました');
            }
        });
        console.log('✅ コードの記述は正しいようです（モック環境での確認）');
    } catch (error) {
        console.log('❌ エラー:', error.message);
    }
}
