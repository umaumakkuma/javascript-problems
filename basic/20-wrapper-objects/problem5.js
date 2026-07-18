/**
 * 20-wrapper-objects / 問題5: new Boolean(false)の罠
 *
 * 【課題】
 * ラッパーオブジェクトを直接使ってはいけない典型的な理由を確認します。
 * - new Boolean(false) を変数 wrapperFalse に代入する
 * - 条件演算子を使い、wrapperFalse ? "truthy" : "falsy" の結果を
 *   変数 wrapperResult に代入する
 * - 同様に、プリミティブ値 false ? "truthy" : "falsy" の結果を
 *   変数 primitiveResult に代入する
 *
 * 【要求事項】
 * - wrapperResult が "truthy" になる理由（中身がfalseでも、
 *   オブジェクトは中身に関係なく常にtruthyと評価される）を
 *   コメントで説明する
 * - この挙動が「AIや他人が書いた new Boolean を使うコードを見たときに
 *   バグを疑うべきポイント」であることをコメントに書く
 *
 * 【参考】JavaScript Primer「ラッパーオブジェクト」
 * https://jsprimer.net/basic/wrapper-object/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題5の実行結果 ===');
try {
    console.log('wrapperResult:', wrapperResult);     // 期待値: "truthy"（オブジェクトは常にtruthy）
    console.log('primitiveResult:', primitiveResult); // 期待値: "falsy"
    console.log('typeof wrapperFalse:', typeof wrapperFalse); // 期待値: "object"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
