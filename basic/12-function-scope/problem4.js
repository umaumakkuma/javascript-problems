/**
 * 12-function-scope / 問題4: クロージャーの応用（関数を作る関数）
 *
 * 【課題】
 * 引数を記憶した関数を返す関数 createMultiplier を作成してください。
 *
 * 【要求事項】
 * - createMultiplierの引数は1つ（factor）
 * - 「受け取った数値をfactor倍して返す関数」を返す
 * - 返された関数がfactorを記憶している（クロージャー）ことを
 *   コメントで説明する
 * - アロー関数で書くとどれだけ短く書けるかも試してみる（任意）
 *
 * 【参考】JavaScript Primer「関数とスコープ」
 * https://jsprimer.net/basic/function-scope/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題4の実行結果 ===');
try {
    const double = createMultiplier(2);
    const triple = createMultiplier(3);
    console.log('double(5):', double(5));   // 期待値: 10
    console.log('double(100):', double(100)); // 期待値: 200
    console.log('triple(5):', triple(5));   // 期待値: 15
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
