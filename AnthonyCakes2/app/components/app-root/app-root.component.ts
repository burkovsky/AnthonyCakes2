// jQuery
import 'jquery/dist/jquery.js';

// Tether
import 'tether/dist/css/tether.css';
import 'tether/dist/js/tether.js';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// Font Awesome
import 'font-awesome/css/font-awesome.css';

// Common styles
import '../../common/main.scss';

// Custom scripts
import '../../common/custom.js';

// Reactive-Extensions
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