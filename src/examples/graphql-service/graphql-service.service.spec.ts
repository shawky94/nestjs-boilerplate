import { Test, TestingModule } from '@nestjs/testing';
import { GraphqlServiceService } from './graphql-service.service';

describe('GraphqlServiceService', () => {
  let service: GraphqlServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphqlServiceService],
    }).compile();

    service = module.get<GraphqlServiceService>(GraphqlServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
