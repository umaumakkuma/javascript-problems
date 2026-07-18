# 課題02: Node.jsでCLIアプリ — Markdown変換ツール

MarkdownファイルをHTMLに変換するコマンドラインツールを作ります。
最終的に次のように使えるツールが完成します:

```bash
node main.js sample.md          # MarkdownをHTMLに変換して標準出力へ
node main.js --gfm sample.md    # GFM（GitHub Flavored Markdown）モードで変換
npm test                        # ユニットテストで自動採点
```

準拠元: [jsprimer 第二部「Node.jsでCLIアプリ」](https://jsprimer.net/use-case/nodecli/)

## ファイル構成

- `package.json` — 完成済み（`"type": "module"`、テスト設定、markedへの依存）
- `main.js` — **実装する**: コマンドライン引数の処理とファイル読み込み
- `md2html.js` — **実装する**: Markdown→HTML変換モジュール
- `sample.md` — 動作確認用のMarkdownファイル（変更不要）
- `test/` — ユニットテストとフィクスチャ（変更不要）

## 進め方

### Step0: セットアップ

```bash
cd 02-nodecli
npm install   # markedパッケージがインストールされる
```

### Step1: Hello World

- 参考: [Node.jsでHello World](https://jsprimer.net/use-case/nodecli/helloworld/)
- `main.js` の先頭に `console.log("Hello World")` を書き、`node main.js` で表示されることを確認する
- 確認できたらこの行は削除してよい

### Step2: コマンドライン引数を処理する

- 参考: [コマンドライン引数を処理する](https://jsprimer.net/use-case/nodecli/argument-parse/)
- `node:util` の `parseArgs` 関数で引数をパースする
  - `allowPositionals: true` を指定し、`positionals[0]` をファイルパスとして受け取る
  - `--gfm` フラグを `type: "boolean"`、`default: false` で定義する
- **動作確認**: `console.log` でパース結果を表示し、
  `node main.js --gfm sample.md` でファイルパスとフラグが取れていること

### Step3: ファイルを読み込む

- 参考: [ファイルを読み込む](https://jsprimer.net/use-case/nodecli/read-file/)
- `node:fs/promises` の `readFile` でファイルを読み込む
  - 文字列として読み込むため `{ encoding: "utf8" }` オプションを付ける
  - 読み込み失敗時は `console.error(err.message)` を出力し、
    `process.exit(1)` で終了コード1で終了する
- **動作確認**: `node main.js sample.md` でファイルの中身が表示されること、
  `node main.js notfound.md` でエラーメッセージが表示されること

### Step4: MarkdownをHTMLに変換する

- 参考: [MarkdownをHTMLに変換する](https://jsprimer.net/use-case/nodecli/md-to-html/)
- `md2html.js` に、markedを使った変換関数 `md2html` を実装してエクスポートする
  - `marked.parse(markdown, { gfm: cliOptions.gfm })` の結果を返す
- `main.js` から `md2html` をインポートし、読み込んだファイルを変換して
  `console.log` で出力する（`--gfm` フラグの値をオプションとして渡す）
- **動作確認**:
  - `node main.js sample.md` → URLがリンクにならないHTML
  - `node main.js --gfm sample.md` → URLが`<a>`タグになるHTML

### Step5: ユニットテストで採点する

- 参考: [ユニットテストを記述する](https://jsprimer.net/use-case/nodecli/refactor-and-unittest/)
- テストは作成済み（`test/md2html-test.js`）。Node.js標準の `node --test` で動く

```bash
npm test
# ✔ converts Markdown to HTML (GFM=false)
# ✔ converts Markdown to HTML (GFM=true)
# の2件がpassすれば完成！
```

## 提出前チェックリスト

- [ ] `npm test` が2件ともpassする
- [ ] `--gfm` フラグの有無で出力が変わる
- [ ] 存在しないファイルを指定すると終了コード1で終了する（`echo $?` で確認できる）
- [ ] 変換処理が `md2html.js` にモジュールとして分離されている
