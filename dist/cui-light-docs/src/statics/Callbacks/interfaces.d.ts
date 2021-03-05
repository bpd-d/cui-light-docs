interface ICuiDocsCallbacks<T> {
    [id: string]: (...t: T[]) => void;
}
interface ICuiCallbackGroup<T> {
    prefix: string;
    callbacks: ICuiDocsCallbacks<T>;
}
interface ICuiCallbackHandlerInit<T> {
    [prefix: string]: ICuiDocsCallbacks<T>;
}
