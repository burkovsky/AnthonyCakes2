import { Action, ActionReducer } from "@ngrx/store";

import Photo from "./photo.model";
import { ActionTypes } from "./product-details.actions";

export const product: ActionReducer<Photo> = (state: Photo = null, action: Action) => {
    switch (action.type) {
        case ActionTypes.LOAD_PRODUCT:
            return Object.assign({}, action.payload);
        default:
            return state;
    }
};
