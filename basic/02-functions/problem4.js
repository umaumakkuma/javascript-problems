/**
 * 02-functions / 問題4: 複数の引数
 * 
 * 【課題】
 * 3つの数値を受け取り、最大値を返す関数getMaxを作成してください
 * Math.maxは使用せずに、if文を使って実装してください
 * 
 * 【要求事項】
 * - function宣言を使用する
 * - 引数は3つ（num1, num2, num3）
 * - if文で比較して最大値を求める
 * - Math.maxは使用しない
 * 
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題4の実行結果 ===');
try {
    console.log('getMax(5, 10, 3) =', getMax(5, 10, 3)); // 期待値: 10
    console.log('getMax(15, 8, 20) =', getMax(15, 8, 20)); // 期待値: 20
    console.log('getMax(7, 7, 7) =', getMax(7, 7, 7)); // 期待値: 7
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
