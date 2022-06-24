import { Injectable } from '@nestjs/common';
import { CreateGraphqlServiceInput } from './dto/create-graphql-service.input';
import { UpdateGraphqlServiceInput } from './dto/update-graphql-service.input';

@Injectable()
export class GraphqlServiceService {
  create(createGraphqlServiceInput: CreateGraphqlServiceInput) {
    return 'This action adds a new graphqlService';
  }

  findAll() {
    return `This action returns all graphqlService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} graphqlService`;
  }

  update(id: number, updateGraphqlServiceInput: UpdateGraphqlServiceInput) {
    return `This action updates a #${id} graphqlService`;
  }

  remove(id: number) {
    return `This action removes a #${id} graphqlService`;
  }
}
