/**
 * 16-map-set / 問題5: Mapで出現回数を集計する
 *
 * 【課題】
 * Mapを使って、配列内の各要素の出現回数を数える関数 countItems を
 * 作成してください。
 *
 * 例: countItems(["りんご", "バナナ", "りんご"])
 *     → Map { "りんご" => 2, "バナナ" => 1 }
 *
 * 【要求事項】
 * - 関数名は countItems、引数は1つ（items）
 * - 集計結果はMapで返す
 * - for...ofで配列を反復し、get()とset()で回数を更新する
 * - まだ登録されていないキーの扱いには ??演算子 か has() を使う
 *   （例: const current = map.get(item) ?? 0;）
 *
 * 【参考】JavaScript Primer「Map/Set」
 * https://jsprimer.net/basic/map-and-set/
 *
 * 【目安時間】15分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題5の実行結果 ===');
try {
    const result = countItems(["りんご", "バナナ", "りんご", "みかん", "りんご"]);
    console.log('result instanceof Map:', result instanceof Map); // 期待値: true
    console.log('りんごの回数:', result.get("りんご"));   // 期待値: 3
    console.log('バナナの回数:', result.get("バナナ"));   // 期待値: 1
    console.log('みかんの回数:', result.get("みかん"));   // 期待値: 1
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
