import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class QuizkiJsonInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const modReq: HttpRequest<any> = req;

    //set content type for specific URL's

    if(req.url == "http://localhost:8080/index.jsp"){
      const modReq = req.clone({setHeaders: {'Content-Type': 'text/HTML'}});
    } else {
      const modReq = req.clone({setHeaders: {'Content-Type': 'application/x-www-form-urlencoded'}});
    }

    //console.log(req.body);

    //intercept the login attempt and modify the body to indicate login status
    return next.handle(modReq)
      .pipe(
        map((event$: HttpEvent<any>) => {
          if(event$ instanceof HttpResponse && modReq.url == "http://localhost:8080/LoginServlet") {

            let loginBody: string = "";
            //if a response is recieved from index the user is assumed to be logged in
            if(event$.statusText == "OK" && event$.url == "http://localhost:8080/index.jsp"){
              console.log("User logged in: " + event$.statusText);
              loginBody = "Logged In";
            }
            //if a response is recieved from failedLogin the attemp failed
            if(event$.statusText == "OK" && event$.url == "http://localhost:8080/failedLogin.jsp"){
              console.log("Login Failed");
              loginBody = "Login Failed";
            }

            //replace the body of the response with a text message of login status
            let loginEvent$: HttpEvent<any> = event$.clone<any>({ body: loginBody.toString()});

            console.log("loginEvent.body = " + loginEvent$.body);

            return loginEvent$
          } else {
            //pass the event thru if not a login attempt
            return event$
          }
        }));

  }
}
