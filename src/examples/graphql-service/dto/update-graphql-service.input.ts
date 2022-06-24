import { CreateGraphqlServiceInput } from './create-graphql-service.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGraphqlServiceInput extends PartialType(
  CreateGraphqlServiceInput,
) {
  @Field(() => Int)
  id: number;
}
