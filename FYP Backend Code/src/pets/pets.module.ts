/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { Pets } from './entities/pet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from 'src/review/entities/review.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pets, Review])],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
