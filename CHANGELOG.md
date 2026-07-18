# Changelog

本プロジェクトの主要な変更を記録します。フォーマットは [Keep a Changelog](https://keepachangelog.com/ja/1.1.0/) に準拠しています。

## [Unreleased]

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
