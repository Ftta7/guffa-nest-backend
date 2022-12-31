import { IGenericRepository } from "src/core/IGenericRepository";
import { User } from "src/entities/user.entity";

export interface IUserRepository extends IGenericRepository<User> {
   // getUserByEmail(name: string);

}