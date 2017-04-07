import "waypoints/lib/jquery.waypoints.js";
import "waypoints/lib/shortcuts/sticky.js";

import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: "ac-contacts",
    styleUrls: ["contacts.component.scss"],
    templateUrl: "contacts.component.html",
})
export default class ContactsComponent implements AfterViewInit {
    @ViewChild("navbar")
    public navbar: ElementRef;

    public ngAfterViewInit(): void {
        const sticky = new Waypoint.Sticky({
            element: this.navbar.nativeElement,
            stuckClass: "sticky",
            wrapper: false,
        });
    }
}
