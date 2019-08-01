(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.promiseState = {}));
}(this, function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function promiseState(defaultResult) {
    return new PromiseState(defaultResult);
  }

  var PromiseState =
  /*#__PURE__*/
  function () {
    function PromiseState(defaultResult) {
      _classCallCheck(this, PromiseState);

      this._result = defaultResult;
      this._error = undefined;
      this._pending = false;
      this._resolved = false;
      this._rejected = false;
      this.pending = this.pending.bind(this);
      this.resolved = this.resolved.bind(this);
      this.rejected = this.rejected.bind(this);
      this.result = this.result.bind(this);
      this.error = this.error.bind(this);
      this.replaceResult = this.replaceResult.bind(this);
      this.replaceError = this.replaceError.bind(this);
    }

    _createClass(PromiseState, [{
      key: "pending",
      value: function pending(trueOrFalse) {
        if (typeof trueOrFalse !== 'boolean') {
          return this._pending;
        }

        var copy = makeCopy(this);
        copy._pending = !!trueOrFalse;
        copy._resolved = false;
        copy._rejected = false;
        copy._error = undefined;
        return copy;
      }
    }, {
      key: "resolved",
      value: function resolved(trueOrFalse, result) {
        if (typeof trueOrFalse !== 'boolean') {
          return this._resolved;
        }

        var copy = makeCopy(this);
        copy._resolved = !!trueOrFalse;
        copy._pending = false;
        copy._rejected = false;
        copy._error = undefined;
        copy._result = result;
        return copy;
      }
    }, {
      key: "rejected",
      value: function rejected(trueOrFalse, error) {
        if (typeof trueOrFalse !== 'boolean') {
          return this._rejected;
        }

        var copy = makeCopy(this);
        copy._rejected = !!trueOrFalse;
        copy._error = trueOrFalse ? error : undefined;
        copy._pending = false;
        copy._resolved = false;
        return copy;
      }
    }, {
      key: "result",
      value: function result() {
        return this._result;
      }
    }, {
      key: "error",
      value: function error() {
        return this._error;
      }
    }, {
      key: "replaceResult",
      value: function replaceResult(result) {
        var copy = makeCopy(this);
        copy._result = result;
        return copy;
      }
    }, {
      key: "replaceError",
      value: function replaceError(error) {
        var copy = makeCopy(this);
        copy._error = error;
        return copy;
      }
    }]);

    return PromiseState;
  }();

  function makeCopy(target) {
    var copy = new PromiseState();
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
