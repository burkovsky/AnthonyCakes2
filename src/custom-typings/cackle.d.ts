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
    product?: object;
    lang?: string;
    msg?: object;
    providers?: string;
    theme?: string;
    stream?: boolean;
    ssoAuth?: string;
    ssoProvider?: object;
    ssoPrimary?: boolean;
    authPopup?: Function;
    sort?: string;
    size?: number;
    replies?: number;
    level?: number;
    badge?: string;
    badgeHide?: boolean;
    shareSocial?: string[];
    timeFormat?: string;
    textHigh?: number;
    agreement?: string;
    guestFirst?: boolean;
    guestHideEmail?: boolean;
    callback?: {
        create?: Function[];
        edit?: Function[];
        status?: Function[];
        vote?: Function[];
        submit?: Function[];
        reply?: Function[];
        ready?: Function[];
        loggedin?: Function[];
        logout?: Function[];
        subscribe?: Function[];
        unsubscribe?: Function[];
    };
}

interface IWindowCackleWidget extends Window {
    cackle_widget: ICackleWidget[];
}

declare class Cackle {
    public static bootstrap(load: boolean): void;
}
