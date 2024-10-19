/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateReviewDto {
  @ApiProperty({example: ''})
  @IsNumber()
  @IsNotEmpty({ message: 'UserId is required' })
  userId: any;

  @ApiProperty({example: ''})
  @IsNumber()
  @IsNotEmpty({ message: 'PetId is required' })
  petId: any;

  @ApiProperty({example: ''})
  @IsString()
  @IsNotEmpty({ message: 'feedback is required' })
  feedback: string;
}
