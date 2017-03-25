// Type definitions for Waypoints Sticky Elements
// Project: http://imakewebthings.com/waypoints/shortcuts/sticky-elements/
// Definitions by: Anton Burkovsky <https://github.com/burkovsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface IWaypointStickyOptions {
    element: HTMLElement;
    wrapper?: string | boolean;
    stuckClass?: string;
    direction?: string;
}

declare namespace Waypoint {
    class Sticky {
        public element: HTMLElement;
        public options: IWaypointStickyOptions;

        constructor(options: IWaypointStickyOptions);

        public destroy(): void;
    }
}
