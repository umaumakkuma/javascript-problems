/**
 * 01-basic-syntax / 問題4: 条件分岐
 * 
 * 【課題】
 * scoreの値に応じて評価を返す関数getGradeを作成してください
 * - 80以上: "優秀"
 * - 60以上80未満: "良好"
 * - 60未満: "要改善"
 * 
 * 【要求事項】
 * - if-else文を使用する
 * - 関数名は getGrade とする
 * - 引数は score とする
 * 
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題4の実行結果 ===');
try {
    console.log('getGrade(85):', getGrade(85)); // 期待値: "優秀"
    console.log('getGrade(70):', getGrade(70)); // 期待値: "良好"
    console.log('getGrade(50):', getGrade(50)); // 期待値: "要改善"
    console.log('getGrade(80):', getGrade(80)); // 期待値: "優秀"
    console.log('getGrade(60):', getGrade(60)); // 期待値: "良好"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
