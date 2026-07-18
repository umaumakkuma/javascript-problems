/**
 * 20-wrapper-objects / 問題3: 明示的な型変換はnewを付けずに
 *
 * 【課題】
 * String / Number / Boolean を new なしで関数として呼ぶと、
 * オブジェクトではなくプリミティブ値への変換になります。
 * これが推奨される明示的な型変換の方法です。
 * - Number("3.14") の結果を変数 numFromString に代入する
 * - String(42) の結果を変数 strFromNumber に代入する
 * - Boolean(0) の結果を変数 boolFromNumber に代入する
 * - typeof numFromString の結果を変数 typeofNum に代入する
 *
 * 【要求事項】
 * - new String(42) と String(42) の違い（前者はオブジェクト、
 *   後者はプリミティブ値を返す）をコメントで説明する
 *
 * 【参考】JavaScript Primer「ラッパーオブジェクト」
 * https://jsprimer.net/basic/wrapper-object/
 * （あわせて「暗黙的な型変換」https://jsprimer.net/basic/implicit-coercion/ も参照）
 *
 * 【目安時間】5分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題3の実行結果 ===');
try {
    console.log('numFromString:', numFromString);   // 期待値: 3.14
    console.log('strFromNumber:', strFromNumber);   // 期待値: "42"
    console.log('boolFromNumber:', boolFromNumber); // 期待値: false
    console.log('typeofNum:', typeofNum);           // 期待値: "number"（プリミティブ値）
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
