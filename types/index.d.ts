export interface Pending {
    isPending: true;
    isFulfilled: false;
    isRejected: false;
    reason: void;
    value: void;
}

export interface Fulfilled<V = any> {
    isPending: false;
    isFulfilled: true;
    isRejected: false;
    reason: void;
    value: V;
}

export interface Rejected<R = any> {
    isPending: false;
    isFulfilled: false;
    isRejected: true;
    reason: R;
    value: void;
}

export type AsyncState<V = any, R = any> = Pending | Fulfilled<V> | Rejected<R>;

export function resolve<T>(value: T): Fulfilled<T>;

export function reject<T>(reason: T): Rejected<T>;

export function pending(): Pending;

