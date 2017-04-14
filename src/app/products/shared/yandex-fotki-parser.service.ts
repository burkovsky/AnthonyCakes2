import { Injectable } from "@angular/core";

import Product from "./product.model";

@Injectable()
export default class YandexFotkiParserService {
    private summarySeparator = "\n";
    private keysMap = {
        albums: "album-list",
        collections: "collections",
        entries: "entries",
        id: "id",
        imageSizes: {
            XL: "XL",
            XXL: "XXL",
            XXXL: "XXXL",
            original: "orig",
        },
        images: "img",
        linkTypes: {
            photos: "photos",
            self: "self",
        },
        links: "links",
        summary: "summary",
        tags: "tags",
        title: "title",
        url: "href",
    };

    public extractAlbumsUrl(serviceDocument: Object): string {
        const collections = serviceDocument[this.keysMap.collections];
        if (collections) {
            const albums = collections[this.keysMap.albums];
            if (albums) {
                return albums[this.keysMap.url];
            }
        }

        return "";
    }

    public extractAlbumUrl(albumsDocument: Object, album: string, sorting: string): string {
        const entries = albumsDocument[this.keysMap.entries];
        if (entries) {
            for (let entry of entries) {
                const title = entry[this.keysMap.title];
                if (title && title === album) {
                    const links = entry[this.keysMap.links];
                    if (links) {
                        let albumUrl = links[this.keysMap.linkTypes.photos];
                        if (albumUrl) {
                            let insertPosition = albumUrl.lastIndexOf("/");
                            if (insertPosition > -1) {
                                return `${albumUrl.substr(0, insertPosition)}/${sorting}/`;
                            }
                        }
                    }
                }
            }
        }

        return "";
    }

    public extractAlbumPhotos(albumDocument: Object): Product[] {
        let products: Product[] = [];

        const entries = albumDocument[this.keysMap.entries];
        if (entries) {
            for (let entry of entries) {
                let product = new Product();

                const id = entry[this.keysMap.id];
                if (!id) {
                    continue;
                }
                product.id = parseInt(id.substr(id.lastIndexOf(":") + 1), 10);

                const title = entry[this.keysMap.title];
                if (!title) {
                    continue;
                }
                product.title = title.trim();

                const images = entry[this.keysMap.images];
                if (!images) {
                    continue;
                }
                const original = images[this.keysMap.imageSizes.original];
                const xxxl = images[this.keysMap.imageSizes.XXXL];
                const xxl = images[this.keysMap.imageSizes.XXL];
                const xl = images[this.keysMap.imageSizes.XL];
                if (xl) {
                    product.listImageUrl = xl[this.keysMap.url];
                } else if (xxl) {
                    product.listImageUrl = xxl[this.keysMap.url];
                } else if (xxxl) {
                    product.listImageUrl = xxxl[this.keysMap.url];
                } else if (original) {
                    product.listImageUrl = original[this.keysMap.url];
                }
                if (xxl) {
                    product.detailsImageUrl = xxl[this.keysMap.url];
                } else if (xxxl) {
                    product.detailsImageUrl = xxxl[this.keysMap.url];
                } else if (original) {
                    product.detailsImageUrl = original[this.keysMap.url];
                }

                const summary = entry[this.keysMap.summary];
                if (summary) {
                    product.description = summary.trim();
                }

                const tags = entry[this.keysMap.tags];
                if (tags) {
                    product.tags = Object.keys(tags);
                }

                products.push(product);
            }
        }

        return products;
    }
}
