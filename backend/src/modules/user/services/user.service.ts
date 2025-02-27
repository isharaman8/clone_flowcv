// THIRD PARTY IMPORTS
import { nanoid } from 'nanoid';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';

// INNER IMPORTS
import { User } from '../schemas/user.schema';
import { CreateUserDto, UpdateUserDto } from '../dto';
import {
  _getActiveAggregationFilter,
  _getCountAggregationQuery,
  _getEmailAggregationFilter,
  _getIdAggregationFilter,
  _getNameAggregationFilter,
} from 'src/shared/helpers/aggregations';
import { Query as Iquery } from 'src/shared/interfaces';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findOne(queryObj: any = {}): Promise<User | undefined> {
    return this.userModel.findOne(queryObj);
  }

  async createUser(user: CreateUserDto) {
    const checkUserExist = await this.findOne({ email: user.email });

    if (checkUserExist) {
      throw new BadRequestException({
        message: `User with given email already exists`,
      });
    }

    const payload = { ...user, uid: nanoid() };

    // CREATING USER
    const userCreated = await this.userModel.create(payload);

    return userCreated;
  }

  async updateUser(payload: UpdateUserDto, filter = {}) {
    return this.userModel.findOneAndUpdate(filter, payload, {
      new: true,
    });
  }

  async getAllUsers(query: Iquery = {}) {
    const baseQuery = [
      {
        $match: {
          $and: [
            ..._getIdAggregationFilter(query),
            ..._getActiveAggregationFilter(query),
            ..._getEmailAggregationFilter(query),
            ..._getNameAggregationFilter(query),
          ],
        },
      },
    ];

    console.log('QUERY', JSON.stringify(baseQuery));

    return this.userModel.aggregate(baseQuery);
  }
}
