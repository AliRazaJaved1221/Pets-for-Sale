/* eslint-disable prettier/prettier */
import {Controller, Get,Post,Body,Patch,Param,Delete,Query,Req,Optional,HttpCode, ParseIntPipe, HttpException, HttpStatus, ValidationPipe, UsePipes,} from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Pets')
@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post('/create')
  async create(@Body() createPetDto: CreatePetDto) {
    try {
      const petsInfo = await this.petsService.create(createPetDto);

      return {
        success: true,
        data: petsInfo,
        message: ' Created Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get('/get')
  @ApiOkResponse()
  @HttpCode(200)
  @ApiQuery({ name: 'breed', required: false, type: 'string' })
  @ApiQuery({ name: 'page', required: false, type: 'number' })
  @ApiQuery({ name: 'limit', required: false, type: 'number' })
  async findAll(
    @Query('breed') breed?: string,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    try {
      const { items, total } = await this.petsService.findAll(
        breed,
        page,
        limit,
      );
      if (items.length > 0) {
        return {
          success: true,
          data: items,
          total: total,

          message: 'Pets Fetched Successfully',
        };
      }
      return {
        success: false,
        items,
        message: 'No records found',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }


  // Find pet by ID with ParseIntPipe to ensure id is a valid number
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.petsService.findOne(id);
  }

  // Update pet by ID with ParseIntPipe to ensure id is a valid number
  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePetDto: UpdatePetDto) {
    return this.petsService.update(id, updatePetDto);
  }

  // Remove pet by ID with ParseIntPipe to ensure id is a valid number
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    this.petsService.remove(id);
    return { message: 'Pet removed successfully' };
  }

  // Fetch pets by user ID with ParseIntPipe to ensure userId is a valid number
  // @Get('/by-user')
  // async findByUserId(@Query('userId', ParseIntPipe) userId: number) {
  //   try {
  //     const userPets = await this.petsService.findByUserId(userId);
  //     return {
  //       success: true,
  //       data: userPets,
  //       message: 'Pets fetched successfully for the user',
  //     };
  //   } catch (error) {
  //     return {
  //       success: false,
  //       message: error.message,
  //     };
  //   }
  // }
  @Get('/by-user/:userId')
  async findByUserId(@Param('userId') userId: string) {
    console.log('Received userId:', userId);  
    const numericUserId = Number(userId);
  
    if (isNaN(numericUserId)) {
      throw new HttpException(
        {
          success: false,
          message: 'Invalid userId: userId should be a numeric string',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  
    try {
      const userPets = await this.petsService.findByUserId(numericUserId);
      return {
        success: true,
        data: userPets,
        message: 'Pets fetched successfully for the user',
      };
    } catch (error) {
      throw new HttpException(
        {
          success: false,
          message: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}