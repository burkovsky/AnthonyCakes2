import { Component, OnInit } from '@angular/core';

import { LazyLoadService } from '../../services/lazy-load.service';

@Component({
    selector: 'about',
    template: require('./about.component.html'),
    styles: [String(require('./about.component.scss'))]
})
export class AboutComponent implements OnInit {
    constructor(private lazyLoadService: LazyLoadService) {}

    ngOnInit(): void {
        this.lazyLoadService.init();
    }
}