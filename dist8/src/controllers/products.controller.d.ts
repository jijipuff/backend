import { Products } from "../models/products.model";
import { ProductsRepository } from "../repositories/products.repository";
export declare class ProductsController {
    protected ProductsRepo: ProductsRepository;
    constructor(ProductsRepo: ProductsRepository);
    findProducts(): Promise<Products[]>;
}
