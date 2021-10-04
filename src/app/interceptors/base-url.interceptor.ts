import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
    ): Observable<HttpEvent<any>> {
    const reqClone = req.clone({
    url: `${environment.baseUrl}/${req.url}`
    });
    return next.handle(reqClone);
}
}
