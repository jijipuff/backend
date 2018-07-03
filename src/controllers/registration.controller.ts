// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, requestBody, HttpErrors } from "@loopback/rest";
import { User } from "../models/user.model";

export class RegistrationController {
  constructor(
    @repository(UserRepository.name) private UserRepo: UserRepository
  ) { }

  @post('/registration')
  async createRepository(@requestBody() user: User) {
    if (!user.email || !user.password) {
      throw new HttpErrors.BadRequest('missing data');
    }

    let userExists: boolean = !!(await this.UserRepo.count({ email: user.email }));

    if (!userExists) {
      throw new HttpErrors.BadRequest('user already exists');
    }

    return await this.UserRepo.create(user);
  }
}
