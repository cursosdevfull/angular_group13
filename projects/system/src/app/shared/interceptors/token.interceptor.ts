import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError, mergeMap, Observable, retry, throwError } from 'rxjs';

import { AuthApplication } from '../../core/application/auth.application';
import { StorageApplication } from '../../core/application/storage.application';
import { Tokens } from '../../core/domain/entities/tokens.entity';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private readonly storage: StorageApplication,
    private readonly injector: Injector
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloneRequest = req.clone({
      headers: req.headers.append(
        'Authorization',
        'Bearer ' + this.storage.getValue('accessToken')
      ),
    });

    return next.handle(cloneRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          return this.handleErrorServer(error, req, next);
        }

        return throwError(() => new Error(errorMessage));
      })
    );
  }

  handleErrorServer(
    error: HttpErrorResponse,
    req: HttpRequest<any>,
    next: HttpHandler
  ) {
    const authApplication = this.injector.get(AuthApplication);

    if (error.status === 401) {
      authApplication.logout();
    } else if (error.status === 409) {
      const refreshToken = this.storage.getValue('refreshToken');

      return authApplication.getNewAccessToken(refreshToken).pipe(
        retry(3),
        mergeMap((tokens: Tokens) => {
          this.storage.setValue('accessToken', tokens.accessToken);
          this.storage.setValue('refreshToken', tokens.refreshToken);

          const cloneRequest = req.clone({
            headers: req.headers.append(
              'Authorization',
              `Bearer ${tokens.accessToken}`
            ),
          });

          return next.handle(cloneRequest);
        })
      );
    }

    return throwError(() => new Error(error.message));
  }
}
