// 提供モジュール（変更不要）
// 名前付きエクスポート3つと、デフォルトエクスポート1つを提供する

export const VERSION = "1.0.0";

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

// デフォルトエクスポート（モジュールに1つだけ定義できる）
export default function square(x) {
    return x * x;
}
