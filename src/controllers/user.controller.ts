// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

import { repository } from "@loopback/repository";
import { UserRepository } from '../repositories/user.repository';
import { User } from "../models/user.model";
import { get, param } from "@loopback/rest"

export class UserController {
  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @get("users")
  async getAllUsers(): Promise<Array<any>> {

    return await this.userRepo.find();
  }

  @get("/users/{userId}")
  async getOneUser(
    @param.path.string("userId") userId: string
  ): Promise<User[]> {
    return await this.userRepo.find({
      where: {
        userId: userId
      }
    });
  }

}
