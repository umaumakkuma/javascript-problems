/**
 * 10-arrays / 問題3: mapとfilter
 *
 * 【課題】
 * 配列の反復処理メソッドmap()とfilter()を使ってください：
 *
 * const prices = [100, 250, 380, 90];
 *
 * - 全価格に消費税10%を加えた配列（各要素を1.1倍してMath.floor()で切り捨て）を
 *   map()で作成し、変数 withTax に代入
 * - 200円以上の価格だけを filter()で抽出し、変数 expensive に代入
 *
 * 【要求事項】
 * - pricesは自分で定義する
 * - map（全要素を変換した新しい配列を返す）とfilter（条件に合う要素だけの
 *   新しい配列を返す）の違いをコメントで説明する
 * - 元の配列pricesは変更されないことを確認する
 *
 * 【参考】JavaScript Primer「配列」
 * https://jsprimer.net/basic/array/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題3の実行結果 ===');
try {
    console.log('withTax:', withTax);     // 期待値: [110, 275, 418, 99]
    console.log('expensive:', expensive); // 期待値: [250, 380]
    console.log('prices:', prices);       // 期待値: [100, 250, 380, 90]（変更されていない）
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
