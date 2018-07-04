import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuizkiJsonInterceptor } from './quizki-json-interceptor';

// Http interceptors in outside-in order

export const HttpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: QuizkiJsonInterceptor, multi: true}
];
