/**
 * 09-objects / 問題3: Optional chaining演算子（?.）
 *
 * 【課題】
 * ネストしたオブジェクトのプロパティに安全にアクセスする関数 getCity を
 * 作成してください。
 * user.address.city のような深いアクセスは、途中のプロパティが
 * undefinedやnullだとTypeErrorが発生します。
 *
 * 【要求事項】
 * - 関数名は getCity、引数は1つ（user）
 * - user.address.city の値を返す
 * - 途中のどこかがnullまたはundefinedの場合（userそのものがnullの場合も含む）は
 *   "不明" を返す
 * - Optional chaining演算子（?.）とNullish coalescing演算子（??）を
 *   組み合わせて使用する
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
console.log('=== 問題3の実行結果 ===');
try {
    const userA = { name: "田中", address: { city: "東京" } };
    const userB = { name: "佐藤" }; // addressプロパティがない
    console.log('getCity(userA):', getCity(userA)); // 期待値: "東京"
    console.log('getCity(userB):', getCity(userB)); // 期待値: "不明"
    console.log('getCity(null):', getCity(null));   // 期待値: "不明"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
