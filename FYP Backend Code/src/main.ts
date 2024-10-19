/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true }); //cors:true --> yeh is liye true kia hai kiyoo k yeh api dosri domains se bhi accessibe ho jaey 
  app.setGlobalPrefix('api/');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true })); //ValidationPipe --> It validates incoming request against defined DTOs
  const config = new DocumentBuilder()
    .setTitle('Pets For Sale')
    .setDescription('Buy and Sell your pets')
    .setVersion('1.0')
    .addTag('Pets api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.listen(5000)
    .then(() => {
      console.log('Successfully stared on port 5000');
    })
    .catch((error) => {
      console.log(error);
    });
}
bootstrap();
