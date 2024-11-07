/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export class SignUpDto {
  @ApiProperty({ example: 'Ali Raza',})
  @IsString()
  @IsNotEmpty({ message: 'fullName is required' })
  username: string;

  @ApiProperty({ example: 'ali@gmail.com',})
  @IsEmail({}, { message: 'email must be a valid email' })
  @IsNotEmpty({ message: 'email is required' })
  email: string;
  
  @ApiProperty({ example: 'Ali0310',})
  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'password is required' })
  password: string;
  
  @ApiProperty({ example: '03101234123',})
  @IsString()
  @IsNotEmpty({ message: 'mobileContact is required' })
  mobileContact: string;

  @ApiProperty({ example: 'Lahore',})
  location: string;
}
