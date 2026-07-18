/**
 * 18-iterator-generator / 問題1: for...ofとイテラブル
 *
 * 【課題】
 * for...ofはイテラブル（反復可能）なオブジェクトを順番に処理する構文です。
 * 配列と文字列はどちらもイテラブルです：
 * - 配列[10, 20, 30]の合計をfor...ofで計算する関数 sumWithForOf を作成
 *   （引数はnumbers、reduce等は使わずfor...ofで書く）
 * - 文字列を受け取り、for...ofで1文字ずつ配列に集めて返す関数 toChars を作成
 *
 * 【要求事項】
 * - どちらの関数もfor...ofを使用する
 * - for...in（キーの列挙）とfor...of（値の反復）の違いをコメントで説明する
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
console.log('=== 問題1の実行結果 ===');
try {
    console.log('sumWithForOf([10, 20, 30]):', sumWithForOf([10, 20, 30])); // 期待値: 60
    console.log('sumWithForOf([1, 2, 3, 4]):', sumWithForOf([1, 2, 3, 4])); // 期待値: 10
    console.log('toChars("abc"):', toChars("abc")); // 期待値: ["a", "b", "c"]
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
