/**
 * 05-es6-modern / 問題1: let, constの使い分け
 * 
 * 【課題】
 * 以下の変数宣言を、適切にletまたはconstを使って書き直してください
 * また、なぜその宣言方法を選んだか理由もコメントで説明してください
 * 
 * var userName = "田中太郎"; // 値は変更される可能性がある
 * var maxAttempts = 3; // 値は変更されない定数
 * var currentScore = 0; // 値は変更される可能性がある
 * var apiUrl = "https://api.example.com"; // 値は変更されない定数
 * 
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください
// 理由もコメントで記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題1の実行結果 ===');
try {
    console.log('userName:', userName);
    console.log('maxAttempts:', maxAttempts);
    console.log('currentScore:', currentScore);
    console.log('apiUrl:', apiUrl);
    
    // 変更テスト
    try {
        userName = "佐藤花子";
        currentScore = 100;
        console.log('値の変更テスト:');
        console.log('userName:', userName);
        console.log('currentScore:', currentScore);
    } catch (e) {
        console.log('値の変更エラー:', e.message);
    }
    
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
