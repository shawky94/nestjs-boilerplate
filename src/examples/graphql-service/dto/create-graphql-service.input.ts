import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGraphqlServiceInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
