/**
 * 09-objects / 問題2: プロパティの追加・削除・存在確認
 *
 * 【課題】
 * オブジェクトのプロパティを動的に操作してください：
 * - nameプロパティ（"田中"）だけを持つオブジェクト user を作成（constで宣言）
 * - userに ageプロパティ（25）を後から追加
 * - "age"プロパティが存在するかをin演算子で確認し、変数 hasAge に代入
 * - delete演算子で nameプロパティを削除
 * - 削除後、"name"プロパティが存在するかをObject.hasOwn()で確認し、
 *   変数 hasName に代入
 *
 * 【要求事項】
 * - constで宣言したオブジェクトでもプロパティの追加・削除ができることを
 *   コメントで説明する（constが禁止するのは「変数への再代入」）
 * - in演算子とObject.hasOwn()の両方を使用する
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
console.log('=== 問題2の実行結果 ===');
try {
    console.log('user.age:', user.age);   // 期待値: 25
    console.log('hasAge:', hasAge);       // 期待値: true
    console.log('user.name:', user.name); // 期待値: undefined（削除済み）
    console.log('hasName:', hasName);     // 期待値: false
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
