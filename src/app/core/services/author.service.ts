import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AuthorGetAll } from 'src/app/shared/models/author/author-getAll';
import { environment } from 'src/environments/environment';
import { IResponsePageServer } from 'src/app/shared/models/generic/response-page.model';
import { AuthorPost } from 'src/app/shared/models/author/author-post';
import { IResponseServer } from 'src/app/shared/models/generic/response.model';
import { AuthorGetById } from 'src/app/shared/models/author/author-getById';

@Injectable({
    providedIn: 'root'
})

export class AuthorService {
    constructor(private httpClient: HttpClient) { }

    urlService: string = `${environment.urlServie}author`

    getAllAuthors(pageNumber?: number, pageSize?: number, filterText?: string): Observable<IResponsePageServer<AuthorGetAll[]>> {
        const paramsRequest = new HttpParams()
            .set('pageNumber', pageNumber ? pageNumber.toString() : '1')
            .set('pageSize', pageSize ? pageSize.toString() : '10')
            .set('filterText', filterText ? filterText : '');
        return this.httpClient.get<IResponsePageServer<AuthorGetAll[]>>(this.urlService, { params: paramsRequest });
    }

    getAuthorById(idAuthor: string): Observable<IResponseServer<AuthorGetById>> {
        const url = `${this.urlService}/${idAuthor}`;
        return this.httpClient.get<IResponseServer<AuthorGetById>>(url);
    }

    createAuthor(author: AuthorPost): Observable<IResponseServer<AuthorPost>> {
        return this.httpClient.post<IResponseServer<AuthorPost>>(this.urlService, author);
    }

    updateAuthor(author: AuthorGetById): Observable<IResponseServer<AuthorPost>> {
        const uri = `${this.urlService}/${author.id}`;
        return this.httpClient.put<IResponseServer<AuthorPost>>(uri, author);
    }
}