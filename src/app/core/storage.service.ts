﻿import { Injectable } from "@angular/core";

import AppConfig from "./app.config";

export default class StorageService {
    private readonly config: AppConfig;
    private readonly keyPrefix = "AC_";
    private readonly millisecondsInHour = 3600000;

    constructor(private storage: Storage) {
        this.config = new AppConfig();
    }

    public get(key: string): any {
        const storageKey = this.generateStorageKey(key);
        const value = this.storage.getItem(storageKey);

        return this.deserialize(value);
    }

    public getCache(key: string): any {
        const cacheValue = this.get(key);
        if (cacheValue) {
            const timestamp = cacheValue.timestamp;
            if (timestamp && this.isValidCache(timestamp)) {
                const value = cacheValue.value;
                if (value) {
                    return value;
                }
            }
        }

        return null;
    }

    public set(key: string, value: any): void {
        const storageKey = this.generateStorageKey(key);

        this.storage.setItem(storageKey, this.serialize(value));
    }

    public setCache(key: string, value: any): void {
        const cacheValue = {
            timestamp: Date.now(),
            value,
        };
        this.set(key, cacheValue);
    }

    public remove(key: string): void {
        const storageKey = this.generateStorageKey(key);

        this.storage.removeItem(storageKey);
    }

    private isValidCache(timestamp: number): boolean {
        return (Date.now() - timestamp) / this.millisecondsInHour < this.config.CACHE_TIME_IN_HOURS;
    }

    private generateStorageKey(key: string): string {
        return `${this.keyPrefix}${key}`;
    }

    private serialize(value: any): string {
        return typeof value === "string" ? value : JSON.stringify(value);
    }

    private deserialize(value: string): any {
        try {
            return JSON.parse(value);
        } catch (e) {
            return value;
        }
    }
}
