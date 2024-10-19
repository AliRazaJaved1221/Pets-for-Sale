/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { Pets } from 'src/pets/entities/pet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review, UserEntity, Pets])],
  controllers: [ReviewController],
  providers: [ReviewService],
  // exports: [ReviewService],
})
export class ReviewModule {}
