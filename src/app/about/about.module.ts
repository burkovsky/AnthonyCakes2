import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import AboutComponent from "./about.component";
import { routes } from "./about.routes";

/*
Routed feature modules are domain feature modules whose top components are the targets of router navigation routes.
All lazy-loaded modules are routed feature modules by definition.
Routed feature modules shouldn't export anything.
A lazy-loaded routed feature module should not be imported by any module.
Routed Feature Modules rarely have providers.
Don't provide application-wide services in a routed feature module or in a module that the routed module imports.
Do not use export default with routed feature modules.
*/
@NgModule({
    declarations: [AboutComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
})
export class AboutModule {}
