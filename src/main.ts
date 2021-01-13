import { NestFactory } from '@nestjs/core';
import { FacemashModule } from './facemash.module';

async function bootstrap() {
  const app = await NestFactory.create(FacemashModule);
  await app.listen(3000);
}
bootstrap();
