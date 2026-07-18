/**
 * 20-wrapper-objects / 問題2: ラッパーオブジェクトとプリミティブ値の違い
 *
 * 【課題】
 * new String("...") で明示的にラッパーオブジェクトを作ることも
 * できますが、プリミティブ値とは別物になります。
 * - プリミティブ値 "JavaScript" を変数 primitiveStr に代入する
 * - new String("JavaScript") を変数 wrapperStr に代入する
 * - typeof wrapperStr の結果を変数 typeofWrapper に代入する
 * - primitiveStr == wrapperStr の結果を変数 looseEqual に代入する
 * - primitiveStr === wrapperStr の結果を変数 strictEqual に代入する
 *
 * 【要求事項】
 * - looseEqual と strictEqual の結果が異なる理由（==はラッパーを
 *   プリミティブへ暗黙変換して比較するが、===は型が異なるためfalse）を
 *   コメントで説明する
 * - 混乱のもとになるため new String などのラッパーオブジェクトを
 *   直接作るべきではない、という注意もコメントに書く
 *
 * 【参考】JavaScript Primer「ラッパーオブジェクト」
 * https://jsprimer.net/basic/wrapper-object/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題2の実行結果 ===');
try {
    console.log('typeofWrapper:', typeofWrapper); // 期待値: "object"
    console.log('looseEqual:', looseEqual);       // 期待値: true
    console.log('strictEqual:', strictEqual);     // 期待値: false
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
