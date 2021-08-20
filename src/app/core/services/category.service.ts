import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../../shared/models/category/category';
import { Result } from 'src/app/shared/models/generic/result';

@Injectable({
    providedIn: 'root'
})

export class CategoryService {
    constructor(private httpClient: HttpClient) { }

    urlService: string = `${environment.urlServie}category`

    getAllCategories(): Observable<Category[]> {
        return this.httpClient.get<Category[]>(this.urlService);
    }

    createCategory(category: Category): Observable<Result<Category>> {
        return this.httpClient.post<Result<Category>>(this.urlService, category)
    }
}