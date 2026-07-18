/**
 * 16-map-set / 問題2: Mapの反復処理
 *
 * 【課題】
 * Mapをfor...ofで反復処理してください：
 *
 * const prices = new Map([
 *     ["コーヒー", 400],
 *     ["紅茶", 350],
 *     ["ジュース", 300]
 * ]);
 *
 * - for...ofと分割代入を使ってpricesを反復し、
 *   "コーヒー: 400円" のような形式の文字列の配列を変数 priceLabels に作成
 * - すべての価格の合計を変数 totalPrice に計算
 *
 * 【要求事項】
 * - pricesは自分で定義する（配列の配列で初期化できる）
 * - for...of の中で const [key, value] の形の分割代入を使う
 * - Mapは「登録した順序」が保証されることをコメントで説明する
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
console.log('=== 問題2の実行結果 ===');
try {
    console.log('priceLabels:', priceLabels); // 期待値: ["コーヒー: 400円", "紅茶: 350円", "ジュース: 300円"]
    console.log('totalPrice:', totalPrice);   // 期待値: 1050
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
