/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { UserRoles } from 'src/auth/constant/constants';
export class BaseUser {
  @ApiProperty({
    example: '',
  })
  @IsOptional()
  id?: string;
  @ApiProperty({
    example: '',
  })
  @IsString()
  username?: string;
  @ApiProperty({
    example: '',
  })
  email: string;
  @ApiProperty({
    example: '',
  })
  password: string;
  @ApiProperty({
    example: '',
  })
  mobileContact: string;
  @ApiProperty({
    example: '',
  })
  confirmPassword?: string;
  @ApiProperty({
    example: '',
  })
  designation?: string;
  @ApiProperty({
    example: '',
  })
  role?: UserRoles; // Add role property of type Roles enum
}
