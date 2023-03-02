import { InjectionToken } from '@angular/core';
import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
  } from '@angular/common/http';
import { ForkableHttpClient, httpClient } from 'ngx-forkable-http-client';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'any' })
export class NoopInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req);
  }
}

export const MY_REST_API_HTTP_CLIENT =
  new InjectionToken<ForkableHttpClient>('MY_REST_API_HTTP_CLIENT', {
    providedIn: 'root',
    factory: httpClient().with(NoopInterceptor)
  });
