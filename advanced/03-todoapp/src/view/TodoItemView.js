// 【Step4】Todoアイテム1件分のHTML要素を作るView
// 参考: https://jsprimer.net/use-case/todoapp/final/
import { element } from "./html-util.js";

export class TodoItemView {
    /**
     * `todoItem`に対応するTodoアイテムのHTML要素を作成して返す
     * @param {TodoItemModel} todoItem
     * @param {function({id:number, completed: boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
     * @param {function({id:number})} onDeleteTodo 削除ボタンのクリックイベントリスナー
     * @returns {Element}
     *
     * TODO(Step4): 以下の手順で実装する
     *
     * 1. todoItem.completedの値によって、elementタグ関数で次のどちらかの
     *    HTML要素を作成する（class属性はCSSと対応しているので変えないこと）:
     *
     *    完了済みの場合（チェック済み・打ち消し線）:
     *      element`<li><input type="checkbox" class="checkbox" checked>
     *          <s>${todoItem.title}</s>
     *          <button class="delete">x</button>
     *      </li>`
     *
     *    未完了の場合:
     *      element`<li><input type="checkbox" class="checkbox">
     *          ${todoItem.title}
     *          <button class="delete">x</button>
     *      </li>`
     *
     * 2. 作成した要素からquerySelector(".checkbox")でチェックボックスを取得し、
     *    "change"イベントで onUpdateTodo({ id: todoItem.id, completed: !todoItem.completed })
     *    を呼び出すリスナーを登録する
     *
     * 3. querySelector(".delete")で削除ボタンを取得し、
     *    "click"イベントで onDeleteTodo({ id: todoItem.id })
     *    を呼び出すリスナーを登録する
     *
     * 4. 作成したHTML要素をreturnする
     */
    createElement(todoItem, { onUpdateTodo, onDeleteTodo }) {
        // TODO(Step4): ここに実装
    }
}
