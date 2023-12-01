import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PUBLIC_ROUTES } from './views/layouts/public.layout/public.routing';
import { PublicLayoutComponent } from './views/layouts/public.layout/public.layout.component';
import { SECURE_ROUTES } from './views/layouts/secured.layout/secured.routing';
import { SecuredLayoutComponent } from './views/layouts/secured.layout/secured.layout.component';
import { AuthService } from './services/auth.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "",
    component: PublicLayoutComponent,
    data: { title: "Public Views", requiresLogin: false },
    children: PUBLIC_ROUTES
  },
  {
    path: "",
    component:SecuredLayoutComponent,
    data:{title:"Secured Views",requiresLogin:true},
    canActivate:[AuthService],
    children:SECURE_ROUTES
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
