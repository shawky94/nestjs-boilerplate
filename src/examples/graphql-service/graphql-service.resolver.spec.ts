import { Test, TestingModule } from '@nestjs/testing';
import { GraphqlServiceResolver } from './graphql-service.resolver';
import { GraphqlServiceService } from './graphql-service.service';

describe('GraphqlServiceResolver', () => {
  let resolver: GraphqlServiceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphqlServiceResolver, GraphqlServiceService],
    }).compile();

    resolver = module.get<GraphqlServiceResolver>(GraphqlServiceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
