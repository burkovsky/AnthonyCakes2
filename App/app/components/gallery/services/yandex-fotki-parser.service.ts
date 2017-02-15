﻿import { Injectable } from '@angular/core';

import { Photo } from '../../../models/photo';

@Injectable()
export class YandexFotkiParserService {
    private summarySeparator = '\n';
    private keysMap = {
        collections: 'collections',
        albums: 'album-list',
        url: 'href',
        entries: 'entries',
        title: 'title',
        links: 'links',
        photos: 'photos',
        images: 'img',
        sizes: {
            original: 'orig',
            XXXL: 'XXXL',
            XXL: 'XXL',
            XL: 'XL'
        },
        summary: 'summary',
        tags: 'tags'
    }

    extractAlbumsUrl(serviceDocument: Object): string {
        const collections = serviceDocument[this.keysMap.collections];
        if (collections) {
            const albums = collections[this.keysMap.albums];
            if (albums)
                return albums[this.keysMap.url];
        }

        return '';
    }

    extractAlbumUrl(albumsDocument: Object, album: string): string {
        const entries = albumsDocument[this.keysMap.entries];
        if (entries) {
            for (let entry of entries) {
                const title = entry[this.keysMap.title];
                if (title && title === album) {
                    const links = entry[this.keysMap.links];
                    if (links)
                        return links[this.keysMap.photos];
                }
            }
        }

        return '';
    }

    extractAlbumPhotos(albumDocument: Object): Photo[] {
        let photos: Photo[] = [];

        const entries = albumDocument[this.keysMap.entries];
        if (entries) {
            for (let entry of entries) {
                let photo = new Photo();

                const title = entry[this.keysMap.title];
                if (title)
                    photo.title = title;

                const images = entry[this.keysMap.images];
                if (images) {
                    const original = images[this.keysMap.sizes.original];
                    const xxxl = images[this.keysMap.sizes.XXXL];
                    const xxl = images[this.keysMap.sizes.XXL];
                    const xl = images[this.keysMap.sizes.XL];
                    if (xl)
                        photo.imageUrl = xl[this.keysMap.url];
                    else if (xxl)
                        photo.imageUrl = xxl[this.keysMap.url];
                    else if (xxxl)
                        photo.imageUrl = xxxl[this.keysMap.url];
                    else if (original)
                        photo.imageUrl = original[this.keysMap.url];
                }

                const summary = entry[this.keysMap.summary];
                if (summary)
                    photo.description = summary.split(this.summarySeparator);

                const tags = entry[this.keysMap.tags];
                if (tags)
                    photo.tags = Object.keys(tags);

                photos.push(photo);
            }
        }

        return photos;
    }
}