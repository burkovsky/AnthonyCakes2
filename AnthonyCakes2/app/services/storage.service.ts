import { Injectable } from '@angular/core';

import { appConfig } from '../configs/app.config';

export class StorageService {
    private readonly keyPrefix = "AC_";
    private readonly millisecondsInHour = 3600000;

    constructor(private storage: Storage) {}

    get(key: string): any {
        const storageKey = this.generateStorageKey(key);
        const value = this.storage.getItem(storageKey);

        return this.deserialize(value);
    }

    getCache(key: string): any {
        const cacheValue = this.get(key);
        if (cacheValue) {
            const timestamp = cacheValue['timestamp'];
            if (timestamp && this.isValidCache(timestamp)) {
                const value = cacheValue['value'];
                if (value)
                    return value;
            }
        }

        return null;
    }

    set(key: string, value: any): void {
        const storageKey = this.generateStorageKey(key);

        this.storage.setItem(storageKey, this.serialize(value));
    }

    setCache(key: string, value: any): void {
        const cacheValue = {
            timestamp: Date.now(),
            value: value
        }
        this.set(key, cacheValue);
    }

    remove(key: string): void {
        const storageKey = this.generateStorageKey(key);

        this.storage.removeItem(storageKey);
    }

    private isValidCache(timestamp: number): boolean {
        return timestamp + this.millisecondsInHour * appConfig.cache.cacheTimeInHours > Date.now();
    }

    private generateStorageKey(key: string): string {
        return `${this.keyPrefix}${key}`;
    }

    private serialize(value: any): string {
        return typeof value === "string" ? value : JSON.stringify(value);
    }

    private deserialize(value: any): any {
        try {
            return JSON.parse(value);
        } catch (e) {
            return value;
        }
    }
}

@Injectable()
export class LocalStorageService extends StorageService {
    constructor() {
        super(localStorage);
    }
}

@Injectable()
export class SessionStorageService extends StorageService {
    constructor() {
        super(sessionStorage);
    }
}