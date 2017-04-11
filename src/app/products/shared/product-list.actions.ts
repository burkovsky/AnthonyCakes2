import { Action } from "@ngrx/store";

import Photo from "./photo.model";

export const ActionTypes = {
  LOAD_PRODUCTS: "LOAD_PRODUCTS",
};

export class LoadAction implements Action {
    public type = ActionTypes.LOAD_PRODUCTS;

    constructor(public payload: Photo[]) {}
}
