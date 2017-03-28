import "waypoints/lib/jquery.waypoints.js";
import "waypoints/lib/shortcuts/sticky.js";

import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: "ac-contacts",
    styles: [String(require("./contacts.component.scss"))],
    template: require("./contacts.component.html"),
})
export default class ContactsComponent implements AfterViewInit {
    @ViewChild("navbar") navbar: ElementRef;

    ngAfterViewInit(): void {
        const sticky = new Waypoint.Sticky({
            element: this.navbar.nativeElement,
            stuckClass: "sticky",
            wrapper: false,
        });
    }
}
