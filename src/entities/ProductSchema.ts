import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mixed, Schema as MongooseSchema } from 'mongoose';

import { Client } from './client.entity';
import { User } from './user.entity';

@Schema()
export class Product extends Document {
  
    id: Number;
    title: String;
    description: String;
    type: String;
    brand: String;
    collections: Mixed;
    category: String;
    price: Number;
    sale: Boolean;
    discount: Date;
    stock: Number;
    new: Boolean;
    tags: [
        String
    ];
    variants: Mixed;
    images: Mixed
}
      


export const ProductSchema = SchemaFactory.createForClass(Product);
