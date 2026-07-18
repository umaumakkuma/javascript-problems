# Changelog

本プロジェクトの主要な変更を記録します。フォーマットは [Keep a Changelog](https://keepachangelog.com/ja/1.1.0/) に準拠しています。

## [Unreleased]

## [2026-07-19] — 初学者向け学習体験の改善

### Added
- **`basic/00-tutorial/problem0.js`** — 問題の形式・実行方法・✅/❌の見方に慣れるチュートリアル問題（回答済みで配布、check.jsの集計対象外）。「実行→回答を消して❌を見る→自分で書き直す」という体験を最初に提供する
- **`basic/03-dom-manipulation/` にブラウザ実行用HTMLを追加**（`problem1.html`〜`problem5.html` と目次の `index.html`）。DOM操作の結果を実際に画面で見ながら、Consoleで✅/❌の自動判定を受けられるようになった（問題4のみアラート表示の目視確認）
- **`docs/how-to-read-errors.md`** — エラーメッセージの読み方ガイド。見るべき2箇所（種類とメッセージ・行番号）、SyntaxError/ReferenceError/TypeErrorの違い、SyntaxErrorだけtry-catchで捕まえられない理由、原因の絞り込み手順を解説。README・チュートリアルから参照

### Fixed
- **03カテゴリのNode用モック分岐を撤去** — 回答の正誤と無関係に「✅ コードの記述は正しいようです」と表示し、さらに**分岐内に模範解答がそのまま含まれていた**（「解答をコミットしない」原則への違反）。Node実行時は「ブラウザで確認してください」の案内のみ表示するよう変更。回答欄は変更なし

### 検証記録
- 03カテゴリ: jsdom（DOM実装）で全5ページを検証。未回答で❌または目視案内、模範解答注入で✅（問題4はクリックでアラート発火、問題5はクリック2回の自動シミュレーションでdisplay切り替えを確認）。検証後テンプレートに復元
- problem0: 実行で✅表示、check.jsが00-tutorialを集計対象外とすること、`回答済み: 0/91` が維持されCIの健全性チェックが通ることを確認

## [2026-07-19] — Node.jsサポート下限を22に引き上げ

### Changed
- 必要環境を「Node.js v20以上」から「**v22以上**」に変更（Node 20は2026年4月にEOLを迎えたため）。CIの健全性チェックのマトリクスも [20, 22, 24] → [22, 24] に変更し、「宣言する範囲だけを検査する」状態に統一
- READMEとCIサマリーに採点環境の注記を追加: 採点はサポート下限のNode.js 22で実行されるため、より新しいバージョン限定の機能を回答に使うと「ローカルでは動くのにCIでは❌/💥」になることがある。ローカルもv22系を推奨

## [2026-07-18] — GitHub Actions CI導入

### Added
- **`.github/workflows/check.yml`** — pushとPRで自動実行される採点チェック
  - 学習者向け（フォークでも動作、要Actions有効化）: `basic/check.js` の集計表と `advanced/` の `npm test` pass件数をジョブサマリーに表示。未回答は失敗扱いにせず、回答のクラッシュのみ失敗にする
  - 保守向け（本体リポジトリ専用）: Node 20/22/24 のマトリクスで「未回答テンプレートがクラッシュしない」「解答がコミットされていない」を検証。「Node 20以上で動作する」保証はこのマトリクスが担う
- トップレベル `README.md` にフォーク先でのActions有効化と自動採点の案内を追記

## [2026-07-18] — カテゴリ追加・一括チェック・ドキュメント整備

### Added
- **基本文法編に3カテゴリ × 5問 = 15問を追加**（計90問 → 105問）。jsprimer第一部の未カバー章を解消
  - `19-prototype` — プロトタイプオブジェクト（プロトタイプチェーン、`Object.hasOwn`、`Object.create`、クラスメソッドの共有）
  - `20-wrapper-objects` — ラッパーオブジェクト（自動ボックス化、`new String`の罠、`new Boolean(false)`がtruthyになる理由）
  - `21-es-modules` — ECMAScriptモジュール（named/default/エイリアス/名前空間、モジュールの単一評価）。`.mjs` 形式で、提供モジュールは `lib/` に配置
- **`basic/check.js`** — 全問題を一括実行して回答状況を集計するスクリプト（`node check.js`、カテゴリ番号指定可)。✅回答済み / ❌未回答 / 💥クラッシュ / 📝手動確認 を判定し、クラッシュ時はexit code 1
- **トップレベル `README.md`** — 問題集の目的・構成・学習パス・進め方を記載
- `CLAUDE.md` / `CHANGELOG.md` を新設（AI開発向けのリポジトリ規約と変更履歴）

