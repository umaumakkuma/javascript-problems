/**
 * 10-arrays / 問題4: reduceで集計する
 *
 * 【課題】
 * reduce()を使って配列を1つの値に集約してください：
 *
 * const numbers = [10, 20, 30, 40];
 * const items = [
 *     { name: "ペン", price: 120 },
 *     { name: "ノート", price: 200 },
 *     { name: "消しゴム", price: 80 }
 * ];
 *
 * - numbersの合計をreduce()で計算し、変数 total に代入
 * - itemsの価格（priceプロパティ）の合計をreduce()で計算し、
 *   変数 totalPrice に代入
 *
 * 【要求事項】
 * - numbersとitemsは自分で定義する
 * - reduce()の第2引数（初期値）に0を指定する
 * - reduceのコールバックの第1引数（累積値）と第2引数（現在の要素）の
 *   役割をコメントで説明する
 *
 * 【参考】JavaScript Primer「配列」
 * https://jsprimer.net/basic/array/
 *
 * 【目安時間】15分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題4の実行結果 ===');
try {
    console.log('total:', total);           // 期待値: 100
    console.log('totalPrice:', totalPrice); // 期待値: 400
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
