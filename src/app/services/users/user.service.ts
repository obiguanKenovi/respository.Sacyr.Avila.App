import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRegisterForm } from '../../interfaces/register-form.interface';
import { environment } from '../../../environments/environment';
import { ILoginForm } from 'src/app/interfaces/login-form.inferface';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const base_url=environment.base_url;
const base_api=environment.api_user;
const base_register=environment.api_register;
const base_auth=environment.api_auth;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http:HttpClient
  ) {

    console.log('creando un ususario...');
   }

  refreshToken():Observable<boolean>
  {
     const token= localStorage.getItem('token') || '';
     return this._http.get(`${base_url}${base_api}/normbreEnpoind`,{headers: {'token':token}})
     .pipe(
       tap((resp:any)=>{
        localStorage.setItem('token', resp.token );
       }
       ),
       map(resp=>true),
       catchError( error=> of(false) )
       )
     
  }

   createUser(userForm:IRegisterForm){
    console.log('Url utilizada');
    console.log(`${base_url} ${ base_api} ${ base_register}`);

    return  this._http.post(`${base_url}${ base_api}${ base_register}`,userForm);

   }

   loginUser(loginUser:ILoginForm){
     console.log('Datos que se envia a autenticar');
     //console.log(loginUser);

    return  this._http.post(`${base_url}${ base_api}${ base_auth}`,loginUser)
    .pipe(
      tap( 
        (resp:any)=>{   
        const { jwtToken } = resp.data;
        localStorage.setItem('token', jwtToken )
      })
    );
   }
}
