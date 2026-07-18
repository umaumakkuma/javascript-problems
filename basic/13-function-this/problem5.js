/**
 * 13-function-this / 問題5: Arrow Functionをメソッドにしてはいけない理由
 *
 * 【課題】
 * 次のコードは意図通りに動きません。なぜ動かないのかを理解した上で、
 * 正しく動くように書き直してください：
 *
 *   const timer = {
 *       seconds: 30,
 *       getRemaining: () => {
 *           return `残り${this.seconds}秒`; // thisがtimerを参照しない！
 *       }
 *   };
 *
 * 【要求事項】
 * - timerオブジェクトを、getRemainingが "残り30秒" を返すように修正して
 *   定義する（メソッドの短縮記法 getRemaining() {...} を使う）
 * - Arrow Functionは「定義された場所の外側のthis」を使うため、
 *   オブジェクトのメソッド定義には向かないことをコメントで説明する
 * - 逆に「メソッド内のコールバック」にはArrow Functionが向いている、という
 *   使い分けもコメントでまとめる
 *
 * 【参考】JavaScript Primer「関数とthis」
 * https://jsprimer.net/basic/function-this/
 *
 * 【目安時間】10分
 */

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題5の実行結果 ===');
try {
    console.log('timer.getRemaining():', timer.getRemaining()); // 期待値: "残り30秒"
    timer.seconds = 10;
    console.log('変更後:', timer.getRemaining());               // 期待値: "残り10秒"
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
