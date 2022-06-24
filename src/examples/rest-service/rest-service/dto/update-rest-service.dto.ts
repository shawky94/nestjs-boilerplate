import { PartialType } from '@nestjs/mapped-types';
import { CreateRestServiceDto } from './create-rest-service.dto';

export class UpdateRestServiceDto extends PartialType(CreateRestServiceDto) {}
