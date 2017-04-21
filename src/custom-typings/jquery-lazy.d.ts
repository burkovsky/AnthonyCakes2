// Type definitions for jQuery Lazy
// Project: http://jquery.eisbehr.de/lazy/
// Definitions by: Anton Burkovskii <https://github.com/burkovsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface IJQueryLazyPluginOptions {
    // general
    name?: string;
    chainable?: boolean;
    autoDestroy?: boolean;
    bind?: string;
    threshold?: number;
    visibleOnly?: boolean;
    appendScroll?: number | Object;
    scrollDirection?: string;
    imageBase?: string;
    defaultImage?: string;
    placeholder?: string;
    delay?: number;
    combined?: boolean;
    // attributes
    attribute?: string;
    srcsetAttribute?: string;
    sizesAttribute?: string;
    retinaAttribute?: string;
    loaderAttribute?: string;
    imageBaseAttribute?: string;
    removeAttribute?: boolean;
    handledName?: string;
    loadedName?: string;
    // effect
    effect?: string;
    effectTime?: number;
    // throttle
    enableThrottle?: boolean;
    throttle?: number;
    // callbacks
    beforeLoad?: Function;
    afterLoad?: Function;
    onError?: Function;
    onFinishedAll?: Function;
}

interface IJQueryLazyPlugin {
    // get or set an configuration entry
    config(entryName: string, value: IJQueryLazyPluginOptions): IJQueryLazyPlugin;

    // add new items to current instance
    addItems(items: HTMLElement[]): IJQueryLazyPlugin;
    addItems(items: Object): IJQueryLazyPlugin;
    addItems(items: string): IJQueryLazyPlugin;

    // get all unhandled items left of current instance
    getItems(): Object;

    // loads all elements in current viewport
    update(useThrottle: boolean): IJQueryLazyPlugin;

    // force loading specific items, ignoring the viewport
    force(items: HTMLElement[]): IJQueryLazyPlugin;
    force(items: Object): IJQueryLazyPlugin;
    force(items: string): IJQueryLazyPlugin;

    // loads all remaining available elements from this instance
    loadAll(): IJQueryLazyPlugin;

    // unbinds all events and stop execution directly
    destroy(): void;
}

interface IJQueryLazy extends JQuery {
    Lazy(options: IJQueryLazyPluginOptions): IJQueryLazyPlugin;
}
