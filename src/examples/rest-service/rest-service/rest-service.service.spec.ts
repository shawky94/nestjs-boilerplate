import { Test, TestingModule } from '@nestjs/testing';
import { RestServiceService } from './rest-service.service';

describe('RestServiceService', () => {
  let service: RestServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestServiceService],
    }).compile();

    service = module.get<RestServiceService>(RestServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
