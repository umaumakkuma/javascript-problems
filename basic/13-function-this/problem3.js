/**
 * 13-function-this / 問題3: callとapplyでthisを指定して呼び出す
 *
 * 【課題】
 * オブジェクトに属さない単体の関数を、thisを指定して呼び出してください：
 * - thisのnameプロパティを使って "<挨拶>、<名前>です" という文字列を返す
 *   関数 introduce を定義する（引数は greeting の1つ）
 * - nameプロパティ（"田中"）を持つオブジェクト speaker を定義する
 * - call()を使い、thisをspeakerにして introduce を呼び出した結果を
 *   変数 callResult に代入（挨拶は "こんにちは"）
 * - apply()を使い、同様に呼び出した結果を変数 applyResult に代入
 *   （挨拶は "やあ"）
 *
 * 【要求事項】
 * - callは引数を「そのまま」渡し、applyは引数を「配列で」渡す違いを
 *   コメントで説明する
 *
 * 【参考】JavaScript Primer「関数とthis」
 * https://jsprimer.net/basic/function-this/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題3の実行結果 ===');
try {
    console.log('callResult:', callResult);   // 期待値: "こんにちは、田中です"
    console.log('applyResult:', applyResult); // 期待値: "やあ、田中です"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
