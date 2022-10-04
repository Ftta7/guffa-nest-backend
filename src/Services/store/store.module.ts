import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataServicesModule } from '../../core/DataServicesModule';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';

@Module({
    imports: [ DataServicesModule],
    controllers: [StoreController],
    providers: [StoreService],
    exports: [StoreService],
})export class StoreModule {}
