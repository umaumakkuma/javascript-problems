/**
 * 19-prototype / 問題2: 自分のプロパティと継承したプロパティの区別
 *
 * 【課題】
 * in 演算子はプロトタイプチェーン上のプロパティも探しますが、
 * Object.hasOwn はオブジェクト自身のプロパティだけを調べます。
 * - { name: "test" } というオブジェクトを変数 obj に代入する
 * - "toString" in obj の結果を変数 inToString に代入する
 * - Object.hasOwn(obj, "toString") の結果を変数 hasOwnToString に代入する
 * - Object.hasOwn(obj, "name") の結果を変数 hasOwnName に代入する
 *
 * 【要求事項】
 * - in 演算子と Object.hasOwn を使用する
 * - inToString と hasOwnToString の結果が異なる理由
 *   （toStringは自身ではなくObject.prototypeから継承している）を
 *   コメントで説明する
 *
 * 【参考】JavaScript Primer「プロトタイプオブジェクト」
 * https://jsprimer.net/basic/prototype-object/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題2の実行結果 ===');
try {
    console.log('inToString:', inToString);         // 期待値: true（プロトタイプチェーンも探すため）
    console.log('hasOwnToString:', hasOwnToString); // 期待値: false（自身のプロパティではないため）
    console.log('hasOwnName:', hasOwnName);         // 期待値: true
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
