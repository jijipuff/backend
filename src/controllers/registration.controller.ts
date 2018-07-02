// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, requestBody } from "@loopback/rest";
import { User } from "../models/user.model";

export class RegistrationController {
  constructor(
    @repository(UserRepository.name) private UserRepo: UserRepository
  ) { }

  @post('/registration')
  async createRepository(@requestBody() user: User) {
    return await this.UserRepo.create(user);
  }
}
