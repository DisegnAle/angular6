import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import { Observable } from 'rxjs'
import { Injectable} from '@angular/core'
import { AuthService} from './auth.service'
import {map} from 'rxjs/operators'


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService){}
    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | Promise<boolean> | Observable{
        return this.authService.user.pipe(map(user =>{
            return !!user;
        }));
    }

}