### Fixed
- CLAUDE.md / README類を新構成（105問・21カテゴリ・check.js）に合わせて更新

### 検証記録
- 追加15問: 未回答状態で全問クラッシュなし・❌案内表示を確認。模範解答注入で15/15期待値どおり動作
- check.js: 未回答0/91・📝14問の集計、正答✅・構文エラー💥の判定、カテゴリフィルタ、exit codeを確認。ブラウザ向け問題（03など）のNodeモック実行が回答と無関係に✅を出す既存挙動を発見し、📝（手動確認）に分類するよう対応
- 01-ajaxapp: GitHub APIへの実疎通を確認（正常系: `js-primer-example` の情報取得、異常系: 404エラーの捕捉）。前回レビューからの積み残しを解消

## [2026-07-18] — JavaScript Primer準拠のコンテンツ拡充（PR #1）

### Added
- **基本文法編（`basic/07`〜`basic/18`）**: [JavaScript Primer](https://jsprimer.net/) 第一部準拠の穴埋め問題を12カテゴリ × 5問 = 60問追加（計30問 → 90問）
  - 07-data-types-literals / 08-operators-coercion / 09-objects / 10-arrays / 11-strings / 12-function-scope / 13-function-this / 14-classes / 15-promise-async / 16-map-set / 17-json-date-math / 18-iterator-generator
  - 各問題にjsprimer該当章への【参考】リンクを記載
- **応用編（`advanced/`）**: jsprimer第二部準拠の実技課題3本を新設
  - `01-ajaxapp` — GitHubユーザー情報アプリ（Fetch API / Promise / async-await）。ブラウザで手動確認
  - `02-nodecli` — Markdown→HTML変換CLI（parseArgs / fs/promises / marked）。`npm test` 2件で自動採点
  - `03-todoapp` — Todoアプリ（ESモジュール分割 / EventEmitter / Model-View分離）。`npm test` 12件で自動採点
  - 実装箇所は `TODO(StepN)` コメントで明示し、各ステップをjsprimerの章に対応付け
- `basic/README.md` にカテゴリ一覧・jsprimerへの参照・ライセンス表記を追記、`advanced/README.md` を新規作成

### Fixed
- `advanced/README.md` のMITライセンスリンク切れを修正（`asciidwango/js-primer` の `LICENSE` は存在しないため、移管先 `js-primer/js-primer` の `LICENSE-MIT` へ差し替え）

### 検証記録
- 基本文法編60問: 未回答状態で全問クラッシュなし。模範解答注入で期待値どおりの動作を確認
- 02-nodecli: 未回答で2件fail → 模範解答で2件pass。`--gfm` フラグの出力差・異常系の終了コード1を確認
- 03-todoapp: 未回答で10件fail → 模範解答で12件全pass
- 01-ajaxapp: コードレビューのみ（GitHub APIへの実通信は未確認。初回利用時にブラウザでの動作確認を推奨）

## [2025-07-14] — 初版

### Added
- 入門編（`basic/01`〜`basic/06`）: 6カテゴリ × 5問 = 30問
  - 01-basic-syntax / 02-functions / 03-dom-manipulation / 04-async-programming / 05-es6-modern / 06-error-handling-debug
- フォークして回答を記述・プッシュして提出する実技テスト形式の `basic/README.md`
