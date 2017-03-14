import { Injectable } from "@angular/core";

import StorageService from "./storage.service";

@Injectable()
export default class LocalStorageService extends StorageService {
    constructor() {
        super(localStorage);
    }
}
