// 課題01: Ajax通信 — GitHubユーザー情報アプリ
// 各TODOコメントの箇所を実装してください。詳細は README.md を参照。

console.log("index.js: loaded");

/**
 * Step4: エントリーポイントとなるAsync Function
 * ボタンのclickで呼び出される（index.htmlのonclick属性を参照）
 *
 * TODO(Step4):
 * 1. async functionにする
 * 2. getUserId()でユーザーIDを取得する
 * 3. fetchUserInfo(userId)をawaitしてユーザー情報を取得する
 * 4. createView(userInfo)でHTML文字列を組み立てる
 * 5. displayView(view)で表示する
 * 6. 全体をtry...catchで囲み、エラー時は
 *    console.error(`エラーが発生しました (${error})`) を出力する
 */
function main() {
    // TODO(Step4): ここに実装
}

/**
 * Step2: GitHubのAPIからユーザー情報を取得する
 * @param {string} userId GitHubのユーザーID
 * @returns {Promise} ユーザー情報のJSONオブジェクトで解決されるPromise
 *
 * TODO(Step2):
 * 1. `https://api.github.com/users/${encodeURIComponent(userId)}` へfetchする
 * 2. レスポンスの response.ok が false なら
 *    Promise.reject(new Error(`${response.status}: ${response.statusText}`)) を返す
 * 3. 成功時は response.json() を返す
 * 4. fetchの返り値のPromiseを必ずreturnすること
 */
function fetchUserInfo(userId) {
    // TODO(Step2): ここに実装
}

/**
 * Step3: ユーザー情報からHTML文字列を組み立てる
 * @param {Object} userInfo GitHub APIから取得したユーザー情報
 * @returns {string} 表示用のHTML文字列
 *
 * TODO(Step3):
 * 実装済みのescapeHTMLタグ関数を使って、次の形のHTML文字列を返す
 * （タグ関数なので escapeHTML`...` の形で使う）:
 *
 *   <h4>名前 (@ログインID)</h4>
 *   <img src="アバターURL" alt="ログインID" height="100">
 *   <dl>
 *       <dt>Location</dt>
 *       <dd>所在地</dd>
 *       <dt>Repositories</dt>
 *       <dd>公開リポジトリ数</dd>
 *   </dl>
 *
 * 使うプロパティ: userInfo.name / userInfo.login / userInfo.avatar_url /
 *                 userInfo.location / userInfo.public_repos
 */
function createView(userInfo) {
    // TODO(Step3): ここに実装
}

/**
 * Step3: HTML文字列をページに表示する
 * @param {string} view 表示するHTML文字列
 *
 * TODO(Step3):
 * id="result" の要素を取得し、innerHTMLにviewを代入する
 */
function displayView(view) {
    // TODO(Step3): ここに実装
}

/**
 * Step4: 入力欄からユーザーIDを取得する
 * @returns {string} 入力されたユーザーID
 *
 * TODO(Step4):
 * id="userId" のinput要素を取得し、そのvalueを返す
 */
function getUserId() {
    // TODO(Step4): ここに実装
}

// ========== 以下は実装済み（変更不要） ==========

/**
 * 文字列中のHTML特殊文字をエスケープする
 */
function escapeSpecialChars(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/**
 * 文字列の値だけをエスケープするタグ関数
 * escapeHTML`<p>${userInput}</p>` のようにテンプレートリテラルに付けて使う
 */
function escapeHTML(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i - 1];
        if (typeof value === "string") {
            return result + escapeSpecialChars(value) + str;
        } else {
            return result + String(value) + str;
        }
    });
}
