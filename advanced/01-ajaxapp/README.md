# 課題01: Ajax通信 — GitHubユーザー情報アプリ

GitHubのユーザーIDを入力すると、そのユーザーの情報（名前・アイコン・所在地・リポジトリ数）を表示するウェブアプリを作ります。

準拠元: [jsprimer 第二部「Ajax通信」](https://jsprimer.net/use-case/ajaxapp/)

## 完成イメージ

1. テキストボックスにGitHubのユーザーID（例: `js-primer-example`）を入力
2. 「Get user info」ボタンをクリック
3. ボタンの下にユーザー情報のカードが表示される
4. 存在しないユーザーIDの場合はコンソールにエラーメッセージが表示される

## ファイル構成

- `index.html` — 完成済み。変更不要
- `index.js` — **このファイルに実装する**。`TODO(StepN)` コメントの箇所を埋める
  - HTMLエスケープ用の `escapeSpecialChars` / `escapeHTML` は実装済みで、そのまま使えます

## 進め方

### Step1: エントリーポイントの確認

- 参考: [エントリーポイント](https://jsprimer.net/use-case/ajaxapp/entrypoint/)
- このディレクトリでローカルサーバーを起動し、ブラウザで `index.html` を開く
- 開発者ツール（F12）のConsoleに `index.js: loaded` と表示されることを確認する

```bash
cd 01-ajaxapp
npx serve .
# 表示されたURL（例: http://localhost:3000）をブラウザで開く
```

### Step2: HTTP通信（fetchUserInfo関数）

- 参考: [HTTP通信](https://jsprimer.net/use-case/ajaxapp/http/)
- `fetchUserInfo` 関数を実装する
  - Fetch APIで `https://api.github.com/users/ユーザーID` にGETリクエストを送る
  - ユーザーIDは `encodeURIComponent` でエスケープする
  - `response.ok` が `false` の場合は `Promise.reject(new Error(...))` でエラーにする
  - 成功時は `response.json()` の結果（Promise）を返す
- **動作確認**: Consoleで `fetchUserInfo("js-primer-example").then(console.log)` を実行し、ユーザー情報のオブジェクトが表示されること

### Step3: データの表示（createView / displayView関数）

- 参考: [データを表示する](https://jsprimer.net/use-case/ajaxapp/display/)
- `createView` 関数: ユーザー情報のオブジェクトからHTML文字列を組み立てて返す
  - 実装済みの `escapeHTML` タグ関数を**必ず**使うこと（XSS対策。理由は準拠章を参照）
- `displayView` 関数: `id="result"` の要素の `innerHTML` にHTML文字列を代入する
- **動作確認**: この段階ではまだボタンから呼ばれないため、Step4完了後にまとめて確認してOK

### Step4: Promiseの活用（main関数とエラーハンドリング）

- 参考: [Promiseを活用する](https://jsprimer.net/use-case/ajaxapp/promise/)
- `getUserId` 関数: `id="userId"` のinput要素から値を取得して返す
- `main` 関数: Async Functionとして実装する
  - `getUserId` → `fetchUserInfo`（`await`）→ `createView` → `displayView` の順に呼び出す
  - 全体を `try...catch` で囲み、エラー時は
    `console.error(`エラーが発生しました (${error})`)` を出力する
- **動作確認**:
  - `js-primer-example` を入力してボタンを押すと、ユーザー情報カードが表示される
  - 存在しないID（例: `@@@`）ではConsoleに `エラーが発生しました (Error: 404: Not Found)` が表示される
  - 入力を変えると表示も変わる

## 提出前チェックリスト

- [ ] `fetchUserInfo` がPromiseを返し、エラーレスポンス（`!response.ok`）をrejectしている
- [ ] `createView` で `escapeHTML` タグ関数を使っている
- [ ] `main` がAsync Function + `try...catch` で書かれている
- [ ] 正常系・異常系の両方の動作確認をした
