/**
 * 04-async-programming / 問題2: コールバック関数
 * 
 * 【課題】
 * 数値を受け取り、1秒後にその数値を2倍にして結果をコールバック関数に渡す関数を作成してください
 * 
 * 【要求事項】
 * - 関数名は doubleAfterDelay とする
 * - 第1引数: number（数値）
 * - 第2引数: callback（コールバック関数）
 * - setTimeoutを使用して1秒後に実行
 * 
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題2の実行結果 ===');
try {
    console.log('開始時刻:', new Date().toLocaleTimeString());
    
    doubleAfterDelay(5, function(result) {
        console.log('結果:', result); // 1秒後に10が出力される
        console.log('終了時刻:', new Date().toLocaleTimeString());
    });
    
    doubleAfterDelay(8, function(result) {
        console.log('結果:', result); // 1秒後に16が出力される
    });
    
    console.log('✅ 関数呼び出し完了（1秒後に結果が表示されます）');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
