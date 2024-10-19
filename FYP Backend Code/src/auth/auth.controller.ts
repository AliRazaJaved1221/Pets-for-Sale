/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {  ApiTags } from '@nestjs/swagger';
// import { BaseUser } from 'src/users/dto/base-user.dto';
import { Public } from './strategy/public-strategy';
import { SignInDto } from './dto/login.dto';
// import { Repository } from 'typeorm';
import { SignUpDto } from './dto/register.dto';
@Controller('auth')
@ApiTags('Login and SignUp')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: SignInDto) {
    try {
      const data = await this.authService.signIn(
        signInDto.email,
        signInDto.password,
      );
      return {
        status: HttpStatus.OK,
        message: 'Login successful',
        data: data,
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto) {
    try {
      const payload = {
        username: signUpDto.username,
        email: signUpDto.email,
        password: signUpDto.password,
        mobileContact: signUpDto.mobileContact,
        createdAt: new Date(),
      };
      await this.authService.signUp(payload);
      return {
        status: HttpStatus.CREATED,
        userData:payload,
        message: 'Registered successfully',
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          
          error: error.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
