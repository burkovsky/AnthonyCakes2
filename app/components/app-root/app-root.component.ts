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
// Reactive-Extensions
import '../../rxjs-operators';

import { Component, OnInit } from '@angular/core';
import { MetaService } from 'ng2-meta';

@Component({
    selector: 'app-root',
    template: require('./app-root.component.html'),
    styles: [String(require('./app-root.component.scss'))]
})
export default class AppRootComponent implements OnInit {
    year: number;

    constructor(private metaService: MetaService) {}

    ngOnInit() {
        this.year = new Date().getFullYear();
    }
}