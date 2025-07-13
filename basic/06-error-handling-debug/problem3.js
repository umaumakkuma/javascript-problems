/**
 * 06-error-handling-debug / 問題3: エラーメッセージの読み方
 * 
 * 【課題】
 * 以下のコードを実行すると、どのようなエラーが発生するか予想し、
 * そのエラーの原因と修正方法を説明してください
 * 
 * const user = {
 *     name: "山田太郎",
 *     age: 25
 * };
 * 
 * console.log(user.address.city);
 * 
 * 【要求事項】
 * - エラーの種類を特定
 * - エラーの原因を説明
 * - 修正方法を提示
 * 
 * 【目安時間】10分
 */

// 問題のあるコード
const user = {
    name: "山田太郎",
    age: 25
};

// ========== ここから回答を記述 ==========

// エラーの種類:
// 

// エラーの原因:
// 

// 修正方法:
// 

// 修正されたコード:


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題3の実行結果 ===');
console.log('元のコードを実行してエラーを確認:');
try {
    console.log(user.address.city);
} catch (error) {
    console.log('発生したエラー:', error.name);
    console.log('エラーメッセージ:', error.message);
}
