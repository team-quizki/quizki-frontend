import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginDialogHostService {

  routeOnCloseUrl:string;

  constructor() {
    this.setRouteOnCloseToUrl('/home-page');
  }
  
  public routeToUrl(): string {
    return this.routeOnCloseUrl;
  }

  public setRouteOnCloseToUrl(url: string){
    this.routeOnCloseUrl = url;
  }
}
