export interface PromiseState {
    pending(): boolean;
    pending(trueOrFalse: boolean): PromiseState;
    pending(trueOrFalse?: boolean): PromiseState | boolean;

    resolved(): boolean;
    resolved(trueOrFalse: boolean, result?: any): PromiseState;
    resolved(trueOrFalse?: boolean, result?: any): PromiseState | boolean;

    rejected(): boolean;
    rejected(trueOrFalse: false): PromiseState;
    rejected(trueOrFalse: boolean, error?: any): PromiseState;
    rejected(trueOrFalse?: boolean, error?: any): PromiseState | boolean;

    result<T = any>(): T;
    error<T = any>(): T;

    replaceResult(result: any): PromiseState;
    replaceError(error: any): PromiseState;
}

export function promiseState(defaultResult: any): PromiseState;
