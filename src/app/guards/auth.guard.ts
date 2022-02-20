import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/users/user.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( 
    private userService:UserService,
    private _router:Router
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

      console.log(' Paso por el canActive del guard ');
      /*
     return this.userService.refreshToken()
      .pipe(
        tap( auntenticado=>{
          if( !auntenticado )
          {
            this._router.navigateByUrl('/auth/login');
          }        
        })
      )
      */
    return true;
  }
  
}
