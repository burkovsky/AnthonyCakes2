import { Action, ActionReducer } from "@ngrx/store";

import { ActionTypes } from "./product-details.actions";
import { IProduct } from "./product.model";

export const productDetailsReducer: ActionReducer<IProduct> = (state: IProduct = null, action: Action) => {
    switch (action.type) {
        case ActionTypes.LOAD_PRODUCT:
            return Object.assign({}, (action as any).payload);
        default:
            return state;
    }
};
