// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { get, param } from "@loopback/rest";

export class LoginController {
  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @get('/login')
  async login(
    @param.query.string("email") email: string
  ): Promise<Array<any>> {

    return await this.userRepo.find({
      where: {
        email
      }
    });
  }
}
