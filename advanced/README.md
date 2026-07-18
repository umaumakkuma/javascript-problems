# JavaScript実技課題（応用編）

[JavaScript Primer](https://jsprimer.net/) 第二部「ユースケース」に準拠した、小さなアプリケーションを段階的に作り上げる実技課題です。
`basic/` の穴埋め問題とは異なり、**複数ファイルで構成された実際に動くアプリケーション**を完成させます。

## 📁 課題一覧

| 課題 | 内容 | 実行環境 | 準拠元 |
|---|---|---|---|
| `01-ajaxapp/` | GitHubユーザー情報を取得・表示するアプリ | ブラウザ | [Ajax通信](https://jsprimer.net/use-case/ajaxapp/) |
| `02-nodecli/` | MarkdownをHTMLに変換するCLIツール | Node.js | [Node.jsでCLIアプリ](https://jsprimer.net/use-case/nodecli/) |
| `03-todoapp/` | Todoアプリ（モジュール分割・イベント駆動） | ブラウザ + Node.js | [Todoアプリ](https://jsprimer.net/use-case/todoapp/) |

01 → 02 → 03 の順に難しくなります。順番に取り組むことをおすすめします。

## 🎯 basic/ との違い

- 各課題は複数のステップに分かれており、各ステップがjsprimerの1つの章に対応しています
- コードの書き込み先は `TODO(StepN)` というコメントで示されています
- 詰まったら、各ステップに記載されたjsprimerの該当章を読んでから再挑戦してください
- `02-nodecli` と `03-todoapp` には**ユニットテストが付属**しており、`npm test` で自動採点できます

## 🛠 事前準備

- **Node.js**（v20以上推奨）: [公式サイト](https://nodejs.org/ja/)からインストール
- **ローカルサーバー**: ブラウザ課題（01, 03）はHTMLファイルの直接オープン（`file://`）では動作しない場合があるため、ローカルサーバー経由で開きます

```bash
# いずれかの方法でローカルサーバーを起動（ポート3000で開く例）
npx serve .                  # Node.js製のシンプルなサーバー
python3 -m http.server 3000  # Pythonが入っている場合
```

詳しくは jsprimer の「[アプリケーション開発の準備](https://jsprimer.net/use-case/setup-local-env/)」を参照してください。

## 🚀 実施方法

1. このリポジトリをフォーク
2. 各課題ディレクトリの `README.md` を読み、Step1から順に実装
3. 各ステップの「動作確認」を実施してから次のステップへ進む
4. 完了後、フォークしたリポジトリにプッシュして提出

## ⏱️ 目安時間

- `01-ajaxapp`: 1〜2時間
- `02-nodecli`: 1.5〜2.5時間
- `03-todoapp`: 3〜5時間

---

本課題は [JavaScript Primer](https://jsprimer.net/)（文章: © azu, Suguru Inatomi / [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)、ソースコード: [MITライセンス](https://github.com/asciidwango/js-primer/blob/master/LICENSE)）を元に作成しています。
