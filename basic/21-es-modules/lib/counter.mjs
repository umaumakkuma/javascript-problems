// 提供モジュール（変更不要）
// モジュールは何回importされても「一度だけ」評価されるため、
// このcount変数の状態はimportした側すべてで共有される

let count = 0;

export function increment() {
    count = count + 1;
    return count;
}

export function getCount() {
    return count;
}
