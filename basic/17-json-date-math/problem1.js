/**
 * 17-json-date-math / 問題1: JSON.parseでJSONを読み込む
 *
 * 【課題】
 * JSON文字列をJavaScriptのオブジェクトに変換してください：
 *
 * const jsonString = '{"name": "田中", "age": 25, "hobbies": ["読書", "映画"]}';
 *
 * - JSON.parse()でオブジェクトに変換し、変数 userData に代入
 * - userDataから名前を取得し、変数 userName に代入
 * - userDataから最初の趣味を取得し、変数 firstHobby に代入
 *
 * 【要求事項】
 * - jsonStringは自分で定義する
 * - JSONのキーは必ずダブルクォートで囲む必要があることをコメントで説明する
 * - 不正なJSON文字列をparseするとSyntaxErrorが発生するため、
 *   実際のアプリではtry-catchで囲むべきことをコメントで説明する
 *
 * 【参考】JavaScript Primer「JSON」
 * https://jsprimer.net/basic/json/
 *
 * 【目安時間】5分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題1の実行結果 ===');
try {
    console.log('userData.age:', userData.age); // 期待値: 25
    console.log('userName:', userName);         // 期待値: "田中"
    console.log('firstHobby:', firstHobby);     // 期待値: "読書"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
