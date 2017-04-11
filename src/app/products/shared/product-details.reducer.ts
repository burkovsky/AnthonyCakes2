import { Action, ActionReducer } from "@ngrx/store";

import { ActionTypes } from "./product-details.actions";
import Product from "./product.model";

export const productDetailsReducer: ActionReducer<Product> = (state: Product = null, action: Action) => {
    switch (action.type) {
        case ActionTypes.LOAD_PRODUCT:
            return Object.assign({}, action.payload);
        default:
            return state;
    }
};
