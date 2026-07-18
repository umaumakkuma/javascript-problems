# JavaScript実技テスト

## 🎯 テスト概要
各カテゴリに5問ずつ、計105問のJavaScript問題です。

カテゴリ07以降は、信頼性の高いJavaScript入門書 [JavaScript Primer](https://jsprimer.net/)（jsprimer）の第一部「基本文法」に準拠しています。各問題のコメントに、対応するjsprimerの章へのリンクを記載しているので、解けない場合はまず該当章を読んでから挑戦してください。

## 📁 カテゴリ

### チュートリアル
- `00-tutorial/` - **まずここから**。使い方に慣れるための練習問題（採点対象外、回答例つき）

### 入門編（01〜06）
- `01-basic-syntax/` - 基本文法・データ型
- `02-functions/` - 関数
- `03-dom-manipulation/` - DOM操作（※ブラウザで動作確認します。`03-dom-manipulation/index.html` から各問題のページを開いてください）
- `04-async-programming/` - 非同期処理（コールバック・setTimeout）
- `05-es6-modern/` - ES6+モダン記法
- `06-error-handling-debug/` - エラーハンドリング・デバッグ

### 基本文法編（07〜21） — JavaScript Primer 第一部準拠
- `07-data-types-literals/` - データ型とリテラル（[jsprimer: データ型とリテラル](https://jsprimer.net/basic/data-type/)）
- `08-operators-coercion/` - 演算子と暗黙的な型変換（[jsprimer: 演算子](https://jsprimer.net/basic/operator/) / [暗黙的な型変換](https://jsprimer.net/basic/implicit-coercion/)）
- `09-objects/` - オブジェクト（[jsprimer: オブジェクト](https://jsprimer.net/basic/object/)）
- `10-arrays/` - 配列（[jsprimer: 配列](https://jsprimer.net/basic/array/)）
- `11-strings/` - 文字列とUnicode（[jsprimer: 文字列](https://jsprimer.net/basic/string/) / [文字列とUnicode](https://jsprimer.net/basic/string-unicode/)）
- `12-function-scope/` - 関数とスコープ・クロージャー（[jsprimer: 関数とスコープ](https://jsprimer.net/basic/function-scope/)）
- `13-function-this/` - 関数とthis（[jsprimer: 関数とthis](https://jsprimer.net/basic/function-this/)）
- `14-classes/` - クラス（[jsprimer: クラス](https://jsprimer.net/basic/class/)）
- `15-promise-async/` - 非同期処理: Promise/Async Function（[jsprimer: 非同期処理](https://jsprimer.net/basic/async/)）
- `16-map-set/` - Map/Set（[jsprimer: Map/Set](https://jsprimer.net/basic/map-and-set/)）
- `17-json-date-math/` - JSON/Date/Math（[jsprimer: JSON](https://jsprimer.net/basic/json/) / [Date](https://jsprimer.net/basic/date/) / [Math](https://jsprimer.net/basic/math/)）
- `18-iterator-generator/` - イテレータとジェネレータ（[jsprimer: イテレータとジェネレータ](https://jsprimer.net/basic/iterator-generator/)）
- `19-prototype/` - プロトタイプオブジェクト（[jsprimer: プロトタイプオブジェクト](https://jsprimer.net/basic/prototype-object/)）
- `20-wrapper-objects/` - ラッパーオブジェクト（[jsprimer: ラッパーオブジェクト](https://jsprimer.net/basic/wrapper-object/)）
- `21-es-modules/` - ECMAScriptモジュール（[jsprimer: ECMAScriptモジュール](https://jsprimer.net/basic/module/)）
  - ※ このカテゴリのみ、import/exportを動かすためファイルが `.mjs` 形式です。問題3は `lib/my-module.mjs` に回答を記述します

## 🚀 実施方法
1. このリポジトリをフォーク
2. `00-tutorial/problem0.js` を実行して、問題の形式と ✅ / ❌ の見方に慣れる
3. 各`.js`ファイルの問題文を読み、指定箇所に回答を記述
4. Node.jsまたはブラウザのコンソールで動作確認
5. 完了後、フォークしたリポジトリにプッシュして提出

## ⏱️ 目安時間
- 各問題: 5-15分
- 入門編（01〜06）: 2-3時間
- 基本文法編（07〜21）: 10-12時間
- **できる範囲で進めてください**

## 💡 動作確認方法
```bash
# Node.jsの場合
node 01-basic-syntax/problem1.js

# ブラウザの場合
開発者ツール（F12）→ Consoleタブでコードを実行
```

各問題ファイルの末尾には「動作確認用のコード」があり、実行すると期待値と結果を照らし合わせられます。`❌ エラー:` が表示される場合は回答が未記入か、間違っています。エラーメッセージの意味が分からないときは [エラーメッセージの読み方ガイド](../docs/how-to-read-errors.md) を読んでください。

`03-dom-manipulation` だけはブラウザで動作確認します。`basic/03-dom-manipulation/index.html` をブラウザで開き（`npx serve .` 経由推奨、直接開いても動きます）、各問題のページで開発者ツール（F12）のConsoleを確認してください。

### 回答状況の一括チェック

`check.js` で全問題の回答状況をまとめて確認できます:

```bash
cd basic
node check.js        # 全カテゴリを集計
node check.js 07 19  # カテゴリ番号を指定して集計
```

- `✅` 回答済み / `❌` 未回答・誤答 / `💥` 実行時クラッシュ（構文エラーの可能性）
- `📝` は自動判定できない問題（出力の目視確認や、ブラウザでの動作確認が必要）です。ファイルを個別に実行して確認してください

## 📚 参考資料
- [JavaScript Primer](https://jsprimer.net/) - カテゴリ07以降の準拠元。迷ったらまずここを読む
- [MDN Web Docs](https://developer.mozilla.org/ja/) - JavaScriptのリファレンス

## 🔥 次のステップ
基本文法編を終えたら、[応用編（../advanced/）](../advanced/README.md)に進んでください。
JavaScript Primer 第二部準拠の、実際に動くアプリケーションを作る実技課題です。

本問題集のカテゴリ07〜18は [JavaScript Primer](https://jsprimer.net/)（© azu, Suguru Inatomi / [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)）の内容を参考に作成しています。
