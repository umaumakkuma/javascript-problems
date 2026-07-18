// 【Step3】Todoリスト全体の状態を管理するモデル
// EventEmitterを継承し、状態が変わるたびに"change"イベントを発行する。
// これによりViewはModelの変更を「イベント経由」で知ることができる。
// 参考: https://jsprimer.net/use-case/todoapp/event-model/
//       https://jsprimer.net/use-case/todoapp/update-delete/
import { EventEmitter } from "../EventEmitter.js";

export class TodoListModel extends EventEmitter {
    #items;

    /**
     * @param {TodoItemModel[]} [items] 初期アイテム一覧（デフォルトは空の配列）
     */
    constructor(items = []) {
        super();
        this.#items = items;
    }

    /**
     * TodoItemの合計個数を返す
     * @returns {number}
     *
     * TODO(Step3): #itemsの要素数を返す
     */
    getTotalCount() {
        // TODO(Step3): ここに実装
    }

    /**
     * 表示できるTodoItemの配列を返す
     * @returns {TodoItemModel[]}
     *
     * TODO(Step3): #itemsを返す
     */
    getTodoItems() {
        // TODO(Step3): ここに実装
    }

    /**
     * TodoListの状態が更新されたときに呼び出されるリスナー関数を登録する
     * @param {Function} listener
     *
     * TODO(Step3): addEventListenerで"change"イベントにlistenerを登録する
     * （EventEmitterを継承しているのでthisのメソッドとして呼べる）
     */
    onChange(listener) {
        // TODO(Step3): ここに実装
    }

    /**
     * 状態が変更されたときに呼ぶ。登録済みのリスナー関数を呼び出す
     *
     * TODO(Step3): emitで"change"イベントをディスパッチする
     */
    emitChange() {
        // TODO(Step3): ここに実装
    }

    /**
     * TodoItemを追加する
     * @param {TodoItemModel} todoItem
     *
     * TODO(Step3):
     * 1. #itemsにtodoItemを追加する
     * 2. emitChange()を呼んで変更を通知する
     */
    addTodo(todoItem) {
        // TODO(Step3): ここに実装
    }

    /**
     * 指定したidのTodoItemのcompletedを更新する
     * @param {{ id:number, completed: boolean }}
     *
     * TODO(Step3):
     * 1. #itemsからidが一致するTodoItemをfindで探す
     * 2. 見つからなければ何もせずreturnする
     * 3. 見つかったTodoItemのcompletedを更新し、emitChange()を呼ぶ
     */
    updateTodo({ id, completed }) {
        // TODO(Step3): ここに実装
    }

    /**
     * 指定したidのTodoItemを削除する
     * @param {{ id: number }}
     *
     * TODO(Step3):
     * 1. filterを使って「idが一致しないTodoItemだけを残した」新しい配列を
     *    #itemsに代入する（＝一致するものが取り除かれる）
     * 2. emitChange()を呼ぶ
     */
    deleteTodo({ id }) {
        // TODO(Step3): ここに実装
    }
}
