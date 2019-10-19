'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function pending() {
  return {
    isPending: true,
    isFulfilled: false,
    isRejected: false,
    value: undefined,
    reason: undefined
  };
}

function resolve(value) {
  return {
    isPending: false,
    isFulfilled: true,
    isRejected: false,
    value,
    reason: undefined
  };
}

function reject(reason) {
  return {
    isPending: false,
    isFulfilled: false,
    isRejected: true,
    value: undefined,
    reason
  };
}

exports.pending = pending;
exports.reject = reject;
exports.resolve = resolve;
//# sourceMappingURL=index.cjs.js.map
