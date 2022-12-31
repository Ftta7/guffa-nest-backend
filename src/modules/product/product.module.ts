import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { DataServicesModule } from '../../core/DataServicesModule';
import { StoreModule } from '../store/store.module';

@Module({
  imports: [DataServicesModule,StoreModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}