import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
//import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   

app.enableCors();
  
  await app.listen(4000);
}
bootstrap();
