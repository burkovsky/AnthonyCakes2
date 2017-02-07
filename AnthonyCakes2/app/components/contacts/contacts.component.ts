// Waypoints
import 'waypoints/lib/jquery.waypoints.js';
import 'waypoints/lib/shortcuts/sticky.js';

import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var Waypoint: any;

@Component({
    selector: 'contacts',
    template: require('./contacts.component.html'),
    styles: [String(require('./contacts.component.scss'))]
})
export class ContactsComponent implements AfterViewInit {
    @ViewChild('navbar') navbar: ElementRef;

    ngAfterViewInit(): void {
        const sticky = new Waypoint.Sticky({
            element: this.navbar.nativeElement,
            stuckClass: 'sticky',
            wrapper: false
        });
    }
}