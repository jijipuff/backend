import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user.model";
export declare class RegistrationController {
    private UserRepo;
    constructor(UserRepo: UserRepository);
    createRepository(user: User): Promise<User>;
}
