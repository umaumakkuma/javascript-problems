/**
 * 21-es-modules / 問題5: モジュールは一度だけ評価される
 *
 * 【課題】
 * ./lib/counter.mjs は内部にcount変数を持つカウンターモジュールです。
 * モジュールは何回importしても一度だけ評価され、状態が共有されることを
 * 確認します。
 * - increment を ./lib/counter.mjs からインポートするimport文と、
 *   getCount を ./lib/counter.mjs からインポートするimport文を、
 *   あえて「2つの別々のimport文」として書く
 * - increment() を2回呼び出す
 * - getCount() の結果を変数 totalCount に代入する
 *
 * 【要求事項】
 * - 同じモジュールへのimport文を2つに分けて書く
 * - totalCount が 2 になる理由（import文が2つあってもモジュールの
 *   評価は一度だけで、counter.mjsのcount変数は1つしか存在しない）を
 *   コメントで説明する
 *
 * 【参考】JavaScript Primer「ECMAScriptモジュール」
 * https://jsprimer.net/basic/module/
 *
 * 【目安時間】15分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題5の実行結果 ===');
try {
    console.log('totalCount:', totalCount); // 期待値: 2（状態が共有されている）
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
