import { Injectable } from '@nestjs/common';
import { CreateRestServiceDto } from './dto/create-rest-service.dto';
import { UpdateRestServiceDto } from './dto/update-rest-service.dto';

@Injectable()
export class RestServiceService {
  create(createRestServiceDto: CreateRestServiceDto) {
    return 'This action adds a new restService';
  }

  findAll() {
    return `This action returns all restService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restService`;
  }

  update(id: number, updateRestServiceDto: UpdateRestServiceDto) {
    return `This action updates a #${id} restService`;
  }

  remove(id: number) {
    return `This action removes a #${id} restService`;
  }
}
