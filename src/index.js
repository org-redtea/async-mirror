export function pending() {
  return {
    isPending: true,
    isFulfilled: false,
    isRejected: false,
    value: undefined,
    reason: undefined
  };
}

export function resolve(value) {
  return {
    isPending: false,
    isFulfilled: true,
    isRejected: false,
    value,
    reason: undefined
  };
}

export function reject(reason) {
  return {
    isPending: false,
    isFulfilled: false,
    isRejected: true,
    value: undefined,
    reason
  };
}
