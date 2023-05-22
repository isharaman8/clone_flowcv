// THIRD PARTY IMPORTS
import { Injectable, UnauthorizedException } from '@nestjs/common';

// INNER IMPORTS
import { UpdateUserDto } from 'src/shared/dto';
import { UserService } from 'src/modules/user/services/user.service';

@Injectable()
export class AdminService {
  constructor(private userService: UserService) {}

  async updateUser(userId: string, payload: UpdateUserDto) {
    const updatedUser = await this.userService.updateUser(payload, {
      uid: userId,
    });

    return updatedUser;
  }

  getParsedQuery(query: any = {}) {
    let { name, email, uid, active = true } = query;

    active = [true, 'true'].includes(active);
    uid = uid ? (Array.isArray(uid) ? uid : [uid]) : null;
    name = name ? (Array.isArray(name) ? name : [name]) : null;
    email = email ? (Array.isArray(email) ? email : [email]) : null;

    return {
      name,
      email,
      uid,
      active,
    };
  }
}
