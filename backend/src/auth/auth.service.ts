/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserRoles } from './constant/constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  //SuperAdmin code 
  async signIn(email, pass) {
    if (email === 'admin@petsforsale.com' && pass === 'Ali12212001') {
      const payload = {
        id: 'superadmin-1', 
        email: 'admin@petsforsale.com',
        username: 'SuperAdmin', 
        mobileContact: '03051888872', 
        role: 1,
      };
      return {
        ...payload,
        access_token: await this.jwtService.signAsync(payload),
      };
    }
  
    // Regular user 
    const user = await this.usersService.findOneBy(email);
    if (!user || user.password !== pass) {
      throw new Error('Invalid email or password');
    }
  
    const payload = {
      id: user.id,
      email: user.email,
      username: user.username,
      mobileContact: user.mobileContact,
      password: user.password,
      role:2,
    };
    return {
      ...payload,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  
    
  async signUp(payload: CreateUserDto) {
    const existingUser = await this.usersService.findOneBy(payload.email);

    if (existingUser) {
      throw new Error('Email already exists');
    }

    const user = await this.usersService.create({
      ...payload,
      role: UserRoles.Admin,
    });
    return user;
  }
}
