import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import CackleComponent from "./cackle-comments/cackle-comments.component";
import AboutComponent from "./reviews.component";
import { routes } from "./reviews.routes";
import VKCommentsComponent from "./vk-comments/vk-comments.component";

@NgModule({
    declarations: [
        CackleComponent,
        VKCommentsComponent,
        AboutComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
})
export default class ReviewsModule {}
