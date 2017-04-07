import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

/*
A widget module makes components, directives, and pipes available to external modules.
A widget module should consist entirely of declarations, most of them exported.
Import widget modules in any module whose component templates need the widgets.
*/
@NgModule({
    imports: [CommonModule],
})
export default class SharedModule {}
