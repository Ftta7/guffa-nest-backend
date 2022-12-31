import { Injectable } from '@nestjs/common';
import { Model,Schema as MongooseSchema } from 'mongoose';
import { IDataServices } from 'src/core/IDataServices';
import { Token, User } from 'src/entities/entities';
import { UserDocument } from 'src/entities/user.entity';
import { UserRepository } from '../../repositories/user.repository';
//import { User } from '../../entities/user.entity';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository,    private dataServices: IDataServices,
        ) {}

    async createUser(createUserDto: User) {
        const createdUser = await this.dataServices.users.create(createUserDto);
        return createdUser;
    }

    async getUserById(id: MongooseSchema.Types.ObjectId) {
        return await this.userRepository .getUserById(id);
    }

    async getUserByGToken(token: string) {
        return await this.dataServices.users.getOne({"tokens.token":token});
    }

    async getOrCreateUserByGToken(token: string) {
        let user =await this.getUserByGToken(token);
console.log(user);

        if (!user) {
             var u= new User;
                 u.name= null;
                 u.email= null;
                 u.tokens=[{token:token,type:"ccccccc"}],
                 u.role='ADMIN';
         user=   await this.createUser(u)
        }
        return user;
    }

    async getAll() {
        return await  this.dataServices.users .getAll({});


  // console.table(ss)
       // return await this.userRepository.getAll();
    }
}
