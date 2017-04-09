import { Injectable } from "@angular/core";

@Injectable()
export default class AppConfig {
    public readonly CACHE_TIME_IN_HOURS: number;
    public readonly CACKLE_WIDGET_ID: number;
    public readonly PAGE_TITLES: {
        ABOUT: string,
        PRODUCTS: string,
        REVIEWS: string,
    };
    public readonly PHOTO_SERVICE: {
        ALBUM: string,
        BASE_URL: string,
        SORTING: string,
        USER: string,
    };
    public readonly SCROLL_TOP_BOUND: number;
    public readonly VK: {
        BASE_URL: string,
        COMMENTS_LIMIT: number,
        COMMENTS_MEDIA: string,
        MARKET_ID: number,
    };

    constructor() {
        this.CACHE_TIME_IN_HOURS = 24;
        this.CACKLE_WIDGET_ID = 52063;
        this.PAGE_TITLES = {
            ABOUT: "Обо мне | Anthony Cakes",
            PRODUCTS: "Вкусняшки | Anthony Cakes",
            REVIEWS: "Отзывы | Anthony Cakes",
        };
        this.PHOTO_SERVICE = {
            ALBUM: "Продукция",
            BASE_URL: "http://api-fotki.yandex.ru/api/users",
            SORTING: "manual",
            USER: "anthonycakes",
        };
        this.SCROLL_TOP_BOUND = 500;
        this.VK = {
            BASE_URL: "https://vk.com/market-",
            COMMENTS_LIMIT: 20,
            COMMENTS_MEDIA: "*",
            MARKET_ID: 114453626,
        };
    }
}
