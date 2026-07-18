/**
 * 09-objects / 問題1: プロパティへのアクセス
 *
 * 【課題】
 * オブジェクトのプロパティにアクセスする2つの方法
 * （ドット記法とブラケット記法）を使い分けてください：
 * - titleプロパティ（"JavaScript Primer"）とpriceプロパティ（3000）を持つ
 *   オブジェクト book を作成
 * - ドット記法でtitleを取得して変数 titleValue に代入
 * - ブラケット記法でpriceを取得して変数 priceValue に代入
 * - 変数 keyName（値は"title"）を使い、ブラケット記法で動的にアクセスした
 *   結果を変数 dynamicValue に代入
 *
 * 【要求事項】
 * - ドット記法とブラケット記法の両方を使用する
 * - 「プロパティ名を変数で指定したい場合はブラケット記法しか使えない」ことを
 *   コメントで説明する
 *
 * 【参考】JavaScript Primer「オブジェクト」
 * https://jsprimer.net/basic/object/
 *
 * 【目安時間】5分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題1の実行結果 ===');
try {
    console.log('titleValue:', titleValue);     // 期待値: "JavaScript Primer"
    console.log('priceValue:', priceValue);     // 期待値: 3000
    console.log('dynamicValue:', dynamicValue); // 期待値: "JavaScript Primer"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
