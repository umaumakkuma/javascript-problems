/**
 * 16-map-set / 問題1: Mapの基本操作
 *
 * 【課題】
 * キーと値のペアを扱うMapの基本操作を行ってください：
 * - 新しいMapを作成し、変数 stock に代入
 * - set()で "りんご"→3、"バナナ"→5 を登録
 * - get()で "りんご" の在庫数を取得し、変数 appleStock に代入
 * - has()で "みかん" が登録されているかを確認し、変数 hasOrange に代入
 * - delete()で "バナナ" を削除
 *
 * 【要求事項】
 * - new Map()で作成する
 * - set / get / has / delete / size を使用する
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
console.log('=== 問題1の実行結果 ===');
try {
    console.log('appleStock:', appleStock); // 期待値: 3
    console.log('hasOrange:', hasOrange);   // 期待値: false
    console.log('stock.size:', stock.size); // 期待値: 1（バナナ削除後はりんごのみ）
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
