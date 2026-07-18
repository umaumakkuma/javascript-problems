/**
 * 08-operators-coercion / 問題4: 明示的な型変換
 *
 * 【課題】
 * 暗黙的な型変換に頼らず、明示的に型を変換するコードを書いてください：
 * - 文字列"42"をNumber()で数値に変換した変数 numFromString
 * - 数値100をString()で文字列に変換した変数 strFromNumber
 * - 文字列"100px"をparseInt()で整数に変換した変数 parsedInt
 * - 文字列"3.14rem"をparseFloat()で浮動小数点数に変換した変数 parsedFloat
 *
 * 【要求事項】
 * - parseIntには基数（10）を必ず指定する
 * - Number("100px")はNaNになるが、parseInt("100px", 10)は100になる違いを
 *   コメントで説明する
 *
 * 【参考】JavaScript Primer「暗黙的な型変換」
 * https://jsprimer.net/basic/implicit-coercion/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題4の実行結果 ===');
try {
    console.log('numFromString:', numFromString, typeof numFromString);  // 期待値: 42 "number"
    console.log('strFromNumber:', strFromNumber, typeof strFromNumber);  // 期待値: "100" "string"
    console.log('parsedInt:', parsedInt);                                // 期待値: 100
    console.log('parsedFloat:', parsedFloat);                            // 期待値: 3.14
    console.log('Number("100px")の結果:', Number("100px"));              // NaNになる
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
