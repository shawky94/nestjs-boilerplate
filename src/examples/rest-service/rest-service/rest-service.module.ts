import { Module } from '@nestjs/common';
import { RestServiceService } from './rest-service.service';
import { RestServiceController } from './rest-service.controller';

@Module({
  controllers: [RestServiceController],
  providers: [RestServiceService]
})
export class RestServiceModule {}
