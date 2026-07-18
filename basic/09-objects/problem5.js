/**
 * 09-objects / 問題5: オブジェクトのコピーとマージ
 *
 * 【課題】
 * スプレッド構文（...）を使って、オブジェクトのコピーとマージを行ってください：
 *
 * const original = { name: "田中", role: "admin" };
 * const defaults = { theme: "light", fontSize: 14 };
 * const userSettings = { fontSize: 18 };
 *
 * - originalのコピーを作成し、変数 copied に代入
 * - defaultsとuserSettingsをマージ（userSettingsを優先）した新しいオブジェクトを
 *   変数 merged に代入
 *
 * 【要求事項】
 * - original、defaults、userSettingsは自分で定義する
 * - スプレッド構文（...)を使用する
 * - copiedはoriginalとは「別のオブジェクト」になることをコメントで説明する
 * - マージでは「後に書いたオブジェクトのプロパティが優先される」ことを
 *   コメントで説明する
 *
 * 【参考】JavaScript Primer「オブジェクト」
 * https://jsprimer.net/basic/object/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題5の実行結果 ===');
try {
    console.log('copied:', copied);                       // 期待値: { name: "田中", role: "admin" }
    console.log('copied === original:', copied === original); // 期待値: false（別のオブジェクト）
    console.log('merged.theme:', merged.theme);           // 期待値: "light"
    console.log('merged.fontSize:', merged.fontSize);     // 期待値: 18（userSettingsが優先）
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
