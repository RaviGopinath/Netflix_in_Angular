//rolesaccess.service.ts
import { Injectable ,OnInit} from "@angular/core";
import {  CanActivate, UrlTree } from "@angular/router";

@Injectable()
export class RolesAccessService implements CanActivate {

    canActivate(): boolean| UrlTree {
       JSON.parse(localStorage.getItem('userObj') || '{}');
        return true;
    }
}
