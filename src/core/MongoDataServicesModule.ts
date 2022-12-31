
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '../config/config.service';
import { StoreSchema } from '../entities/StoreSchema';
import { Store } from '../entities/entities';

import { IDataServices } from './IDataServices';
import { MongoDataServices } from './MongoDataServices';
import { Product, ProductSchema } from '../entities/ProductSchema';
import { User, UserSchema } from 'src/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Store.name, schema: StoreSchema },  { name: Product.name, schema: ProductSchema },{ name: User.name, schema: UserSchema }
    ]),
    //MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString),
    //ConfigModule,
    // MongoDB Connection
    MongooseModule.forRootAsync({
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => configService.getMongoConfig(),
    }),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}