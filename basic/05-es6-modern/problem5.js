/**
 * 05-es6-modern / 問題5: 分割代入（オブジェクト）
 * 
 * 【課題】
 * 以下のオブジェクトから、分割代入を使ってnameとageを取得してください
 * 
 * const person = {
 *     name: "鈴木一郎",
 *     age: 28,
 *     city: "東京",
 *     job: "エンジニア"
 * };
 * 
 * 分割代入を使って、nameとageを変数として取得してください
 * 
 * 【要求事項】
 * - オブジェクトの分割代入構文を使用する
 * - 変数名は name, age とする
 * 
 * 【目安時間】5分
 */

// 与えられたオブジェクト（変更不要）
const person = {
    name: "鈴木一郎",
    age: 28,
    city: "東京",
    job: "エンジニア"
};

// ========== ここから回答を記述 ==========

// ここに回答を記述してください


// ========== ここまで回答を記述 ==========

// 動作確認用のコード（変更不要）
console.log('=== 問題5の実行結果 ===');
try {
    console.log('name:', name); // 期待値: "鈴木一郎"
    console.log('age:', age); // 期待値: 28
    console.log('元のオブジェクト:', person);
    console.log('✅ 正常に実行されました');
} catch (error) {
    console.log('❌ エラー:', error.message);
}
