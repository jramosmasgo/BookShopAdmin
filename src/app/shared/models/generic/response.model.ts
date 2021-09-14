export interface IResponseServer<T> {
    data: T;
    errors?: string[];
    message?: string;
    succeeded: boolean;
}