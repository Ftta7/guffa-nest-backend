import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from './MongoDataServicesModule';

@Module({
  imports: [MongoDataServicesModule],
  exports: [MongoDataServicesModule],
})
export class DataServicesModule {}