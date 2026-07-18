// 課題02: Markdown変換CLIツールのエントリーポイント
// 各TODOコメントの箇所を実装してください。詳細は README.md を参照。

// TODO(Step2): node:util から parseArgs を使うためのインポートを書く
// TODO(Step3): node:fs/promises をインポートする
// TODO(Step4): ./md2html.js から md2html関数 をインポートする

// TODO(Step2): コマンドライン引数をパースする
// - parseArgs({ allowPositionals: true, options: { ... } }) を呼び出す
// - options には gfm フラグを type: "boolean", default: false で定義する
// - 戻り値の values（フラグ）と positionals（ファイルパス）を受け取る

// TODO(Step3): positionals[0] のファイルパスを { encoding: "utf8" } で読み込む
// TODO(Step4): 読み込んだ内容を md2html(file, { gfm: values.gfm }) で変換し、
//              console.log で出力する
// TODO(Step3): 読み込みに失敗したら console.error(err.message) と process.exit(1)
