import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserLoginService} from "./user-login.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private users:UserLoginService,private route:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
    //this.route.navigate(["/"]);
    return this.users.userLogin?true:false;
  }
}
