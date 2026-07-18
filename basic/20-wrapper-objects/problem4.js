/**
 * 20-wrapper-objects / 問題4: プリミティブ値に追加したプロパティは消える
 *
 * 【課題】
 * プリミティブ値の文字列にプロパティを代入しても、エラーには
 * なりませんが保存もされません。なぜでしょうか。
 * - 文字列 "hello" を変数 str に代入する（letで宣言）
 * - str.customProp に 123 を代入する
 * - その直後に str.customProp を読み出し、変数 savedProp に代入する
 *
 * 【要求事項】
 * - savedProp が undefined になる理由（代入の瞬間に作られた一時的な
 *   ラッパーオブジェクトに書き込まれ、すぐ破棄される。次に読み出す
 *   ときは別の新しいラッパーが作られるため値は残っていない）を
 *   コメントで説明する
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
console.log('=== 問題4の実行結果 ===');
try {
    console.log('str:', str);             // 期待値: "hello"
    console.log('savedProp:', savedProp); // 期待値: undefined（プロパティは保存されない）
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
