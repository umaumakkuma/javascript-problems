/**
 * 09-objects / 問題4: オブジェクトの静的メソッド（keys/values/entries）
 *
 * 【課題】
 * テストの点数を記録したオブジェクトを、Objectの静的メソッドで処理してください。
 *
 * const scores = { math: 80, english: 65, science: 90 };
 *
 * - Object.keys()で科目名の配列を取得し、変数 subjects に代入
 * - Object.values()で点数の配列を取得して合計し、変数 totalScore に代入
 * - Object.entries()とmap()を使い、"math: 80" のような形式の文字列の配列を
 *   作成して変数 scoreLabels に代入
 *
 * 【要求事項】
 * - scoresオブジェクトは自分で定義する
 * - 合計の計算にはreduce()またはfor...ofループを使用する
 *
 * 【参考】JavaScript Primer「オブジェクト」
 * https://jsprimer.net/basic/object/
 *
 * 【目安時間】15分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題4の実行結果 ===');
try {
    console.log('subjects:', subjects);       // 期待値: ["math", "english", "science"]
    console.log('totalScore:', totalScore);   // 期待値: 235
    console.log('scoreLabels:', scoreLabels); // 期待値: ["math: 80", "english: 65", "science: 90"]
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
