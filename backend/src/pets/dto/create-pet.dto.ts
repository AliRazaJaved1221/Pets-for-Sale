/* eslint-disable prettier/prettier */
//dto is used for data transfer and the code written here will be shown in the swagger
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty,  IsOptional, IsString } from 'class-validator';

export class CreatePetDto {
 
  @ApiProperty({ example: '',})
  @IsString()
  @IsNotEmpty({ message: 'breed is required' })
  @IsOptional()
  type: string;

  @ApiProperty({ example: '',})
  @IsString()
  @IsNotEmpty({ message: 'breed is required' })
  @IsOptional()
  breed: string;

  @ApiProperty({ example: '',})
  @IsString()
  @IsNotEmpty({ message: 'color is required' })
  @IsOptional()
  color: string;

  @ApiProperty({ example: '',})
  @IsString()
  @IsNotEmpty({ message: 'age is required' })
  @IsOptional()
  age: string;

  @ApiProperty({ example: '',})
  @IsString()
  @IsNotEmpty({ message: 'price is required' })
  @IsOptional()
  price: string;

  @ApiProperty({ example: '',})
  @IsString()
  @IsNotEmpty({ message: 'description is required' })
  @IsOptional()
  description: string;

  @ApiProperty({ example: '',})
  @IsString()
  // @IsNotEmpty({ message: 'description is required' })
  @IsOptional()
  image: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  @IsNotEmpty({ message: 'isAlive is required' })
  @IsOptional()
  isAlive: boolean;
}
