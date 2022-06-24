import { Module } from '@nestjs/common';
import { GraphqlServiceService } from './graphql-service.service';
import { GraphqlServiceResolver } from './graphql-service.resolver';

@Module({
  providers: [GraphqlServiceResolver, GraphqlServiceService]
})
export class GraphqlServiceModule {}
