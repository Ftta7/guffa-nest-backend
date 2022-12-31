import { ConflictException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IGenericRepository } from 'src/core/IGenericRepository';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../modules/user/dto/createUser.dto';

export class UserRepository {
    //constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}
    constructor(@InjectModel(User.name) private readonly userModel: IGenericRepository<User>) {}

    async createUser(createUserDto: CreateUserDto) {
        let user = await this.getUserByEmail(createUserDto.email);

        if (user) {
            throw new ConflictException('User already exists');
        }


       //  this.userModel.create(new User);
        // = await this.userModel.create(createUserDto);
        // user = new User({
        //     name: createUserDto.name,
        //     email: createUserDto.email,
        //     role: createUserDto.role,
        // });
        
        try {
           // user = await user.save({ session });
        } catch (error) {
            throw new InternalServerErrorException(error);
        }

        if (!user) {
            throw new ConflictException('User not created');
        }

        return user;
    }

    async getUserById(id) {
        let user;
        try {
            user = await this.userModel. get(id);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }


    async getByGToken(gToken) {
        let user;
        console.log("09876543");
        
        try {
            user = await this.userModel.getOne({});
         console.log("-09876543234567890",user);
            
        } catch (error) {
            throw new InternalServerErrorException(error);
        }

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    async getAll() {
        let user;
        try {
            user = await this.userModel.getAll({});
        } catch (error) {
            throw new InternalServerErrorException(error);
        }

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    async getUserByEmail(email: string) {
        let user;
        try {
            user = await this.userModel.getOne({ email });
        } catch (error) {
            console.log(error);
            
            throw new InternalServerErrorException(error);
        }

        return user;
    }
}
