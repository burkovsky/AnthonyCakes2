import { Component } from '@angular/core';

import '../../assets/main.scss';

@Component({
    selector: 'app-root',
    template: require('./approot.component.html'),
    styles: [require('./approot.component.scss')]
})
export class AppRootComponent { name = 'Angular'; }