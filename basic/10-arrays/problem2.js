/**
 * 10-arrays / 問題2: 要素の検索
 *
 * 【課題】
 * 配列から要素を検索するメソッドを使い分けてください：
 *
 * const numbers = [5, 12, 8, 130, 44];
 *
 * - 8が含まれているかをincludes()で判定し、変数 hasEight に代入
 * - 10より大きい最初の要素をfind()で取得し、変数 firstOver10 に代入
 * - 10より大きい最初の要素のインデックスをfindIndex()で取得し、
 *   変数 firstOver10Index に代入
 * - 130のインデックスをindexOf()で取得し、変数 indexOf130 に代入
 *
 * 【要求事項】
 * - numbersは自分で定義する
 * - find/findIndexにはアロー関数でテスト関数を渡す
 * - includes（値の有無）とfind（条件に合う値の取得）の使い分けを
 *   コメントで説明する
 *
 * 【参考】JavaScript Primer「配列」
 * https://jsprimer.net/basic/array/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題2の実行結果 ===');
try {
    console.log('hasEight:', hasEight);                 // 期待値: true
    console.log('firstOver10:', firstOver10);           // 期待値: 12
    console.log('firstOver10Index:', firstOver10Index); // 期待値: 1
    console.log('indexOf130:', indexOf130);             // 期待値: 3
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
