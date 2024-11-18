/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

import { devConfig } from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetsModule } from './pets/pets.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ReviewModule } from './review/review.module';
import { RatingModule } from './rating/rating.module';
import { ContactModule } from './contact/contact.module';
import { PurchaseModule } from './purchase/purchase.module';
@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'client'),
    // }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src', 'uploads'),
      serveRoot: '/uploads',
    }),

    TypeOrmModule.forRoot(devConfig),
    AuthModule,
    PetsModule,
    UsersModule,
    FilesModule,
    ReviewModule,
    RatingModule,
    ContactModule,
    PurchaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}