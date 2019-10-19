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

export { pending, reject, resolve };
//# sourceMappingURL=index.esm.js.map
