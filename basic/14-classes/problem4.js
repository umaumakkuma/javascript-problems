/**
 * 14-classes / 問題4: 静的メソッド
 *
 * 【課題】
 * インスタンスではなくクラス自体から呼び出せる静的メソッドを定義してください：
 * - Pointクラスを定義し、constructorで x と y を受け取る
 * - 静的メソッド origin() を定義し、new Point(0, 0) を返す
 * - 静的メソッド fromArray(array) を定義し、[x, y]形式の配列から
 *   Pointインスタンスを作って返す
 *
 * 【要求事項】
 * - staticキーワードを使用する
 * - 静的メソッドは Point.origin() のようにクラスから直接呼び出し、
 *   インスタンスからは呼び出せないことをコメントで説明する
 * - 静的メソッドは「インスタンスを作るためのファクトリー」として
 *   よく使われることをコメントで説明する
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
console.log('=== 問題4の実行結果 ===');
try {
    const originPoint = Point.origin();
    console.log('originPoint.x:', originPoint.x); // 期待値: 0
    console.log('originPoint.y:', originPoint.y); // 期待値: 0
    const p = Point.fromArray([3, 7]);
    console.log('p.x:', p.x); // 期待値: 3
    console.log('p.y:', p.y); // 期待値: 7
    console.log('p instanceof Point:', p instanceof Point); // 期待値: true
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
