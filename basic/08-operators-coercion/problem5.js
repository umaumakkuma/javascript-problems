/**
 * 08-operators-coercion / 問題5: 暗黙的な型変換を防ぐ安全な関数
 *
 * 【課題】
 * まず、暗黙的な型変換が起きる次の式の結果を予測して、
 * 実際の式を各変数に代入して確かめてください：
 * - result1 に 1 + "2" の結果（数値と文字列の+は文字列結合になる）
 * - result2 に "5" - 1 の結果（-は数値に変換される）
 * - result3 に 1 + true の結果（trueは1に変換される）
 *
 * 次に、暗黙的な型変換による事故を防ぐ、安全な加算関数 addNumbers を
 * 作成してください。
 *
 * 【要求事項】
 * - addNumbersの引数は2つ（a, b）
 * - aとbの両方が"number"型の場合のみ、合計を返す
 * - どちらかがnumber型でない場合は、new TypeError("数値以外は加算できません")
 *   をthrowする
 * - typeof演算子で型チェックを行う
 *
 * 【参考】JavaScript Primer「暗黙的な型変換」
 * https://jsprimer.net/basic/implicit-coercion/
 *
 * 【目安時間】15分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題5の実行結果 ===');
try {
    console.log('result1:', result1); // 期待値: "12"
    console.log('result2:', result2); // 期待値: 4
    console.log('result3:', result3); // 期待値: 2
    console.log('addNumbers(1, 2):', addNumbers(1, 2)); // 期待値: 3
    try {
        addNumbers(1, "2");
        console.log('❌ エラーがthrowされませんでした');
    } catch (typeError) {
        console.log('addNumbers(1, "2")のエラー:', typeError.message); // 期待値: "数値以外は加算できません"
    }
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
