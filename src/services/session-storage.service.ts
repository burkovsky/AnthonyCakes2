import { Injectable } from "@angular/core";

import StorageService from "./storage.service";

@Injectable()
export default class SessionStorageService extends StorageService {
    constructor() {
        super(sessionStorage);
    }
}
