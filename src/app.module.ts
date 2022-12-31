import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { DataServicesModule } from './core/DataServicesModule';
// import { ClientModule } from './modules/client/client.module';
// import { ProductModule } from './modules/product/product.module';
// import { SaleModule } from './modules/sale/sale.module';
import { UserModule } from './modules/user/user.module';
import { StoreController } from './modules/store/store.controller';
import { StoreModule } from './modules/store/store.module';
//import { ProductController } from './modules/product/product.controller';
import { ProductModule } from './modules/product/product.module';
import { StoreService } from './modules/store/store.service';
import { UserMiddleware } from './middlewares/user.middleware';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'assets'),   // <-- path to the static files
          }),
        ConfigModule,
        // MongoDB Connection
        MongooseModule.forRootAsync({
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => configService.getMongoConfig(),
        }),
        DataServicesModule,
        // ClientModule,
        // ProductModule,
        // SaleModule,
        UserModule,
        DataServicesModule,
       StoreModule,
       ProductModule
    ],
    controllers: [AppController],
    providers: [AppService,StoreService],
    exports:[StoreService]
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
          .apply(UserMiddleware)
          .forRoutes('products','users');
      }
}
