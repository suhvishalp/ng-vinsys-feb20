import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MovieGuard implements CanActivate {
 
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
   
      return new Promise((resolve, reject)=>{
        if(this.userService.isLoggedIn())
            resolve(true)
      else {
        this.router.navigate(['/login'])
          reject(false)
      }
      })


  }

  constructor(private userService:UserService, private router:Router) { }
}
