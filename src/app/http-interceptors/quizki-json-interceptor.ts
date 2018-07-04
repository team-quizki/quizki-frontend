import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class QuizkiJsonInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const modReq: HttpRequest<any> = req;

    //handle Request here ie. replace Headers

    if(req.url == "http://localhost:8080/index.jsp"){
      const modReq = req.clone({setHeaders: {'Content-Type': 'text/HTML'}});
    }

    //intercept the Response
    return next.handle(modReq)
      .pipe(
        map((event$: HttpEvent<any>) => {
            console.log("in Response intercept: ");
            //Enter a response handler here...
            //let loginEvent$: HttpEvent<any> = event$.clone<any>({ body: replacementBody});
             return event$;
        }));

  }
}
