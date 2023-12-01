import { Routes } from '@angular/router';
import { RolesAccessService } from 'src/app/services/rolesaccess.service';
export const SECURE_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path:"home",
        loadChildren:()=>
        import("../../secured/home/home.module")
        .then((m)=>m.HomeModule),
        canActivate:[RolesAccessService]
    }
]    