import { Component } from '@angular/core';

// Waypoints
import 'waypoints/lib/jquery.waypoints.js';
import 'waypoints/lib/shortcuts/sticky.js';

@Component({
    selector: 'contacts',
    template: require('./contacts.component.html'),
    styles: [String(require('./contacts.component.scss'))]
})
export class ContactsComponent {}