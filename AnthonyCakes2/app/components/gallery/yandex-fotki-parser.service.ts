import { Injectable } from '@angular/core';

@Injectable()
export class YandexFotkiParserService {
    extractAlbumsUrl(serviceDocument: Object): string {
        const collections = serviceDocument['collections'];
        if (collections) {
            const albums = collections['album-list'];
            if (albums)
                return albums['href'];
        }

        return '';
    }

    extractAlbumUrl(albumsDocument: Object, album: string): string {
        const entries = albumsDocument['entries'];
        if (entries) {
            for (let entry of entries) {
                const title = entry["title"];
                if (title && title === album) {
                    const links = entry['links'];
                    if (links)
                        return links['photos'];
                }
            }
        }

        return '';
    }

    extractAlbumPhotosUrls(albumDocument: Object): string[] {
        let photosUrls: string[] = [];

        const entries = albumDocument['entries'];
        if (entries) {
            for (let entry of entries) {
                const images = entry['img'];
                if (images) {
                    const original = images['orig'];
                    if (original)
                        photosUrls.push(original['href']);
                }
            }
        }

        return photosUrls;
    }
}