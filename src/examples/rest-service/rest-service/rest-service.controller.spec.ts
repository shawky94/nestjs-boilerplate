import { Test, TestingModule } from '@nestjs/testing';
import { RestServiceController } from './rest-service.controller';
import { RestServiceService } from './rest-service.service';

describe('RestServiceController', () => {
  let controller: RestServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestServiceController],
      providers: [RestServiceService],
    }).compile();

    controller = module.get<RestServiceController>(RestServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
