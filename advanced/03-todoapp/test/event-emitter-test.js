// EventEmitterのユニットテスト（変更不要）
// 実行方法: npm test
import { test } from "node:test";
import * as assert from "node:assert";
import { EventEmitter } from "../src/EventEmitter.js";

test("addEventListenerで登録したリスナー関数がemitで呼び出される", () => {
    const emitter = new EventEmitter();
    let callCount = 0;
    emitter.addEventListener("test-event", () => {
        callCount = callCount + 1;
    });
    emitter.emit("test-event");
    assert.strictEqual(callCount, 1, "emitするとリスナー関数が1回呼ばれる");
    emitter.emit("test-event");
    assert.strictEqual(callCount, 2, "もう一度emitするとまた呼ばれる");
});

test("同じイベントに複数のリスナー関数を登録できる", () => {
    const emitter = new EventEmitter();
    const calls = [];
    emitter.addEventListener("test-event", () => calls.push("A"));
    emitter.addEventListener("test-event", () => calls.push("B"));
    emitter.emit("test-event");
    assert.deepStrictEqual(calls, ["A", "B"], "登録したすべてのリスナー関数が呼ばれる");
});

test("イベント名が異なるリスナー関数は呼び出されない", () => {
    const emitter = new EventEmitter();
    let called = false;
    emitter.addEventListener("event-a", () => {
        called = true;
    });
    emitter.emit("event-b");
    assert.strictEqual(called, false, "event-bのemitでevent-aのリスナーは呼ばれない");
});

test("removeEventListenerで解除したリスナー関数は呼び出されない", () => {
    const emitter = new EventEmitter();
    let callCount = 0;
    const listener = () => {
        callCount = callCount + 1;
    };
    emitter.addEventListener("test-event", listener);
    emitter.emit("test-event");
    emitter.removeEventListener("test-event", listener);
    emitter.emit("test-event");
    assert.strictEqual(callCount, 1, "解除後のemitではリスナーは呼ばれない");
});

test("リスナー未登録のイベントをemitしてもエラーにならない", () => {
    const emitter = new EventEmitter();
    assert.doesNotThrow(() => {
        emitter.emit("unknown-event");
    });
});
