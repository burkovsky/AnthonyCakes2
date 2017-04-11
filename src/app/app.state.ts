import Product from "./products/shared/product.model";

export interface IAppState {
    product: Product;
    products: Product[];
};
