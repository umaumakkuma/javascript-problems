/**
 * 02-functions / 問題2: アロー関数
 * 
 * 【課題】
 * 数値を受け取り、その数値が偶数かどうかを判定するアロー関数isEvenを作成してください
 * 偶数の場合はtrue、奇数の場合はfalseを返す
 * 
 * 【要求事項】
 * - アロー関数を使用する
 * - 引数は1つ（num）
 * - 戻り値はboolean型
 * 
 * 【目安時間】5分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題2の実行結果 ===');
try {
    console.log('isEven(4) =', isEven(4)); // 期待値: true
    console.log('isEven(7) =', isEven(7)); // 期待値: false
    console.log('isEven(0) =', isEven(0)); // 期待値: true
    console.log('isEven(13) =', isEven(13)); // 期待値: false
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
