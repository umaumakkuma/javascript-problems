# JavaScript実技問題集

若手エンジニアのスキルアップのためのJavaScript問題集です。

AIを使えば実装自体は簡単にできる時代ですが、**AIが作ったコードが正しいかどうかを判断するのは人間**です。そのためにはJavaScriptの作り・言語仕様をちゃんと理解していることが不可欠——この問題集は、その基礎力を「なぜそう動くのか」を問う形式で鍛えることを目的としています。

コンテンツは、信頼性の高いJavaScript入門書 [JavaScript Primer](https://jsprimer.net/)（jsprimer）に準拠しています。

## 📁 構成

| ディレクトリ | 内容 | 分量 |
|---|---|---|
| [`basic/`](./basic/README.md) | 穴埋め形式の文法問題（入門編 + jsprimer第一部準拠） | 21カテゴリ × 5問 = 105問 |
| [`advanced/`](./advanced/README.md) | jsprimer第二部準拠の、動くアプリを完成させる実技課題 | 3課題 |

## 🚀 学習パス

1. **`basic/` 01〜06（入門編)** — 変数・関数・非同期の基本
2. **`basic/` 07〜21（基本文法編)** — jsprimer第一部に沿って言語仕様を深掘り
3. **`advanced/` 01〜03（応用編)** — Ajax通信 → Node.js CLI → Todoアプリの順に、複数ファイル構成のアプリを段階的に実装

各問題・課題には対応するjsprimerの章へのリンクがあります。解けないときは、まず該当章を読んでから再挑戦してください。

## 🛠 必要環境

- **Node.js v22以上**（[公式サイト](https://nodejs.org/ja/)からインストール）。**v22系を推奨**します（下記の自動採点と同じバージョン）
- ブラウザ課題用に任意のローカルサーバー（`npx serve .` など）

## 📝 進め方

1. このリポジトリをフォーク
2. 問題文を読み、指定箇所に回答を記述
3. 動作確認する:

```bash
# basic/: 問題を個別に実行
node basic/07-data-types-literals/problem1.js

# basic/: 回答状況を一括チェック
cd basic && node check.js        # 全カテゴリ
cd basic && node check.js 07 19  # カテゴリ番号を指定

# advanced/: ユニットテストで自動採点（02, 03）
cd advanced/02-nodecli && npm install && npm test
cd advanced/03-todoapp && npm test
```

4. 完了後、フォークしたリポジトリにプッシュして提出

## 🤖 pushするたびに自動採点（GitHub Actions）

フォーク先のリポジトリで **Actionsタブを開いて有効化**（初回に1回ボタンを押すだけ）すると、pushのたびに自動採点が実行されます:

- **basic/ 回答状況** — `check.js` の集計表がActionsの実行結果ページ（サマリー）に表示されます
- **advanced/ 自動採点** — `npm test` のpass件数が表示されます
- 未回答があっても失敗にはなりません。**回答がクラッシュする（構文エラーなど）ときだけ赤バツ**が付くので、壊れたコードの提出を防げます
- **採点はNode.js v22で実行されます**。ローカルでそれより新しいNode.jsを使っていて、新バージョン限定の機能を回答に使うと「ローカルでは動くのにCIでは❌/💥」になることがあります。ローカルもv22系に揃えるのが確実です

## 📚 ライセンス・出典

本問題集の `basic/` カテゴリ07以降と `advanced/` は [JavaScript Primer](https://jsprimer.net/)（文章: © azu, Suguru Inatomi / [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)、ソースコード: [MITライセンス](https://github.com/js-primer/js-primer/blob/master/LICENSE-MIT)）を元に作成しています。
