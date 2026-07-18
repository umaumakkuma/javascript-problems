/**
 * 21-es-modules / 問題4: エイリアスと名前空間インポート
 *
 * 【課題】
 * インポート名の衝突を避けるための2つの方法を使います。
 * - import文で ./lib/math.mjs の add を addNumbers という別名で
 *   インポートし、addNumbers(10, 20) の結果を変数 aliasResult に代入する
 * - import文で ./lib/math.mjs の名前付きエクスポート全体を
 *   math という名前空間オブジェクトとしてインポートし、
 *   math.multiply(3, 3) の結果を変数 namespaceResult に代入する
 * - math.VERSION の値を変数 versionFromNamespace に代入する
 *
 * 【要求事項】
 * - エイリアス（import { add as addNumbers }）と
 *   名前空間インポート（import * as math）の両方を使用する
 * - それぞれどんな場面で使うか（名前の衝突回避、モジュール名を
 *   プレフィックスとして明示したい場合など）をコメントで説明する
 *
 * 【参考】JavaScript Primer「ECMAScriptモジュール」
 * https://jsprimer.net/basic/module/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題4の実行結果 ===');
try {
    console.log('aliasResult:', aliasResult);                   // 期待値: 30
    console.log('namespaceResult:', namespaceResult);           // 期待値: 9
    console.log('versionFromNamespace:', versionFromNamespace); // 期待値: "1.0.0"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
