$(document).ready(function() {
    const navbar = $('.navbar-contacts');
    if (navbar) {
        const sticky = new Waypoint.Sticky({
            element: navbar[0],
            stuckClass: 'sticky',
            wrapper: false
        });
    }
});