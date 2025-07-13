/**
 * 06-error-handling-debug / 問題4: 基本的なデバッグ手順
 * 
 * 【課題】
 * 以下の関数は文字列を逆順にする予定ですが、正しく動作しません。
 * 問題を特定し、修正してください
 * 
 * 【要求事項】
 * - ステップバイステップでデバッグする
 * - console.logで中間値を確認
 * - 問題を特定して修正
 * 
 * 【目安時間】15分
 */

// 問題のある関数
function reverseString(str) {
    let result = "";
    for (let i = str.length; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

// ========== ここから回答を記述 ==========

// デバッグ手順:
// 1. 

// 2. 

// 3. 

// 修正されたコード:


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題4の実行結果 ===');
console.log('reverseString("hello"):', reverseString("hello")); // 期待値: "olleh"
console.log('reverseString("JavaScript"):', reverseString("JavaScript")); // 期待値: "tpircSavaJ"
