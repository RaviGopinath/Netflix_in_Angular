import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SecuredLayoutComponent } from "./secured.layout.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

const routes:Routes = [
    {
        path : "",
        component : SecuredLayoutComponent
    }
];


@NgModule({
    declarations : [
        SecuredLayoutComponent
    ],
    imports : [
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forChild(routes)
    ]
})
export class SecuredLayoutModule {}