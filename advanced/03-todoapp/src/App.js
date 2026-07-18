// 【Step5】ModelとViewをつなぐアプリ本体
// 参考: https://jsprimer.net/use-case/todoapp/final/
import { render } from "./view/html-util.js";
import { TodoListView } from "./view/TodoListView.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoListModel } from "./model/TodoListModel.js";

export class App {
    #todoListView = new TodoListView();
    #todoListModel = new TodoListModel([]);

    /**
     * Todoを追加するときに呼ばれるリスナー関数
     * @param {string} title
     *
     * TODO(Step5):
     * new TodoItemModel({ title, completed: false }) を作成し、
     * #todoListModelのaddTodoに渡す
     */
    handleAdd(title) {
        // TODO(Step5): ここに実装
    }

    /**
     * Todoの状態を更新したときに呼ばれるリスナー関数
     * @param {{ id:number, completed: boolean }}
     *
     * TODO(Step5): #todoListModelのupdateTodoに { id, completed } を渡す
     */
    handleUpdate({ id, completed }) {
        // TODO(Step5): ここに実装
    }

    /**
     * Todoを削除したときに呼ばれるリスナー関数
     * @param {{ id: number }}
     *
     * TODO(Step5): #todoListModelのdeleteTodoに { id } を渡す
     */
    handleDelete({ id }) {
        // TODO(Step5): ここに実装
    }

    /**
     * アプリとDOMの紐付けを行い、アプリを開始する
     *
     * TODO(Step5): 以下の手順で実装する
     *
     * 1. document.querySelectorで次の4つの要素を取得する
     *    - "#js-form"        : フォーム要素
     *    - "#js-form-input"  : 入力欄
     *    - "#js-todo-count"  : アイテム数の表示欄
     *    - "#js-todo-list"   : Todoリストのコンテナ要素
     *
     * 2. #todoListModel.onChange(() => { ... }) で「Modelが変わったら表示を
     *    作り直す」リスナーを登録する。リスナーの中では:
     *    a. #todoListModel.getTodoItems() でアイテム一覧を取得
     *    b. #todoListView.createElement(todoItems, { onUpdateTodo, onDeleteTodo })
     *       でリストのHTML要素を作る
     *       - onUpdateTodoでは this.handleUpdate を、onDeleteTodoでは
     *         this.handleDelete を呼び出す（thisを保つためアロー関数で書く）
     *    c. render(todoListElement, コンテナ要素) で表示を更新
     *    d. アイテム数の表示欄のtextContentを
     *       `Todoアイテム数: ${#todoListModel.getTotalCount()}` に更新
     *
     * 3. フォームの"submit"イベントにリスナーを登録する。リスナーの中では:
     *    a. event.preventDefault() でページのリロードを防ぐ
     *    b. this.handleAdd(入力欄.value) を呼ぶ
     *    c. 入力欄.value を空文字にリセットする
     */
    mount() {
        // TODO(Step5): ここに実装
    }
}
