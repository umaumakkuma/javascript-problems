/**
 * 20-wrapper-objects / 問題1: プリミティブ値でメソッドが呼べる理由
 *
 * 【課題】
 * 文字列はプリミティブ値（オブジェクトではない）なのに、
 * "hello".toUpperCase() のようにメソッドが呼べます。
 * これはJavaScriptが一時的にラッパーオブジェクトを作るためです。
 * - "hello".toUpperCase() の結果を変数 upper に代入する
 * - typeof "hello" の結果を変数 typeofPrimitive に代入する
 * - "こんにちは".length の値を変数 strLength に代入する
 *
 * 【要求事項】
 * - 「プリミティブ値のメソッドを呼ぶ瞬間だけ、対応するラッパー
 *   オブジェクト（String）が自動的に作られ、呼び出し後に破棄される」
 *   ことをコメントで説明する
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
console.log('=== 問題1の実行結果 ===');
try {
    console.log('upper:', upper);                     // 期待値: "HELLO"
    console.log('typeofPrimitive:', typeofPrimitive); // 期待値: "string"（objectではない）
    console.log('strLength:', strLength);             // 期待値: 5
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
