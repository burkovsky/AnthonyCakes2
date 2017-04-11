import { Action } from "@ngrx/store";

import Photo from "./photo.model";

export const ActionTypes = {
  LOAD_PRODUCT: "LOAD_PRODUCT",
};

export class LoadAction implements Action {
    public type = ActionTypes.LOAD_PRODUCT;

    constructor(public payload: Photo) {}
}
