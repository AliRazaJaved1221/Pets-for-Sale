/* eslint-disable prettier/prettier */
import { ApiProperty,  } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    example: '',
  })
  @IsOptional()
  @IsEmail({}, { message: 'email must be a valid email' })
  @IsNotEmpty({ message: 'email is required' })
  email: string;

  @ApiProperty({
    example: '',
  })
  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'password is required' })
  password: string;
}
