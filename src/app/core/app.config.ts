import { Injectable } from "@angular/core";

@Injectable()
export default class AppConfig {
    public readonly API_URLS_PRODUCTS = "/api/products";
    public readonly CACHE_TIME_IN_HOURS = 24;
    public readonly CACKLE_WIDGET_ID = 52063;
    public readonly PAGE_TITLES_ABOUT = "Обо мне | Anthony Cakes";
    public readonly PAGE_TITLES_APPENDIX = " | Anthony Cakes";
    public readonly PAGE_TITLES_PRODUCTS = "Вкусняшки | Anthony Cakes";
    public readonly PAGE_TITLES_REVIEWS = "Отзывы | Anthony Cakes";
    public readonly SCROLL_TOP_BOUND = 500;
    public readonly VK_BASE_URL = "https://vk.com/market-";
    public readonly VK_COMMENTS_LIMIT = 20;
    public readonly VK_COMMENTS_MEDIA = "*";
    public readonly VK_MARKET_ID = 114453626;
}
