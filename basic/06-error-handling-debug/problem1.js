/**
 * 06-error-handling-debug / 問題1: try-catchの基本
 * 
 * 【課題】
 * 以下の関数にtry-catch文を追加して、エラーが発生した場合に
 * "エラーが発生しました: [エラーメッセージ]"という形式で出力するようにしてください
 * 
 * 【要求事項】
 * - try-catch文を使用する
 * - エラー時は"エラーが発生しました: [エラーメッセージ]"を出力
 * - 正常時は結果を出力
 * - parseNumber("123") と parseNumber("abc") の両方を呼び出す
 * 
 * 【目安時間】10分
 */

// 与えられた関数（変更不要）
function parseNumber(str) {
    const num = parseInt(str);
    if (isNaN(num)) {
        throw new Error("数値に変換できません");
    }
    return num;
}

// ========== ここから回答を記述 ==========

// parseNumber("123") と parseNumber("abc") を呼び出すコードを
// try-catch文を使って書いてください


// ========== ここまで回答を記述 ==========

console.log('=== 問題1完了 ===');
