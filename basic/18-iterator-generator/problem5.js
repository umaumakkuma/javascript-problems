/**
 * 18-iterator-generator / 問題5: 無限シーケンスと必要な分だけの取り出し
 *
 * 【課題】
 * ジェネレータの遅延評価を活かすと「無限に続くシーケンス」を定義できます。
 * - 1から始まり、呼ばれるたびに次の整数を無限にyieldし続ける
 *   ジェネレータ関数 infiniteCounter を作成する（while (true)を使う）
 * - イテレータと個数を受け取り、先頭からn個だけ取り出して配列で返す
 *   関数 take を作成する
 *
 * 【要求事項】
 * - infiniteCounterは終了しないため、絶対にスプレッド構文で
 *   展開しないこと（無限ループになる）をコメントで説明する
 * - takeの引数は2つ（iterator, n）
 * - takeの中ではiterator.next()をn回呼び、valueを配列に集めて返す
 *
 * 【参考】JavaScript Primer「イテレータとジェネレータ」
 * https://jsprimer.net/basic/iterator-generator/
 *
 * 【目安時間】15分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題5の実行結果 ===');
try {
    const counter = infiniteCounter();
    console.log('take(counter, 5):', take(counter, 5)); // 期待値: [1, 2, 3, 4, 5]
    console.log('take(counter, 3):', take(counter, 3)); // 期待値: [6, 7, 8]（続きから取り出される）
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
