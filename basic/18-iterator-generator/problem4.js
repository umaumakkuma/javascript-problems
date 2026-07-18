/**
 * 18-iterator-generator / 問題4: 範囲を生成するジェネレータ
 *
 * 【課題】
 * 開始値から終了値までの連続した整数をyieldするジェネレータ関数 range を
 * 作成してください。
 *
 * 例: [...range(1, 5)] → [1, 2, 3, 4, 5]
 *
 * 【要求事項】
 * - 関数名は range、引数は2つ（start, end）
 * - function* 構文を使用する
 * - forループまたはwhileループの中でyieldする
 * - 値は「必要になったときに1つずつ生成される」（遅延評価）ことを
 *   コメントで説明する
 *
 * 【参考】JavaScript Primer「イテレータとジェネレータ」
 * https://jsprimer.net/basic/iterator-generator/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題4の実行結果 ===');
try {
    console.log('[...range(1, 5)]:', [...range(1, 5)]);   // 期待値: [1, 2, 3, 4, 5]
    console.log('[...range(10, 13)]:', [...range(10, 13)]); // 期待値: [10, 11, 12, 13]
    const sum = [...range(1, 100)].reduce((total, n) => total + n, 0);
    console.log('1〜100の合計:', sum); // 期待値: 5050
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
