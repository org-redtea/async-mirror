(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.AsyncMirror = {}));
}(this, function (exports) { 'use strict';

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
      value: value,
      reason: undefined
    };
  }
  function reject(reason) {
    return {
      isPending: false,
      isFulfilled: false,
      isRejected: true,
      value: undefined,
      reason: reason
    };
  }

  exports.pending = pending;
  exports.reject = reject;
  exports.resolve = resolve;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.js.map
