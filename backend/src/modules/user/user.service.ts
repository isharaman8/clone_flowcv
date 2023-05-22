// THIRD PARTY IMPORTS
import { nanoid } from 'nanoid';
import { Model } from 'mongoose';

// INNER IMPORTS
import { CreateUserDto, UpdateUserDto } from '../../shared/dto';
import { InjectModel } from '@nestjs/mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

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
}
