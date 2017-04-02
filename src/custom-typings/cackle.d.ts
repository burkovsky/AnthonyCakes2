// Type definitions for Cackle Widgets
// Project: http://cackle.me/help/widget-api
// Definitions by: Anton Burkovskii <https://github.com/burkovsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ICackleWidget {
    widget: string;
    id: number;
    container?: string;
    countContainer?: string;
    channel?: string;
    chanParam?: string;
    chanWithoutParams?: boolean;
    url?: string;
    ratingOff?: boolean;
    product?: Object;
    lang?: string;
    msg?: Object;
    providers?: string;
    theme?: string;
    stream?: boolean;
    ssoAuth?: string;
    ssoProvider?: Object;
    ssoPrimary?: boolean;
    authPopup?: Function;
    sort?: string;
    size?: number;
    replies?: number;
    level?: number;
    badge?: string;
    badgeHide?: boolean;
    shareSocial?: Array<string>;
    timeFormat?: string;
    textHigh?: number;
    agreement?: string;
    guestFirst?: boolean;
    guestHideEmail?: boolean;
    callback?: {
        create?: Array<Function>;
        edit?: Array<Function>;
        status?: Array<Function>;
        vote?: Array<Function>;
        submit?: Array<Function>;
        reply?: Array<Function>;
        ready?: Array<Function>;
        loggedin?: Array<Function>;
        logout?: Array<Function>;
        subscribe?: Array<Function>;
        unsubscribe?: Array<Function>;
    };
}

interface IWindowCackleWidget extends Window {
    cackle_widget: Array<ICackleWidget>;
}

declare class Cackle {
    public static bootstrap(load: boolean): void;
}
