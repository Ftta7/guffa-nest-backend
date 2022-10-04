import { Module } from '@nestjs/common';
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
import { StoreController } from './Services/store/store.controller';
import { StoreModule } from './Services/store/store.module';
//import { ProductController } from './modules/product/product.controller';
import { ProductModule } from './Services/product/product.module';

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
        // ClientModule,
        // ProductModule,
        // SaleModule,
        // UserModule,
        DataServicesModule,
       StoreModule,ProductModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
