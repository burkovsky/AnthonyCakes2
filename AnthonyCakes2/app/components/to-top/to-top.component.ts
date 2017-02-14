import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'to-top',
    template: require('./to-top.component.html'),
    styles: [String(require('./to-top.component.scss'))]
})
export class ToTopComponent {
    active = false;

    constructor(@Inject(DOCUMENT) private document: Document) {}

    private scrollLimit = 200;

    @HostListener("window:scroll", [])
    onWindowScroll() {
        this.active = this.document.body.scrollTop > this.scrollLimit;
    }

    toTop() {
        window.scrollTo(0, 0);

        return false;
    }
}