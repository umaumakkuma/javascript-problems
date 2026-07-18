/**
 * 19-prototype / 問題4: プロトタイプを持たないオブジェクト
 *
 * 【課題】
 * Object.create(null) で作ったオブジェクトはプロトタイプを持たないため、
 * toString などの継承メソッドが一切ありません。プロパティ名の衝突を
 * 避けたい「辞書」用途で使われます。
 * - Object.create(null) で作ったオブジェクトを変数 dict に代入する
 * - dict にキー "apple"、値 100 を追加する
 * - typeof dict.toString の結果を変数 typeofDictToString に代入する
 * - 通常のオブジェクト {} での typeof ({}).toString の結果を
 *   変数 typeofNormalToString に代入する
 *
 * 【要求事項】
 * - Object.create(null) を使用する
 * - 通常のオブジェクトとの違い（プロトタイプがnullなので継承メソッドが
 *   存在しない）と、それが辞書用途で安全な理由をコメントで説明する
 *
 * 【参考】JavaScript Primer「プロトタイプオブジェクト」
 * https://jsprimer.net/basic/prototype-object/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題4の実行結果 ===');
try {
    console.log('dict.apple:', dict.apple);                                 // 期待値: 100
    console.log('typeofDictToString:', typeofDictToString);                 // 期待値: "undefined"
    console.log('typeofNormalToString:', typeofNormalToString);             // 期待値: "function"
    console.log('プロトタイプ:', Object.getPrototypeOf(dict));               // 期待値: null
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
