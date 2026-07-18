/**
 * 08-operators-coercion / 問題1: 厳密等価演算子（===）と等価演算子（==）
 *
 * 【課題】
 * ==（等価演算子）と===（厳密等価演算子）の違いを確認してください：
 * - "1" == 1 の結果を代入した変数 looseResult
 * - "1" === 1 の結果を代入した変数 strictResult
 * - 2つの値が「型も値も同じ」かどうかを判定して真偽値を返す関数 isSame
 *
 * 【要求事項】
 * - looseResultとstrictResultの結果がなぜ異なるのか、コメントで説明する
 * - isSame関数は===を使用する（引数は2つ: a, b）
 * - 比較には常に===を使うべき理由をコメントで説明する
 *
 * 【参考】JavaScript Primer「演算子」
 * https://jsprimer.net/basic/operator/
 *
 * 【目安時間】5分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題1の実行結果 ===');
try {
    console.log('looseResult:', looseResult);         // 期待値: true（暗黙的な型変換が行われる）
    console.log('strictResult:', strictResult);       // 期待値: false（型が異なるため）
    console.log('isSame(1, 1):', isSame(1, 1));       // 期待値: true
    console.log('isSame("1", 1):', isSame("1", 1));   // 期待値: false
    console.log('isSame("a", "a"):', isSame("a", "a")); // 期待値: true
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
