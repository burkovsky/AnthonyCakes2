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
    appendScroll?: number | object;
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

declare class JQueryLazyPlugin {
    // get or set an configuration entry
    public config(entryName: string, value: IJQueryLazyPluginOptions): JQueryLazyPlugin;

    // add new items to current instance
    public addItems(items: HTMLElement[]): JQueryLazyPlugin;
    public addItems(items: object): JQueryLazyPlugin;
    public addItems(items: string): JQueryLazyPlugin;

    // get all unhandled items left of current instance
    public getItems(): object;

    // loads all elements in current viewport
    public update(useThrottle: boolean): JQueryLazyPlugin;

    // force loading specific items, ignoring the viewport
    public force(items: HTMLElement[]): JQueryLazyPlugin;
    public force(items: object): JQueryLazyPlugin;
    public force(items: string): JQueryLazyPlugin;

    // loads all remaining available elements from this instance
    public loadAll(): JQueryLazyPlugin;

    // unbinds all events and stop execution directly
    public destroy(): void;
}

interface IJQueryLazyPlugin extends JQuery {
    Lazy(options: IJQueryLazyPluginOptions): JQueryLazyPlugin;
}
