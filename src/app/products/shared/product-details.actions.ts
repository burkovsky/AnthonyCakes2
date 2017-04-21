import { Action } from "@ngrx/store";

import { IProduct } from "./product.model";

export const ActionTypes = {
  LOAD_PRODUCT: "LOAD_PRODUCT",
};

export class LoadAction implements Action {
    public type = ActionTypes.LOAD_PRODUCT;

    constructor(public payload: IProduct) {}
}
