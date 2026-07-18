/**
 * 17-json-date-math / 問題5: Mathオブジェクトの活用
 *
 * 【課題】
 * Mathオブジェクトのメソッドを使った関数を作成してください：
 * - clamp(value, min, max): valueをmin以上max以下の範囲に収める
 *   （Math.min()とMath.max()を組み合わせる）
 * - maxOfArray(numbers): 数値の配列の最大値を返す
 *   （Math.max()とスプレッド構文を組み合わせる）
 * - randomInt(min, max): min以上max以下のランダムな整数を返す
 *   （Math.random()とMath.floor()を組み合わせる）
 *
 * 【要求事項】
 * - Math.maxは配列を直接受け取れないため、スプレッド構文で展開する
 *   ことをコメントで説明する
 * - randomIntの計算式: Math.floor(Math.random() * (max - min + 1)) + min
 *
 * 【参考】JavaScript Primer「Math」
 * https://jsprimer.net/basic/math/
 *
 * 【目安時間】15分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題5の実行結果 ===');
try {
    console.log('clamp(15, 0, 10):', clamp(15, 0, 10));   // 期待値: 10
    console.log('clamp(-5, 0, 10):', clamp(-5, 0, 10));   // 期待値: 0
    console.log('clamp(5, 0, 10):', clamp(5, 0, 10));     // 期待値: 5
    console.log('maxOfArray([3, 9, 2, 7]):', maxOfArray([3, 9, 2, 7])); // 期待値: 9
    const r = randomInt(1, 6);
    console.log('randomInt(1, 6):', r, '（1〜6の整数）');
    console.log('範囲チェック:', r >= 1 && r <= 6 && Number.isInteger(r) ? '⭕ 範囲内' : '❌ 範囲外');
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
