import { Injectable } from '@angular/core';

export interface IAppConfig {
    user: string;
    album: string;
}

@Injectable()
export class AppConfig implements  IAppConfig {
    user = 'alekna';
    album = 'Природа';
};