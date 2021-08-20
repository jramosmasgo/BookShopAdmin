export interface IResponseServer<T> {
    data: T;
    errors?: boolean;
    message?: string;
    succeeded: boolean;
}