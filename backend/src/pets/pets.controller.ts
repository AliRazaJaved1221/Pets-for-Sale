/* eslint-disable prettier/prettier */
import {Controller, Get,Post,Body,Patch,Param,Delete,Query,Req,Optional,HttpCode,} from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petsService.update(+id, updatePetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.petsService.remove(+id);
    return { message: 'pet removed successfully' };
  }
}
