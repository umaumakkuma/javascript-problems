/**
 * 18-iterator-generator / 問題3: ジェネレータ関数の基本
 *
 * 【課題】
 * ジェネレータ関数は function* で定義し、yieldで値を1つずつ返します。
 * - 1、2、3を順番にyieldするジェネレータ関数 numberGenerator を定義する
 * - numberGenerator()から作ったイテレータのnext()を呼び、
 *   最初の結果を変数 firstResult に代入する
 * - スプレッド構文で numberGenerator() を配列に変換し、
 *   変数 allNumbers に代入する
 *
 * 【要求事項】
 * - function* 構文とyieldを使用する
 * - next()の戻り値が { value: 値, done: 真偽値 } の形であることを
 *   コメントで説明する
 * - ジェネレータもイテラブルなので、for...ofやスプレッド構文が使える
 *   ことをコメントで説明する
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
console.log('=== 問題3の実行結果 ===');
try {
    console.log('firstResult:', firstResult);           // 期待値: { value: 1, done: false }
    console.log('firstResult.value:', firstResult.value); // 期待値: 1
    console.log('allNumbers:', allNumbers);             // 期待値: [1, 2, 3]
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
