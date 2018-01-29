import { ActionReducerMap } from "@ngrx/store";

import { IAppState } from "./app.state";
import { productDetailsReducer } from "./products/shared/product-details.reducer";
import { productListReducer } from "./products/shared/product-list.reducer";

export const reducers: ActionReducerMap<IAppState> = {
    product: productDetailsReducer,
    products: productListReducer,
};
