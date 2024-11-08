/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpException, Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pets } from './entities/pet.entity';
import { ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from 'src/review/entities/review.entity';

@Injectable()
export class PetsService {
//Constructor is used here to inject dependency into the class as here repository of Pets and Review are injected here.
  constructor(
    @InjectRepository(Pets)
    private readonly petsRepository: Repository<Pets>,
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}
  
  async create(createPetDto: CreatePetDto): Promise<Pets> {
    const userData = await this.petsRepository.create(createPetDto);

    return this.petsRepository.save(userData);
  }

  async findAll(
    breed?: string,
    page?: number,
    limit?: number,
  ): Promise<{ items: Pets[]; total: number }> {
    const where: any = {};

    if (breed) {
      where.breed = ILike(`%${breed}%`);
    }

    let items: Pets[];
    let total: number;

    if (page && limit) {
      [items, total] = await this.petsRepository.findAndCount({
        where,
        order: { id: 'ASC' },
        skip: (page - 1) * limit,
        take: limit,
      });
    } else {
      items = await this.petsRepository.find({
        where,
        order: { id: 'ASC' },
      });
      total = items.length;
    }

    return { items, total };
  }

  async findOne(id: number) {
    const petInfo = await this.petsRepository.findOne({
      where: { id },
      relations: ['reviews'], 
    });
    if (!petInfo) {
      throw new HttpException('Pet Not Found', 404);
    }
    return petInfo;
  }

  async update(id: number, updatePetDto: UpdatePetDto) {
    const existingUser = await this.findOne(id);
    const petInfo = this.petsRepository.merge(existingUser, updatePetDto);
    return await this.petsRepository.save(petInfo);
  }


  async remove(id: number) {
    // First, all related reviews will be deleted
    await this.reviewRepository
      .createQueryBuilder()
      .delete()
      .from(Review)
      .where('petId = :id', { id })
      .execute();

    // Now the pet will be deleted
    return this.petsRepository
      .createQueryBuilder()
      .delete()
      .from(Pets)
      .where('id = :id', { id })
      .execute();
  }

}
