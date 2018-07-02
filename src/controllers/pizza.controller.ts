// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

import { repository } from "@loopback/repository";
import { PizzaRepository } from "../repositories/pizza.repository";
import { param, post, get, requestBody } from "@loopback/rest";
import { Pizza } from "../models/pizza";

export class PizzaController {

  constructor(
    @repository(PizzaRepository.name) private pizzaRepo: PizzaRepository
  ) { }

  @post('/pizzas')
  async createPizza(@requestBody() pizza: Pizza) {
    return await this.pizzaRepo.create(pizza);
  }

  @get('/pizzas')
  async getAllPizzas(
    @param.query.string('toppings') toppings: String
  ): Promise<Array<Pizza>> {
    return await this.pizzaRepo.find({
      where: {
        toppings: toppings
      }
    });
  }
}
