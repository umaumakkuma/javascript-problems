/**
 * 06-error-handling-debug / 問題2: console.logを使ったデバッグ
 * 
 * 【課題】
 * 以下の関数で意図した結果が得られません。
 * console.logを使って問題箇所を特定し、修正してください
 * 期待される動作：配列の全ての数値を合計する
 * 
 * 【要求事項】
 * - console.logを使ってデバッグ情報を出力
 * - 問題を特定して修正
 * - デバッグ用のconsole.logはコメントアウトして残す
 * 
 * 【目安時間】15分
 */

// 問題のある関数
function sumArray(numbers) {
    let total = 0;
    for (let i = 0; i <= numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

// ========== ここから回答を記述 ==========

// デバッグ用のconsole.logを追加し、問題を修正してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題2の実行結果 ===');
console.log('sumArray([1, 2, 3, 4, 5]):', sumArray([1, 2, 3, 4, 5])); // 期待値: 15
console.log('sumArray([10, 20, 30]):', sumArray([10, 20, 30])); // 期待値: 60
