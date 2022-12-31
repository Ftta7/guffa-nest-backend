import { Controller, Get, HttpStatus, Ip, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { Schema as MongooseSchema } from 'mongoose';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    // @Post('/createUser')
    // async createUser(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    //     const session = await this.mongoConnection.startSession();
    //     session.startTransaction();
    //     try {
    //         const newUser: any = await this.userService.createUser();
    //         await session.commitTransaction();
    //         return res.status(HttpStatus.CREATED).send(newUser);
    //     } catch (error) {
    //         await session.abortTransaction();
    //         throw new BadRequestException(error);
    //     } finally {
    //         session.endSession();
    //     }
    // }

    @Get('/getUserById/:id')
    async getCompanyById(@Param('id') id: MongooseSchema.Types.ObjectId, @Res() res: Response) {
        const user: any = await this.userService.getUserById(id);
        return res.status(HttpStatus.OK).send(user);
    }

    @Get()
    async getAll(@Res() res: Response) {
        const user = await this.userService.getAll();
        return res.status(HttpStatus.OK).send(user);
    }
    @Get('findbytoken')
    async findbytoken(@Res() res: Response,@Ip() ip) {
        console.log(ip);
        return res.status(HttpStatus.OK).send(res['User']);
    }
}
