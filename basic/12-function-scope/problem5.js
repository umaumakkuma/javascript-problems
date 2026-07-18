/**
 * 12-function-scope / 問題5: varの巻き上げ（hoisting）を理解する
 *
 * 【課題】
 * 次のコードの実行結果を予測してください：
 *
 *   // コードA
 *   console.log(valueA); // ???
 *   var valueA = 10;
 *
 *   // コードB
 *   console.log(valueB); // ???
 *   let valueB = 10;
 *
 * 予測した結果を、以下の変数に「文字列」で代入してください：
 * - 変数 answerA: コードAの出力（"undefined" または "ReferenceError"）
 * - 変数 answerB: コードBの結果（"undefined" または "ReferenceError"）
 *
 * 【要求事項】
 * - varは「宣言部分だけが巻き上げられ、undefinedで初期化される」こと、
 *   letは「宣言前のアクセスがReferenceErrorになる」ことをコメントで説明する
 * - この問題を避けるため「変数はletかconstで宣言し、使う前に宣言する」
 *   というルールをコメントでまとめる
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
console.log('=== 問題5の実行結果 ===');
try {
    console.log('answerA:', answerA); // 期待値: "undefined"
    console.log('answerB:', answerB); // 期待値: "ReferenceError"
    const correctA = answerA === "undefined";
    const correctB = answerB === "ReferenceError";
    console.log('コードAの予測:', correctA ? '⭕ 正解' : '❌ 不正解');
    console.log('コードBの予測:', correctB ? '⭕ 正解' : '❌ 不正解');
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
