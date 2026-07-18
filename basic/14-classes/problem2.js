/**
 * 14-classes / 問題2: メソッドとアクセッサプロパティ（getter）
 *
 * 【課題】
 * メソッドとgetterを持つRectangleクラスを定義してください：
 * - constructorで width と height を受け取る
 * - 面積を返すgetter（get area）を定義する
 * - 幅と高さを指定倍する scale(factor) メソッドを定義する
 *
 * 【要求事項】
 * - getterはメソッドと違い、()を付けずにプロパティのようにアクセスできる
 *   ことをコメントで説明する
 * - scaleメソッドはthis.widthとthis.heightを書き換える
 *
 * 【参考】JavaScript Primer「クラス」
 * https://jsprimer.net/basic/class/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題2の実行結果 ===');
try {
    const rect = new Rectangle(4, 5);
    console.log('rect.area:', rect.area);   // 期待値: 20（()なしでアクセス）
    rect.scale(2);
    console.log('scale(2)後のwidth:', rect.width);   // 期待値: 8
    console.log('scale(2)後のheight:', rect.height); // 期待値: 10
    console.log('scale(2)後のarea:', rect.area);     // 期待値: 80
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
