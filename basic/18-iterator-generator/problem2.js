/**
 * 18-iterator-generator / 問題2: スプレッド構文とArray.from
 *
 * 【課題】
 * イテラブルなオブジェクトは、スプレッド構文やArray.from()で
 * 配列に変換できます：
 * - 文字列"hello"をスプレッド構文で1文字ずつの配列にして、
 *   変数 helloChars に代入
 * - Array.from({ length: 5 }, (_, index) => index + 1) を使って
 *   [1, 2, 3, 4, 5] を作り、変数 oneToFive に代入
 * - 2つの配列[1, 2]と[3, 4]をスプレッド構文で連結して、変数 combined に代入
 *
 * 【要求事項】
 * - スプレッド構文（...）とArray.from()の両方を使用する
 * - Array.fromの第2引数は「各要素を変換するmap関数」であることを
 *   コメントで説明する
 *
 * 【参考】JavaScript Primer「イテレータとジェネレータ」
 * https://jsprimer.net/basic/iterator-generator/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題2の実行結果 ===');
try {
    console.log('helloChars:', helloChars); // 期待値: ["h", "e", "l", "l", "o"]
    console.log('oneToFive:', oneToFive);   // 期待値: [1, 2, 3, 4, 5]
    console.log('combined:', combined);     // 期待値: [1, 2, 3, 4]
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
