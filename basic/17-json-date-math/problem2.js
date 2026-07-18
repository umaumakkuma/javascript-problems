/**
 * 17-json-date-math / 問題2: JSON.stringifyでJSONに変換する
 *
 * 【課題】
 * JavaScriptのオブジェクトをJSON文字列に変換してください：
 *
 * const settings = { theme: "dark", fontSize: 16, plugins: ["lint", "format"] };
 *
 * - JSON.stringify()で1行のJSON文字列に変換し、変数 jsonText に代入
 * - JSON.stringify()の第3引数に2を渡して、インデント付きで整形した文字列を
 *   変数 prettyJson に代入
 *
 * 【要求事項】
 * - settingsは自分で定義する
 * - 第2引数（replacer）はnullを渡す
 * - undefinedや関数のプロパティはJSONに変換されない（無視される）ことを
 *   コメントで説明する
 *
 * 【参考】JavaScript Primer「JSON」
 * https://jsprimer.net/basic/json/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題2の実行結果 ===');
try {
    console.log('jsonText:', jsonText);
    // 期待値: {"theme":"dark","fontSize":16,"plugins":["lint","format"]}
    console.log('prettyJson:');
    console.log(prettyJson); // インデント付きで表示される
    console.log('往復できるか:', JSON.parse(jsonText).theme === "dark"); // 期待値: true
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
