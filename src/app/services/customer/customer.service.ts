import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http' ;
import { Global } from '../global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public _url:string;
  public _api:string;
  public _customer: Array<any>;

  constructor(
    private _http:HttpClient,
  ) {

    this._url=Global.url;
    this._api=Global.api;
   }

   getCustomerAll():Observable<any>
   {
     console.log('Se llamo al metodo get-all');
     console.log(this._url+this._api+'Customer/get-all');
     var dt = this._http.get(this._url+this._api+'Customer/get-all');
     console.log(dt);
      return dt;
   }
}
