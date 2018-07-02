import { DefaultCrudRepository } from '@loopback/repository';
import { User } from '../models/user.model';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
  >

{
  constructor(
    @inject('datasources.db') protected datasource: DataSource) {
    super(User, datasource)
  }
}
