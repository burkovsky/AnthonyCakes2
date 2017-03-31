// Type definitions for VK
// Project: https://vk.com/dev
// Definitions by: Anton Burkovskii <https://github.com/burkovsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface IVKCommentsWidgetOptions {
    limit?: number;
    attach?: string;
}

interface IVKWidgets {
    Comments(id: string): void;
    Comments(id: string, options: IVKCommentsWidgetOptions): void;
}

declare class VK {
    static Widgets: IVKWidgets;
}