/**
 * 07-data-types-literals / 問題1: typeof演算子で型を調べる
 *
 * 【課題】
 * typeof演算子を使って、以下の値のデータ型を調べ、
 * それぞれの結果を変数に代入してください：
 * - 42 → 変数 typeofNumber
 * - "こんにちは" → 変数 typeofString
 * - true → 変数 typeofBoolean
 * - undefined → 変数 typeofUndefined
 * - { key: "value" } → 変数 typeofObject
 *
 * 【要求事項】
 * - typeof演算子を使用する
 * - 各変数はconstで宣言する
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
console.log('=== 問題1の実行結果 ===');
try {
    console.log('typeofNumber:', typeofNumber);       // 期待値: "number"
    console.log('typeofString:', typeofString);       // 期待値: "string"
    console.log('typeofBoolean:', typeofBoolean);     // 期待値: "boolean"
    console.log('typeofUndefined:', typeofUndefined); // 期待値: "undefined"
    console.log('typeofObject:', typeofObject);       // 期待値: "object"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
