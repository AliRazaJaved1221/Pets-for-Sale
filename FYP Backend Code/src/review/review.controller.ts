/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ApiTags } from '@nestjs/swagger';
import { Review } from './entities/review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
@ApiTags('Review')
@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  async getAllReviews(): Promise<Review[]> {
    return this.reviewService.getAllReviews();
  }
  @Post()
  async createReview(
    @Body() createReviewDto: CreateReviewDto,
  ): Promise<Review> {
    return this.reviewService.createReview(createReviewDto);
  }
  @Get('pet/:petId')
  async getReviewsByPet(@Param('petId') petId: number): Promise<Review[]> {
    return this.reviewService.getReviewsByPet(petId);
  }
}
