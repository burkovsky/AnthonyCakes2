// Type definitions for Waypoints Sticky Elements
// Project: http://imakewebthings.com/waypoints/shortcuts/sticky-elements/
// Definitions by: Anton Burkovsky <https://github.com/burkovsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface WaypointStickyOptions {
    element: HTMLElement;
    wrapper?: string | boolean;
    stuckClass?: string;
    direction?: string;
}

declare module Waypoint {
    class Sticky {
        constructor(options: WaypointStickyOptions);
        public element: HTMLElement;
        public options: WaypointStickyOptions;
        public destroy(): void;
    }
}