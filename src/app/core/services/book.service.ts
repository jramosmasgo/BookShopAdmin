import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponsePageServer } from 'src/app/shared/models/generic/response-page.model';
import { BookGetAll } from 'src/app/shared/models/book/book-getAll';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class BookService {
    constructor(private httpClient: HttpClient) { }

    uri: string = '';

    getAllBooks(): Observable<IResponsePageServer<BookGetAll[]>> {
        return this.httpClient.get<IResponsePageServer<BookGetAll[]>>(this.uri);
    }

}