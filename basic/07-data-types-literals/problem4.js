/**
 * 07-data-types-literals / 問題4: オブジェクトリテラルと配列リテラル
 *
 * 【課題】
 * リテラルを使ってオブジェクトと配列を作成してください：
 * - titleプロパティ（"JavaScript入門"）とpriceプロパティ（2500）を持つ
 *   オブジェクト book
 * - "赤", "緑", "青" の3つの要素を持つ配列 colors
 * - nameプロパティ（"田中"）と、hobbiesプロパティ（"読書"と"映画"の配列）を
 *   持つオブジェクト user（オブジェクトの中に配列を入れる）
 *
 * 【要求事項】
 * - new Object()やnew Array()ではなく、リテラル（{}と[]）で作成する
 * - すべてconstで宣言する
 *
 * 【参考】JavaScript Primer「データ型とリテラル」
 * https://jsprimer.net/basic/data-type/
 *
 * 【目安時間】5分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題4の実行結果 ===');
try {
    console.log('book.title:', book.title);           // 期待値: "JavaScript入門"
    console.log('book.price:', book.price);           // 期待値: 2500
    console.log('colors:', colors);                   // 期待値: ["赤", "緑", "青"]
    console.log('colors.length:', colors.length);     // 期待値: 3
    console.log('user.name:', user.name);             // 期待値: "田中"
    console.log('user.hobbies[0]:', user.hobbies[0]); // 期待値: "読書"
    console.log('user.hobbies[1]:', user.hobbies[1]); // 期待値: "映画"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
