import { Injectable } from '@angular/core';

import { Photo } from '../models/photo';

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
                const title = entry['title'];
                if (title && title === album) {
                    const links = entry['links'];
                    if (links)
                        return links['photos'];
                }
            }
        }

        return '';
    }

    extractAlbumPhotos(albumDocument: Object): Photo[] {
        let photos: Photo[] = [];

        const entries = albumDocument['entries'];
        if (entries) {
            for (let entry of entries) {
                let photo = new Photo();

                const title = entry['title'];
                if (title)
                    photo.title = title;

                const images = entry['img'];
                if (images) {
                    const original = images['orig'];
                    if (original) {
                        photo.url = original['href'];
                    }
                        
                }

                const tags = entry['tags'];
                if (tags) {
                    photo.tags = Object.keys(tags);
                }

                photos.push(photo);
            }
        }

        return photos;
    }
}