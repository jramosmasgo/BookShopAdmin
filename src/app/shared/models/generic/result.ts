export interface Result<T> {
    data: T;
    errors: boolean;
    message: string;
    succeeded: boolean;
}