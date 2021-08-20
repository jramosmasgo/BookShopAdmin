import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../../shared/models/category/category';
import { IResponseServer } from 'src/app/shared/models/generic/response.model';

@Injectable({
    providedIn: 'root'
})

export class CategoryService {
    constructor(private httpClient: HttpClient) { }

    urlService: string = `${environment.urlServie}category`

    getAllCategories(): Observable<Category[]> {
        return this.httpClient.get<Category[]>(this.urlService);
    }

    createCategory(category: Category): Observable<IResponseServer<Category>> {
        return this.httpClient.post<IResponseServer<Category>>(this.urlService, category)
    }

    updateCategory(category: Category): Observable<IResponseServer<Category>> {
        const uri = `${this.urlService}/${category.id}`;
        return this.httpClient.put<IResponseServer<Category>>(uri, category);
    }

    deleteCategory(category: Category): Observable<IResponseServer<Category>> {
        const uri = `${this.urlService}/${category.id}`;
        return this.httpClient.delete<IResponseServer<Category>>(uri, { body: category });
    }
}