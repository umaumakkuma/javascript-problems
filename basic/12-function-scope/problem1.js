/**
 * 12-function-scope / 問題1: 関数スコープの理解
 *
 * 【課題】
 * 関数の中で宣言した変数は、関数の外からは参照できません。
 * これを確認するコードを書いてください：
 * - 関数 createMessage を作成する
 * - 関数の中でローカル変数 message を宣言し、"こんにちは" を代入する
 * - 関数はそのmessageを返す
 *
 * 【要求事項】
 * - messageは必ず関数の「中」でconstを使って宣言する
 * - 関数の外からmessage変数を直接参照できない（スコープ外になる）ことを
 *   コメントで説明する
 *
 * 【参考】JavaScript Primer「関数とスコープ」
 * https://jsprimer.net/basic/function-scope/
 *
 * 【目安時間】5分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題1の実行結果 ===');
try {
    console.log('createMessage():', createMessage()); // 期待値: "こんにちは"
    console.log('関数の外からmessageは参照できない:', typeof message === 'undefined' ? '参照できない(正しい)' : '参照できてしまっている(スコープを確認)');
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
