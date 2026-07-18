# 課題03: Todoアプリ

Todoアイテムの「追加・更新（完了チェック）・削除・件数表示」ができるTodoアプリを完成させます。
この課題の主眼は機能そのものよりも、**モジュール分割された構成**と**イベント駆動（Model/Viewの分離）**の理解です。

準拠元: [jsprimer 第二部「Todoアプリ」](https://jsprimer.net/use-case/todoapp/)

## アプリの構成

```
03-todoapp/
├── index.html            # 完成済み（変更不要）
├── index.css             # 完成済み（変更不要）
├── index.js              # 完成済み（変更不要）: Appを起動するだけ
├── src/
│   ├── App.js            # 【Step5】Model と View をつなぐアプリ本体
│   ├── EventEmitter.js   # 【Step2】イベントの仕組み（ディスパッチャー）
│   ├── model/
│   │   ├── TodoItemModel.js  # 【Step3】Todoアイテム1件の状態
│   │   └── TodoListModel.js  # 【Step3】Todoリスト全体の状態
│   └── view/
│       ├── html-util.js      # 完成済み（変更不要）: HTML文字列→DOM要素の変換
│       ├── TodoItemView.js   # 【Step4】Todoアイテム1件の表示
│       └── TodoListView.js   # 完成済み（変更不要・要読解）
└── test/                 # Model層のユニットテスト（変更不要）
```

**データの流れ（単方向）**: 入力イベント → `App` が `TodoListModel` を更新 → Modelが `change` イベントを発行 → `App` が `TodoListView` でHTMLを作り直して表示

## 進め方

### Step1: エントリーポイントの確認

- 参考: [エントリーポイント](https://jsprimer.net/use-case/todoapp/entrypoint/) / [アプリの構成要素](https://jsprimer.net/use-case/todoapp/app-structure/)
- ローカルサーバーを起動してブラウザで開き、見た目だけのTodoアプリが表示されること、
  Consoleに `todoapp: loaded` が表示されエラーが出ていないことを確認する

```bash
cd 03-todoapp
npx serve .
```

- ES Modules（`import`/`export`）で分割されているため、`file://` では動きません。必ずローカルサーバー経由で開くこと

### Step2: EventEmitterを実装する

- 参考: [イベントとモデル](https://jsprimer.net/use-case/todoapp/event-model/)
- `src/EventEmitter.js` の3つのメソッドを実装する
  - `addEventListener(type, listener)`: イベント名に対応するSetにリスナー関数を登録
  - `emit(type)`: イベント名に対応するSetのリスナー関数をすべて呼び出す
  - `removeEventListener(type, listener)`: 登録済みのリスナー関数を解除
- **動作確認**: `npm test` で `event-emitter-test.js` のテストがすべてpassすること

### Step3: Modelを実装する

- 参考: [イベントとモデル](https://jsprimer.net/use-case/todoapp/event-model/) / [Todoアイテムの更新と削除](https://jsprimer.net/use-case/todoapp/update-delete/)
- `src/model/TodoItemModel.js`: コンストラクタを実装（idは連番でユニークにする）
- `src/model/TodoListModel.js`: EventEmitterを継承した各メソッドを実装
- **動作確認**: `npm test` で全テスト（event-emitter + todo-list-model）がpassすること

### Step4: Viewを実装する

- 参考: [Todoアイテムの更新と削除](https://jsprimer.net/use-case/todoapp/update-delete/) / [Todoアプリのリファクタリング](https://jsprimer.net/use-case/todoapp/final/)
- `src/view/TodoItemView.js` の `createElement` を実装する
  - ファイル内のTODOコメントにHTMLのテンプレートを記載済み。CSSが適用されるよう
    class属性（`checkbox` / `delete`）を変えないこと
  - チェックボックスの `change` イベントで `onUpdateTodo` を、
    削除ボタンの `click` イベントで `onDeleteTodo` を呼び出す
- 完成済みの `TodoListView.js` と `html-util.js` を読み、
  `element` タグ関数と `render` 関数の役割を理解しておく（Step5で使う）

### Step5: Appを実装する

- 参考: [Todoアプリのリファクタリング](https://jsprimer.net/use-case/todoapp/final/)
- `src/App.js` の `handleAdd` / `handleUpdate` / `handleDelete` / `mount` を実装する
- **動作確認**（ブラウザ）:
  - 入力してEnterでTodoアイテムが追加され、入力欄が空になる
  - チェックボックスで完了状態が切り替わる（打ち消し線が付く）
  - xボタンでアイテムが削除される
  - どの操作でも「Todoアイテム数」の表示が正しく更新される

## 提出前チェックリスト

- [ ] `npm test` が全件passする
- [ ] 追加・更新・削除・件数表示のすべてがブラウザで動作する
- [ ] `TodoListModel` の状態変更が `emitChange` → `onChange` のイベント経由で表示に反映されている（Viewから直接Modelを触っていない）
- [ ] `element` タグ関数によりTodoタイトルがHTMLエスケープされている（`<s>test</s>` と入力しても打ち消し線にならずそのまま表示されればOK）
