import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Login } from 'src/app/shared/models/account/login';
import { Observable } from 'rxjs';
import { IResponseServer } from 'src/app/shared/models/generic/response.model';
import { UserLogin } from 'src/app/shared/models/user/user-login.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private httpClient: HttpClient) { }

    // urlService: string = `${environment.urlServie}account`;
    urlService: string = 'http://elvirreytest.somee.com/api/Account';

    login(credentials: Login): Observable<IResponseServer<UserLogin>> {
        const uri = `${this.urlService}/authenticate`;
        return this.httpClient.post<IResponseServer<UserLogin>>(uri, credentials);
    }

}