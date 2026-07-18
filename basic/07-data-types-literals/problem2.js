/**
 * 07-data-types-literals / 問題2: 数値リテラルとNaN
 *
 * 【課題】
 * 数値リテラルと特殊な値NaNについて、以下の変数を定義してください：
 * - 整数リテラルの42を代入した変数 integerNumber
 * - 浮動小数点リテラルの3.14を代入した変数 floatNumber
 * - 文字列"abc"をNumber()で数値に変換した結果を代入した変数 invalidNumber
 * - invalidNumberがNaNかどうかをNumber.isNaN()で判定した結果を代入した変数 isNotANumber
 *
 * 【要求事項】
 * - Number()関数とNumber.isNaN()メソッドを使用する
 * - NaNは「自分自身と一致しない」特殊な値であることをコメントで説明する
 *
 * 【参考】JavaScript Primer「データ型とリテラル」
 * https://jsprimer.net/basic/data-type/
 *
 * 【目安時間】5分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題2の実行結果 ===');
try {
    console.log('integerNumber:', integerNumber);   // 期待値: 42
    console.log('floatNumber:', floatNumber);       // 期待値: 3.14
    console.log('invalidNumber:', invalidNumber);   // 期待値: NaN
    console.log('isNotANumber:', isNotANumber);     // 期待値: true
    console.log('NaN === NaN の結果:', NaN === NaN); // falseになる（NaNは自分自身と一致しない）
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
