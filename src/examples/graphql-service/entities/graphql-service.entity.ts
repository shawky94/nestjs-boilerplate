import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class GraphqlService {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
