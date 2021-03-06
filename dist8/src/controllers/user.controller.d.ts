import { UserRepository } from '../repositories/user.repository';
import { User } from "../models/user.model";
export declare class UserController {
    private userRepo;
    constructor(userRepo: UserRepository);
    getAllUsers(): Promise<Array<any>>;
    getOneUser(userId: string): Promise<User[]>;
}
