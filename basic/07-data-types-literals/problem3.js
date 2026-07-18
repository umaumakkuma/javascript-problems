/**
 * 07-data-types-literals / 問題3: nullとundefinedの違い
 *
 * 【課題】
 * 「値が未定義」を表すundefinedと「意図的に値がない」を表すnullの
 * 違いを確認するコードを書いてください：
 * - 初期値を指定せずにletで宣言した変数 notAssigned（自動的にundefinedになる）
 * - 「現在は値がない」ことを意図的に表すためにnullを代入した変数 emptyValue
 * - typeof notAssigned の結果を代入した変数 typeofUndefinedResult
 * - typeof emptyValue の結果を代入した変数 typeofNullResult
 *
 * 【要求事項】
 * - notAssignedには値を代入しない（let宣言のみ）
 * - typeof null が "null" ではなく "object" になることを確認し、
 *   これは歴史的経緯によるJavaScriptの仕様であることをコメントで説明する
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
console.log('=== 問題3の実行結果 ===');
try {
    console.log('notAssigned:', notAssigned);                     // 期待値: undefined
    console.log('emptyValue:', emptyValue);                       // 期待値: null
    console.log('typeofUndefinedResult:', typeofUndefinedResult); // 期待値: "undefined"
    console.log('typeofNullResult:', typeofNullResult);           // 期待値: "object"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
