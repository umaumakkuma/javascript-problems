/**
 * 16-map-set / 問題4: Setで配列の重複を取り除く
 *
 * 【課題】
 * Setの「重複を許さない」性質を利用して、配列から重複を取り除く関数
 * uniqueArray を作成してください。
 *
 * 【要求事項】
 * - 関数名は uniqueArray、引数は1つ（array）
 * - new Set(array)で配列から重複のないSetを作る
 * - スプレッド構文 [...set] でSetを配列に戻して返す
 * - 元の配列は変更しない
 *
 * 【参考】JavaScript Primer「Map/Set」
 * https://jsprimer.net/basic/map-and-set/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題4の実行結果 ===');
try {
    const original = [1, 2, 2, 3, 1, 4];
    console.log('uniqueArray([1, 2, 2, 3, 1, 4]):', uniqueArray(original)); // 期待値: [1, 2, 3, 4]
    console.log('uniqueArray(["a", "b", "a"]):', uniqueArray(["a", "b", "a"])); // 期待値: ["a", "b"]
    console.log('元の配列:', original); // 期待値: [1, 2, 2, 3, 1, 4]（変更されていない）
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
