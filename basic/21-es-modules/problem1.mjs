/**
 * 21-es-modules / 問題1: 名前付きインポート
 *
 * 【課題】
 * ./lib/math.mjs は add と multiply という関数を名前付き
 * エクスポートしています。これらをインポートして使います。
 * - import文で ./lib/math.mjs から add と multiply をインポートする
 * - add(2, 3) の結果を変数 sum に代入する
 * - multiply(4, 5) の結果を変数 product に代入する
 *
 * 【要求事項】
 * - 名前付きインポート（import { ... } from "..."）を使用する
 * - インポート名はエクスポート名と一致させる必要があることを
 *   コメントで説明する
 * - このファイルの拡張子が .mjs である理由（Node.jsがESモジュールとして
 *   解釈するため）をコメントで説明する
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
console.log('=== 問題1の実行結果 ===');
try {
    console.log('sum:', sum);         // 期待値: 5
    console.log('product:', product); // 期待値: 20
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
