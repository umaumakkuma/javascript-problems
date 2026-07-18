/**
 * 12-function-scope / 問題2: スコープチェーン
 *
 * 【課題】
 * 内側のスコープからは外側のスコープの変数を参照できます（スコープチェーン）。
 * これを利用したコードを書いてください：
 * - 外側のスコープに変数 taxRate（値は0.1）をconstで宣言
 * - 価格を受け取り、taxRateを参照して税込価格を計算する関数 withTax を作成
 *   （切り捨てにはMath.floor()を使用）
 *
 * 【要求事項】
 * - withTax関数はtaxRateを引数として受け取らず、外側のスコープの変数として
 *   参照する
 * - 変数を探すとき「内側のスコープ→外側のスコープ」の順に探索されること
 *   （スコープチェーン）をコメントで説明する
 *
 * 【参考】JavaScript Primer「関数とスコープ」
 * https://jsprimer.net/basic/function-scope/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題2の実行結果 ===');
try {
    console.log('taxRate:', taxRate);           // 期待値: 0.1
    console.log('withTax(100):', withTax(100)); // 期待値: 110
    console.log('withTax(2500):', withTax(2500)); // 期待値: 2750
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
