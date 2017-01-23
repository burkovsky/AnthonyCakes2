import { Component } from '@angular/core';

import '../../assets/main.scss';

@Component({
    selector: 'app-root',
    template: require('./app-root.component.html'),
    styles: [require('./app-root.component.scss')]
})
export class AppRootComponent { name = 'Angular'; }