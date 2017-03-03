import { Injectable } from '@angular/core';

import Photo from '../../../models/photo';

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
        linkTypes: {
            photos: 'photos',
            self: 'self'
        },
        images: 'img',
        imageSizes: {
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

    extractAlbumUrl(albumsDocument: Object, album: string, sorting: string): string {
        const entries = albumsDocument[this.keysMap.entries];
        if (entries) {
            for (let entry of entries) {
                const title = entry[this.keysMap.title];
                if (title && title === album) {
                    const links = entry[this.keysMap.links];
                    if (links) {
                        let albumUrl = links[this.keysMap.linkTypes.photos];
                        if (albumUrl) {
                            let insertPosition = albumUrl.lastIndexOf('/');
                            if (insertPosition > -1)
                                return `${albumUrl.substr(0, insertPosition)}/${sorting}/`;
                        }
                    }
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
                    const original = images[this.keysMap.imageSizes.original];
                    const xxxl = images[this.keysMap.imageSizes.XXXL];
                    const xxl = images[this.keysMap.imageSizes.XXL];
                    const xl = images[this.keysMap.imageSizes.XL];
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