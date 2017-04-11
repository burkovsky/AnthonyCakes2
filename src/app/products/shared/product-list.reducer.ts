import { Action, ActionReducer } from "@ngrx/store";

import Photo from "./photo.model";
import { ActionTypes } from "./product-list.actions";

export const products: ActionReducer<Photo[]> = (state: Photo[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.LOAD_PRODUCTS:
            return Object.assign([], action.payload);
        default:
            return state;
    }
};
