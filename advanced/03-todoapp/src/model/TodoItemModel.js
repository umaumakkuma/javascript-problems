// 【Step3】Todoアイテム1件の状態を表すモデル
// 参考: https://jsprimer.net/use-case/todoapp/event-model/

// ユニークなIDを管理する変数（モジュールスコープなのでアプリ内で共有される）
let todoIdx = 0;

export class TodoItemModel {
    /** @type {number} TodoアイテムのID */
    id;
    /** @type {string} Todoアイテムのタイトル */
    title;
    /** @type {boolean} Todoアイテムが完了済みならばtrue */
    completed;

    /**
     * @param {{ title: string, completed: boolean }} 引数はオブジェクトで受け取る
     *
     * TODO(Step3):
     * 1. this.idにtodoIdxの現在値を代入し、todoIdxを1増やす（連番でユニークになる）
     * 2. this.titleとthis.completedに引数の値を代入する
     */
    constructor({ title, completed }) {
        // TODO(Step3): ここに実装
    }
}
