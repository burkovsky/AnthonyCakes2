export interface ICategory {
    id: Number;
    name: String;
    section: ISection;
}

export interface ISection {
    id: Number;
    name: String;
}

export interface ILike {
    count: Number;
    user_likes: Number;
}

export interface IPhoto {
    album_id: Number;
    date: Number;
    height: Number;
    id: Number;
    owner_id: Number;
    photo_75: String;
    photo_130: String;
    photo_604: String;
    photo_807: String;
    photo_1280: String;
    photo_2560: String;
    text: String;
    user_id: Number;
    width: Number;
}

export interface IPrice {
    amount: String;
    currency: ICurrency;
    text: String;
}

export interface ICurrency {
    id: Number;
    name: String;
}

export interface IProduct {
    albums_ids: Number[];
    availability: Boolean;
    can_comment: Boolean;
    can_repost: Boolean;
    category: ICategory;
    date: Number;
    description: String;
    id: Number;
    likes: ILike[];
    owner_id: Number;
    price: IPrice;
    thumb_photo: String;
    title: String;
    views_count: Number;
}
