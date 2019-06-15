(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.promiseState = {}));
}(this, function (exports) { 'use strict';

  function promiseState(defaultResult) {
    return new PromiseState(defaultResult);
  }

  class PromiseState {
    constructor(defaultResult) {
      this._result = defaultResult;
      this._error = undefined;
      this._pending = false;
      this._resolved = false;
      this._rejected = false;
    }

    pending(trueOrFalse) {
      if (typeof trueOrFalse !== 'boolean') {
        return this._pending;
      }

      const copy = makeCopy(this);

      copy._pending = !!trueOrFalse;
      copy._resolved = false;
      copy._rejected = false;
      copy._error = undefined;

      return copy;
    }

    resolved(trueOrFalse, result) {
      if (typeof trueOrFalse !== 'boolean') {
        return this._resolved;
      }

      const copy = makeCopy(this);

      copy._resolved = !!trueOrFalse;
      copy._pending = false;
      copy._rejected = false;
      copy._error = undefined;
      copy._result = result;

      return copy;
    }

    rejected(trueOrFalse, error) {
      if (typeof trueOrFalse !== 'boolean') {
        return this._rejected;
      }

      const copy = makeCopy(this);

      copy._rejected = !!trueOrFalse;
      copy._error = trueOrFalse ? error : undefined;
      copy._pending = false;
      copy._resolved = false;

      return copy;
    }

    result() {
      return this._result;
    }

    error() {
      return this._error;
    }
  }

  function makeCopy(target) {
    const copy = new PromiseState();

    copy._result = target._result;
    copy._error = target._error;
    copy._pending = target._pending;
    copy._resolved = target._resolved;
    copy._rejected = target._rejected;

    return copy;
  }

  exports.promiseState = promiseState;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.js.map
