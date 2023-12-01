import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublicLayoutComponent } from "./public.layout.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

const routes:Routes = [
    {
        path : "",
        component : PublicLayoutComponent
    }
];


@NgModule({
    declarations : [
        PublicLayoutComponent
    ],
    imports : [
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forChild(routes)
    ]
})
export class PublicLayoutModule {}