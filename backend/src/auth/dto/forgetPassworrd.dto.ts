/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class ForgetPasswordDto {
  @ApiProperty({
    example: '',
  })
  @IsNotEmpty({ message: 'token is required' })
  token: string;

  @ApiProperty({
    example: '',
  })
  @IsString()
  @Length(6, 255)
  newPassword: string;
}
