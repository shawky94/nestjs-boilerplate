import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RestServiceService } from './rest-service.service';
import { CreateRestServiceDto } from './dto/create-rest-service.dto';
import { UpdateRestServiceDto } from './dto/update-rest-service.dto';

@Controller('rest-service')
export class RestServiceController {
  constructor(private readonly restServiceService: RestServiceService) {}

  @Post()
  create(@Body() createRestServiceDto: CreateRestServiceDto) {
    return this.restServiceService.create(createRestServiceDto);
  }

  @Get()
  findAll() {
    return this.restServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restServiceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRestServiceDto: UpdateRestServiceDto,
  ) {
    return this.restServiceService.update(+id, updateRestServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restServiceService.remove(+id);
  }
}
