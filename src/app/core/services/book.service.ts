import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponsePageServer } from 'src/app/shared/models/generic/response-page.model';
import { BookGetAll } from 'src/app/shared/models/book/book-getAll';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/models/book/book';
import { IResponseServer } from 'src/app/shared/models/generic/response.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class BookService {
    constructor(private httpClient: HttpClient) { }

    uri: string = `${environment.urlServie}book`;

    getAllBooks(): Observable<IResponsePageServer<BookGetAll[]>> {
        return this.httpClient.get<IResponsePageServer<BookGetAll[]>>(this.uri);
    }

    createBook(book: Book): Observable<IResponseServer<any>> {
        return this.httpClient.post<IResponseServer<any>>(this.uri, book);
    }
}