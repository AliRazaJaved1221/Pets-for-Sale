/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Review } from './entities/review.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { Pets } from 'src/pets/entities/pet.entity';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @InjectRepository(Pets)
    private petsRepository: Repository<Pets>,
  ) {}

  async getAllReviews(): Promise<Review[]> {
    return this.reviewRepository.find({ relations: ['user', 'pet'] });
  }
  async createReview(createReviewDto: CreateReviewDto): Promise<Review> {
    const { userId, petId, feedback } = createReviewDto;

    const user = await this.usersRepository.findOneBy({ id: parseInt(userId) });
    if (!user) {
      throw new Error('User not found');
    }

    const pet = await this.petsRepository.findOneBy({ id: parseInt(petId) });
    if (!pet) {
      throw new Error('Pet not found');
    }

    const review = new Review();
    review.user = user;
    review.pet = pet;
    review.feedback = feedback;

    return this.reviewRepository.save(review);
  }
  async getReviewsByPet(petId: number): Promise<Review[]> {
    return this.reviewRepository.find({
      where: { pet: { id: petId } },
      relations: ['user'],
    });
  }
}
