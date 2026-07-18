/**
 * 07-data-types-literals / 問題5: 型を正しく判定する関数
 *
 * 【課題】
 * typeof演算子には「配列もnullも"object"になる」という弱点があります。
 * これを補って、値の型を正しく判定する関数 checkType を作成してください。
 *
 * 【要求事項】
 * - 関数名は checkType、引数は1つ（value）
 * - 配列なら "array" を返す（Array.isArray()を使用する）
 * - nullなら "null" を返す
 * - それ以外は typeof の結果をそのまま返す
 * - 判定の順番に注意する（typeofより先に配列とnullをチェックする）
 *
 * 【参考】JavaScript Primer「データ型とリテラル」
 * https://jsprimer.net/basic/data-type/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題5の実行結果 ===');
try {
    console.log('checkType([1, 2, 3]):', checkType([1, 2, 3])); // 期待値: "array"
    console.log('checkType(null):', checkType(null));           // 期待値: "null"
    console.log('checkType("hello"):', checkType("hello"));     // 期待値: "string"
    console.log('checkType(42):', checkType(42));               // 期待値: "number"
    console.log('checkType({}):', checkType({}));               // 期待値: "object"
    console.log('checkType(undefined):', checkType(undefined)); // 期待値: "undefined"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
