// TodoListModel / TodoItemModelのユニットテスト（変更不要）
// 実行方法: npm test
import { test } from "node:test";
import * as assert from "node:assert";
import { TodoListModel } from "../src/model/TodoListModel.js";
import { TodoItemModel } from "../src/model/TodoItemModel.js";

test("TodoItemModelはtitleとcompletedを持ち、idはユニークになる", () => {
    const itemA = new TodoItemModel({ title: "牛乳を買う", completed: false });
    const itemB = new TodoItemModel({ title: "掃除をする", completed: true });
    assert.strictEqual(itemA.title, "牛乳を買う");
    assert.strictEqual(itemA.completed, false);
    assert.strictEqual(itemB.completed, true);
    assert.notStrictEqual(itemA.id, itemB.id, "idはインスタンスごとに異なる");
});

test("初期状態ではアイテム数は0", () => {
    const todoListModel = new TodoListModel([]);
    assert.strictEqual(todoListModel.getTotalCount(), 0);
    assert.deepStrictEqual(todoListModel.getTodoItems(), []);
});

test("addTodoでアイテムが追加され、件数が増える", () => {
    const todoListModel = new TodoListModel([]);
    todoListModel.addTodo(new TodoItemModel({ title: "テスト1", completed: false }));
    todoListModel.addTodo(new TodoItemModel({ title: "テスト2", completed: false }));
    assert.strictEqual(todoListModel.getTotalCount(), 2);
    const titles = todoListModel.getTodoItems().map((item) => item.title);
    assert.deepStrictEqual(titles, ["テスト1", "テスト2"]);
});

test("addTodoするとonChangeで登録したリスナー関数が呼ばれる", () => {
    const todoListModel = new TodoListModel([]);
    let called = false;
    todoListModel.onChange(() => {
        called = true;
    });
    todoListModel.addTodo(new TodoItemModel({ title: "テスト", completed: false }));
    assert.strictEqual(called, true, "変更がchangeイベントで通知される");
});

test("updateTodoで指定したidのcompletedが更新される", () => {
    const todoListModel = new TodoListModel([]);
    const item = new TodoItemModel({ title: "テスト", completed: false });
    todoListModel.addTodo(item);
    todoListModel.updateTodo({ id: item.id, completed: true });
    assert.strictEqual(todoListModel.getTodoItems()[0].completed, true);
});

test("updateTodoで存在しないidを指定しても何も起きない", () => {
    const todoListModel = new TodoListModel([]);
    const item = new TodoItemModel({ title: "テスト", completed: false });
    todoListModel.addTodo(item);
    let changeCount = 0;
    todoListModel.onChange(() => {
        changeCount = changeCount + 1;
    });
    todoListModel.updateTodo({ id: -999, completed: true });
    assert.strictEqual(changeCount, 0, "変更がないのでchangeイベントは発行されない");
    assert.strictEqual(todoListModel.getTodoItems()[0].completed, false);
});

test("deleteTodoで指定したidのアイテムが削除される", () => {
    const todoListModel = new TodoListModel([]);
    const itemA = new TodoItemModel({ title: "残すアイテム", completed: false });
    const itemB = new TodoItemModel({ title: "削除するアイテム", completed: false });
    todoListModel.addTodo(itemA);
    todoListModel.addTodo(itemB);
    todoListModel.deleteTodo({ id: itemB.id });
    assert.strictEqual(todoListModel.getTotalCount(), 1);
    assert.strictEqual(todoListModel.getTodoItems()[0].title, "残すアイテム");
});
