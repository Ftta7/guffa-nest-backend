import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mixed, Schema as MongooseSchema } from 'mongoose';

export type StoreDocument = Store & Document;

@Schema()
export class Store extends Document {
    @Prop({ type: MongooseSchema.Types.ObjectId, required: false })
    id: MongooseSchema.Types.ObjectId;

    @Prop({ type: String, required: true })
    storeUniqName: String;
    @Prop({ type: String, required: true })
    logo: String;
    @Prop(raw({
        en: { type: String },
        ar: { type: String }
      }))
    name: Record<string, string>;
    
      
      @Prop({ type: [], default: [] })
      catrgorys:any[];

      @Prop({ type: [], default: [] })
      sliders:[];
    // @Prop({ type: MongooseSchema.Types.ObjectId, required: false, ref: Client.name })
    // client: MongooseSchema.Types.ObjectId;

    @Prop({ type: [], default: [] })
    menuItems: Mixed;


    @Prop(raw({
      headerColor: { type: String },
      themeColor: { type: String }}))
      website:Record<string, string>;


    @Prop(raw({
      name: { type: String },
      currency: { type: String },
      price: { type: Number }
    }))
    currencies:Record<string, string>;

    


    
    // @Prop({ type: String })
    // productName: string;

    // @Prop({ type: Date, default: Date.now })
    // updatedAt: Date;

    // @Prop({ type: Date, default: Date.now })
    // createdAt: Date;

    


        // "website": {
        //   "theme": {
        //     "headerColor": {
        //       "type": "String"
        //     }
        //   }
        // },
        // "catrgorys": {
        //   "type": [
        //     "Mixed"
        //   ]
        // },
        // "menuItems": {
        //   "type": [
        //     "Mixed"
        //   ]
        // },
        // "carts": {
        //   "type": [
        //     "Mixed"
        //   ]
       // }
     // }
}

export const StoreSchema = SchemaFactory.createForClass(Store);
