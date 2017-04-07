import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import AboutComponent from "./about.component";
import { routes } from "./about.routes";

@NgModule({
    declarations: [AboutComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
})
export default class AboutModule {}
