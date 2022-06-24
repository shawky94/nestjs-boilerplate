import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GraphqlServiceService } from './graphql-service.service';
import { GraphqlService } from './entities/graphql-service.entity';
import { CreateGraphqlServiceInput } from './dto/create-graphql-service.input';
import { UpdateGraphqlServiceInput } from './dto/update-graphql-service.input';

@Resolver(() => GraphqlService)
export class GraphqlServiceResolver {
  constructor(private readonly graphqlServiceService: GraphqlServiceService) {}

  @Mutation(() => GraphqlService)
  createGraphqlService(
    @Args('createGraphqlServiceInput')
    createGraphqlServiceInput: CreateGraphqlServiceInput,
  ) {
    return this.graphqlServiceService.create(createGraphqlServiceInput);
  }

  @Query(() => [GraphqlService], { name: 'graphqlService' })
  findAll() {
    return this.graphqlServiceService.findAll();
  }

  @Query(() => GraphqlService, { name: 'graphqlService' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlServiceService.findOne(id);
  }

  @Mutation(() => GraphqlService)
  updateGraphqlService(
    @Args('updateGraphqlServiceInput')
    updateGraphqlServiceInput: UpdateGraphqlServiceInput,
  ) {
    return this.graphqlServiceService.update(
      updateGraphqlServiceInput.id,
      updateGraphqlServiceInput,
    );
  }

  @Mutation(() => GraphqlService)
  removeGraphqlService(@Args('id', { type: () => Int }) id: number) {
    return this.graphqlServiceService.remove(id);
  }
}
