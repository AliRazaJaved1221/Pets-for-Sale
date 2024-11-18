import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateContactDto {
  
  @ApiProperty({example: ''})
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({example: ''})
  @IsEmail()
  email: string;

  @ApiProperty({example: ''})
  @IsString()
  @IsNotEmpty()
  contact: string;

  @ApiProperty({example: ''})
  @IsString()
  @IsNotEmpty()
  contactType: string;

  @ApiProperty({example: ''})
  @IsString()
  @IsNotEmpty()
  message: string;
}
