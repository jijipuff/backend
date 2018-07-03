// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

import { repository } from "@loopback/repository";
import { get } from "@loopback/rest";
import { Products } from "../models/products.model";
import { ProductsRepository } from "../repositories/products.repository";

export class ProductsController {
  constructor(
    @repository(ProductsRepository) protected ProductsRepo: ProductsRepository,
  ) { }

  @get('/products')
  async findProducts(): Promise<Products[]> {
    return await this.ProductsRepo.find();
  }
}
