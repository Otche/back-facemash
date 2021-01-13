import { NestFactory } from '@nestjs/core';
import { FacemashModule } from './facemash.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(FacemashModule);
  const options = new DocumentBuilder()
    .setTitle('facemash')
    .setDescription('The facemash API description')
    .setVersion('0.1')
    .addTag('facemash')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(3000);
}
bootstrap();
