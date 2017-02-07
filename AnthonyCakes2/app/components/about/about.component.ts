import { Component } from '@angular/core';

@Component({
    selector: 'about',
    template: require('./about.component.html'),
    styles: [String(require('./about.component.scss'))]
})
export class AboutComponent { }