import { Action, ActionReducer } from "@ngrx/store";

import { ActionTypes } from "./product-list.actions";
import { IProduct } from "./product.model";

export const productListReducer: ActionReducer<IProduct[]> = (state: IProduct[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.LOAD_PRODUCTS:
            return Object.assign([], action.payload);
        default:
            return state;
    }
};
