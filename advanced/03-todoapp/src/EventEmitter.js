// 【Step2】イベントの仕組み（ディスパッチャー）
// 「イベント名に対してリスナー関数を登録しておき、イベント発生時に
//   登録済みのリスナー関数をまとめて呼び出す」クラスを実装する。
// 参考: https://jsprimer.net/use-case/todoapp/event-model/

export class EventEmitter {
    // [イベント名, Set(リスナー関数)] を管理するMap
    #listeners = new Map();

    /**
     * 指定したイベントが実行されたときに呼び出されるリスナー関数を登録する
     * @param {string} type イベント名
     * @param {Function} listener イベントリスナー
     *
     * TODO(Step2):
     * 1. #listenersにtypeのSetがまだなければ、new Set()を作ってsetする
     * 2. typeに対応するSetを取り出し、listenerをaddする
     */
    addEventListener(type, listener) {
        // TODO(Step2): ここに実装
    }

    /**
     * 指定したイベントをディスパッチする
     * @param {string} type イベント名
     *
     * TODO(Step2):
     * 1. #listenersからtypeに対応するSetを取り出す
     * 2. Setが存在しなければ何もせずreturnする
     * 3. Setの中のすべてのリスナー関数を呼び出す（forEachを使う）
     */
    emit(type) {
        // TODO(Step2): ここに実装
    }

    /**
     * 指定したイベントのイベントリスナーを解除する
     * @param {string} type イベント名
     * @param {Function} listener イベントリスナー
     *
     * TODO(Step2):
     * 1. #listenersからtypeに対応するSetを取り出す
     * 2. Setが存在しなければ何もせずreturnする
     * 3. Setからlistenerと一致するリスナー関数をdeleteする
     */
    removeEventListener(type, listener) {
        // TODO(Step2): ここに実装
    }
}
