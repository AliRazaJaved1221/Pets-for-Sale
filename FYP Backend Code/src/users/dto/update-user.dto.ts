import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { BaseUser } from './base-user.dto';
  
  export class UpdateUserDto extends PartialType(BaseUser) {
    @ApiProperty({example: '',})
    @IsString()
    username?: string;

    @ApiProperty({ example: '',})
    @IsEmail()
    email?: string;

    @ApiProperty({ example: '',})
    @IsString()
    password?: string;

    @ApiProperty({ example: '',})
    @IsString()
    mobileContact?: string;
  }