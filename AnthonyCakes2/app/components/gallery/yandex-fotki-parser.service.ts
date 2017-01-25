import { Injectable } from '@angular/core';

@Injectable()
export class YandexFotkiParserService {
    extractAlbumsUrl(serviceDocument: Object) : string {
        // User collections: photos, albums, tags
        const collections = serviceDocument['collections'];
        if (collections) {
            // User albums
            const albums = collections['album-list'];
            if (albums)
                return albums['href'];
        }

        return '';
    }

    extractAlbumUrl(albumsDocument: Object): string {
        return '';
    }

    extractAlbumPhotosUrls(albumDocument: Object): string[] {
        return [];
    }
}