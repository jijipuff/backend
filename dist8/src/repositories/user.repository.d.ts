import { DefaultCrudRepository } from '@loopback/repository';
import { User } from '../models/user.model';
import { DataSource } from 'loopback-datasource-juggler';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
