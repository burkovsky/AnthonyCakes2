import 'bootstrap/scss/bootstrap.scss';
import '../../common/main.scss';

import '../../rxjs-operators';

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: require('./app-root.component.html'),
    styles: [require('./app-root.component.scss')]
})
export class AppRootComponent {
    currentYear = new Date().getFullYear();
}