/* eslint-disable prettier/prettier */
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async findOneBy(email: string): Promise<UserEntity | undefined> {
    return await this.userRepository.findOneBy({ email: email });
  }
  // async create(createUserDto: CreateUserDto) {
  //   return this.userRepository.save({
  //     ...createUserDto,
  //     createdAt: new Date(),
  //   });
  // }
  async create(createUserDto: CreateUserDto) {
    return this.userRepository.save({
      ...createUserDto,
      createdAt: new Date(),
    } as unknown as DeepPartial<UserEntity>);
  }
  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find(); // Fetch all users from the database
  }

  async findOne(id: number) {
    const userInfo = await this.userRepository.findOne({
      where: { id },
      relations: ['reviews'], // Include the reviews relation
    });
    if (!userInfo) {
      throw new HttpException('User Not Found', 404);
    }
    return userInfo;
  }


  delete(id: string): Promise<any> {
    return this.userRepository
      .createQueryBuilder()
      .delete()
      .from(UserEntity)
      .where('id = :id', { id })
      .execute();
  }


  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const existingUser = await this.findOne(id);
    // Cast updateUserDto to DeepPartial<User>
    const userInfo = this.userRepository.merge(existingUser, updateUserDto as unknown as DeepPartial<UserEntity>);
    return this.userRepository.save(userInfo);
  }
}
