import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthService implements CanActivate {

    constructor(private router: Router) {}

     canActivate() {
        if (localStorage.getItem('userObj') != null) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}