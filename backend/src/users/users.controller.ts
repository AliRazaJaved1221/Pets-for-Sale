/* eslint-disable prettier/prettier */
import {Body, Controller,Delete,Get,Param, Patch} from '@nestjs/common';
import { UsersService } from './users.service';
// import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //   @Post()
  //   create(@Body() createUserDto: CreateUserDto) {
  //     return this.usersService.create(createUserDto);
  //   }

  @Get(':count')
  async getUserCount(): Promise<number> {
    return this.usersService.getUserCount();
  }
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
   return this.usersService.findOne(+id);
  }



    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) { 27-08-2024
    //   return this.usersService.update(+id, updateUserDto);
    // } 

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      try {
        const updatedUser = await this.usersService.update(+id, updateUserDto);
        return {
          success: true,
          data: updatedUser,
          message: 'User updated successfully',
        };
      } catch (error) {
        return {
          success: false,
          message: error.message,
        };
      }
    }
  //   @Delete(':id')
  //   remove(@Param('id') id: string) {
  //     return this.usersService.remove(+id);
  //   }
  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    await this.usersService.delete(id);
    return 'user removed';
  }
}
