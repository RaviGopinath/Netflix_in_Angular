import { Routes } from '@angular/router';

export const PUBLIC_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path:"login",
        loadChildren:()=>
         import("../../public/login/login.module")
         .then((m)=>m.LoginModule)
      }
]    