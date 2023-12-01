import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicLayoutComponent } from './views/layouts/public.layout/public.layout.component';
import { SecuredLayoutComponent } from './views/layouts/secured.layout/secured.layout.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RolesAccessService } from './services/rolesaccess.service';
import { AuthService } from './services/auth.service';
import { CommonDataService } from './services/commonData.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PublicLayoutComponent,
    SecuredLayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [
    AuthService,
    RolesAccessService,
    CommonDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
