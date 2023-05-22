// THIRD PARTY IMPORTS
import { JwtService } from '@nestjs/jwt';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { hash, verify } from 'argon2';

// INNER IMPORTS
import { UserService } from 'src/modules/user/services/user.service';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from 'src/shared/dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(loginObj: LoginUserDto, role: string = 'user') {
    const user = await this.userService.findOne({
      email: loginObj.email,
      role,
    });

    if (!user) {
      throw new UnauthorizedException({
        message: 'email or password incorrect',
      });
    }

    const verifyPassword = await verify(user.password, loginObj.password);

    if (!verifyPassword) {
      throw new UnauthorizedException({
        message: 'email or password incorrect',
      });
    }

    const payload = {
      email: user.email,
      name: user.name,
      uid: user.uid,
      role: user.role,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      user: payload,
    };
  }

  async signUp(userObj: CreateUserDto, role = 'user') {
    userObj.role = role;
    userObj.password = await hash(userObj.password);

    const user = await this.userService.createUser(userObj);

    const payload = {
      email: user.email,
      name: user.name,
      uid: user.uid,
      role: user.role,
      active: true,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
      user: payload,
    };
  }

  async getProfile(email: string) {
    const user = await this.userService.findOne({ email });

    if (!user) {
      throw new BadRequestException({
        message: 'no user found with give email',
      });
    }

    return user;
  }

  async updateUserProfile(payload: UpdateUserDto, user: any) {
    if (user.role !== 'admin') {
      if (payload.role) {
        throw new UnauthorizedException({
          message: 'only admin can update role key',
        });
      }

      if (payload.active) {
        throw new UnauthorizedException({
          message: 'only admin can update active key',
        });
      }
    }

    const updatedUser = await this.userService.updateUser(payload, {
      email: user.email,
      uid: user.uid,
    });

    return updatedUser;
  }

  async deleteUserProfile(uid: string) {
    await this.userService.updateUser({ active: false }, { uid });
  }
}
