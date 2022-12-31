import { IsDate, isDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    role: any;

    @IsDate()
    @IsNotEmpty()
    createdAt:Date;

    @IsNotEmpty()
    gTokens:any[]
}
