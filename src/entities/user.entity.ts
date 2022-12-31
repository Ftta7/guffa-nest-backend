import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { type } from 'os';

export type TokenDocument = Token & Document;

@Schema() 
class Token {
  @Prop() 
  token: string;

  @Prop()
  type: string;
}



export type UserDocument = User & Document;


@Schema()
export class User extends Document {
    @Prop({  unique: true })
    name: string;

    @Prop({  unique: true })
    email: string;


    @Prop()
    tokens:Array<Token>;

    @Prop({ required: true, enum: ['ADMIN', 'USER'] })
    role: string;

    @Prop({ default: Date.now })
    createdAt: Date;
}




export const UserSchema = SchemaFactory.createForClass(User);
