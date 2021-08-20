import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Author } from 'src/app/shared/models/author/author';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AuthorService {
    constructor(private httpClient: HttpClient) { }

    urlService: string = `${environment.urlServie}author`

    getAllCategories(): Observable<Author[]> {
        return this.httpClient.get<Author[]>(this.urlService);
    }

    createAuthor(author: Author) {
        return this.httpClient.post(this.urlService, author);
    }

}