import { IResponseServer } from "./response.model";

export interface IResponsePageServer<T> extends IResponseServer<T> {
    pageNumber: number;
    pageSize: number;
    total: number;
}