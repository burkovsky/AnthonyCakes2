import { IProduct } from "./products/shared/product.model";

export interface IAppState {
    product: IProduct;
    products: IProduct[];
};
