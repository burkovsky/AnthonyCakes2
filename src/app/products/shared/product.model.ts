export interface ICategory {
    id: number;
    name: string;
    section: ISection;
}

export interface ISection {
    id: number;
    name: string;
}

export interface ILike {
    count: number;
    user_likes: number;
}

export interface IPhoto {
    album_id: number;
    date: number;
    height: number;
    id: number;
    owner_id: number;
    photo_75: string;
    photo_130: string;
    photo_604: string;
    photo_807: string;
    photo_1280: string;
    photo_2560: string;
    text: string;
    user_id: number;
    width: number;
}

export interface IPrice {
    amount: string;
    currency: ICurrency;
    text: string;
}

export interface ICurrency {
    id: number;
    name: string;
}

export interface IProduct {
    albums_ids: number[];
    availability: boolean;
    can_comment: boolean;
    can_repost: boolean;
    category: ICategory;
    date: number;
    description: string;
    id: number;
    likes: ILike[];
    owner_id: number;
    price: IPrice;
    thumb_photo: string;
    title: string;
    views_count: number;
}
