// 課題02: Markdown→HTML変換モジュール
// このモジュールにmarkedを使った変換処理を隠蔽することで、
// main.js（CLI部分）から独立してユニットテストできるようにする。

// TODO(Step4): marked パッケージから marked をインポートする

/**
 * Markdown文字列をHTML文字列に変換する
 * @param {string} markdown 変換元のMarkdown文字列
 * @param {{ gfm: boolean }} cliOptions 変換オプション
 * @returns {string} 変換後のHTML文字列
 *
 * TODO(Step4): marked.parse(markdown, { gfm: cliOptions.gfm }) の結果を返す
 */
export function md2html(markdown, cliOptions) {
    // TODO(Step4): ここに実装
}
