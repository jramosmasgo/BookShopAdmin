import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const cookieJwt: string = this.cookieService.get('token');
    console.log('pase por aqui');

    let cloneRequest = request;

    if (cookieJwt) {
      cloneRequest = request.clone({
        setHeaders: { authorization: `Bearer ${cookieJwt}` }
      })
    }

    return next.handle(cloneRequest);
  }
}
