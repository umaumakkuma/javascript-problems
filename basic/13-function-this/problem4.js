/**
 * 13-function-this / 問題4: コールバック内のthisをArrow Functionで解決する
 *
 * 【課題】
 * メソッド内のコールバック関数でthisを使うと、thisが変わってしまう問題が
 * あります。Arrow Functionは「自分自身のthisを持たず、外側のthisを
 * そのまま使う」ため、この問題を解決できます。
 *
 * 以下のオブジェクトを完成させてください：
 * - nameプロパティ（"開発チーム"）とmembersプロパティ（["田中", "佐藤"]）を
 *   持つオブジェクト team を作成
 * - getIntroductionsメソッドを定義し、membersをmap()で変換して
 *   "田中は開発チームの一員です" のような文字列の配列を返す
 *
 * 【要求事項】
 * - getIntroductionsメソッド自体は短縮記法（getIntroductions() {...}）で定義する
 * - map()に渡すコールバックはArrow Functionにする
 *   （function() {} だとthis.nameが参照できないことをコメントで説明する）
 * - チーム名はthis.nameで参照する
 *
 * 【参考】JavaScript Primer「関数とthis」
 * https://jsprimer.net/basic/function-this/
 *
 * 【目安時間】15分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題4の実行結果 ===');
try {
    const introductions = team.getIntroductions();
    console.log('introductions[0]:', introductions[0]); // 期待値: "田中は開発チームの一員です"
    console.log('introductions[1]:', introductions[1]); // 期待値: "佐藤は開発チームの一員です"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
