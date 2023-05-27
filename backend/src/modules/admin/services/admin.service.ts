// THIRD PARTY IMPORTS
import { Injectable } from '@nestjs/common';

// INNER IMPORTS
import { UpdateUserDto } from '../dto';
import { UserService } from 'src/modules/user/services/user.service';
import { Query as IQuery } from 'src/shared/interfaces';

@Injectable()
export class AdminService {
  constructor(private userService: UserService) {}

  async updateUser(userId: string, payload: UpdateUserDto) {
    const updatedUser = await this.userService.updateUser(payload, {
      uid: userId,
    });

    return updatedUser;
  }

  getParsedQuery(query: IQuery = {}) {
    let { name, email, uid, active = true, count } = query;

    active = [true, 'true'].includes(active);
    uid = uid ? (Array.isArray(uid) ? uid : [uid]) : null;
    name = name ? (Array.isArray(name) ? name : [name]) : null;
    email = email ? (Array.isArray(email) ? email : [email]) : null;
    count = [true, 'true'].includes(count) ? count : null;

    return {
      name,
      email,
      uid,
      active,
      count,
    };
  }
}
