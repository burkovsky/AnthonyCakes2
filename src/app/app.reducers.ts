import { compose } from "@ngrx/core/compose";
import { combineReducers } from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";

import { productDetailsReducer } from "./products/shared/product-details.reducer";
import { productListReducer } from "./products/shared/product-list.reducer";

const metaReducers = !process.env.PRODUCTION
    ? [storeFreeze, combineReducers]
    : [combineReducers];

export const reducers = compose(...metaReducers)({
    product: productDetailsReducer,
    products: productListReducer,
});
