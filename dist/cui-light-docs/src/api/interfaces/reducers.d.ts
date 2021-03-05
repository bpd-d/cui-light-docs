export interface CuiReducerVoidAction {
    type: string;
}
export interface CuiReducerActionBase<T> {
    type: T;
}
export interface CuiReducerAction<T, V> extends CuiReducerActionBase<V> {
    payload: T;
}
