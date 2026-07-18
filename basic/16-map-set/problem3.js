/**
 * 16-map-set / 問題3: Setの基本操作
 *
 * 【課題】
 * 重複しない値の集合を扱うSetの基本操作を行ってください：
 * - 新しいSetを作成し、変数 tags に代入
 * - add()で "JavaScript"、"HTML"、"CSS" を追加
 * - さらに "JavaScript" をもう一度add()する（重複は無視される）
 * - has()で "JavaScript" が含まれるかを確認し、変数 hasJs に代入
 * - delete()で "CSS" を削除
 *
 * 【要求事項】
 * - new Set()で作成する
 * - 同じ値を2回addしてもsizeが増えないことを確認し、
 *   Setの「重複を許さない」性質をコメントで説明する
 *
 * 【参考】JavaScript Primer「Map/Set」
 * https://jsprimer.net/basic/map-and-set/
 *
 * 【目安時間】5分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題3の実行結果 ===');
try {
    console.log('hasJs:', hasJs);         // 期待値: true
    console.log('tags.size:', tags.size); // 期待値: 2（JavaScript, HTMLのみ。重複追加は無視、CSSは削除済み）
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
