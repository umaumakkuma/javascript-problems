/**
 * 14-classes / 問題3: Privateクラスフィールド
 *
 * 【課題】
 * 外部から直接変更できないPrivateフィールドを持つCounterクラスを
 * 定義してください：
 * - Privateクラスフィールド #count を0で初期化する
 * - increment()メソッドで#countを1増やす
 * - 現在の値を返すgetter（get value）を定義する
 *
 * 【要求事項】
 * - #countはクラスの外からアクセスできない（counter.#countはSyntaxError）
 *   ことをコメントで説明する
 * - Privateフィールドを使う利点（不正な書き換えを防げる）を
 *   コメントで説明する
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
console.log('=== 問題3の実行結果 ===');
try {
    const counter = new Counter();
    counter.increment();
    counter.increment();
    counter.increment();
    console.log('counter.value:', counter.value); // 期待値: 3
    console.log('外部からは#countにアクセスできないため、valueゲッター経由でのみ読み取れる');
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
