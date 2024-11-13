/* eslint-disable prettier/prettier */
//dto is used for data transfer and the code written here will be shown in the swagger
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty,  IsNumber,  IsOptional, IsString } from 'class-validator';

export class CreatePetDto {
 
  @ApiProperty({ example: '',})
  @IsString()
  @IsNotEmpty({ message: 'type is required' })
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
  @IsOptional()
  image: string;

  @ApiProperty({ example: '',}) 
  @IsString()
  @IsNotEmpty({ message: 'email is required' })
  @IsOptional()
  uploaderEmail: string;

  @ApiProperty({ example: '',})
  @IsString()
  @IsNotEmpty({ message: 'name is required' })
  @IsOptional()
  uploaderName: string;

  @ApiProperty({ example: '',})
  @IsString()
  @IsNotEmpty({ message: 'contact is required' })
  @IsOptional()
  uploaderMobileContact: string;

  @ApiProperty({ example: '',})
  @IsString()
  @IsNotEmpty({ message: 'location is required' })
  @IsOptional()
  UploaderLocation: string;

//  @ApiProperty({example:'',})
//  @IsNumber()
//  @IsNotEmpty({message: 'id is required'})
//  @IsOptional()
//  ownerId: number;

@ApiProperty({example:'',})
 @IsNumber()
 @IsNotEmpty({message: 'id is required'})
 @IsOptional()
 userId: number;

  @ApiProperty({ example: false })
  @IsBoolean()
  @IsNotEmpty({ message: 'This is required' })
  @IsOptional()
  isSold: boolean;
}
