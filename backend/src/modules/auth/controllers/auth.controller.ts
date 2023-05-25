// THIRD PARTY IMPORTS
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import argon from 'argon2';

// INNER IMPORTS
import { CustomRequest } from 'src/shared/interfaces';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../../../shared/guards/auth.guard';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from '../dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  @HttpCode(201)
  async signUp(@Body() user: CreateUserDto) {
    user.deleted_at = null;
    user.deleted_by = null;
    user.active = true;

    const data = await this.authService.signUp(user);

    return data;
  }

  @Post('/login')
  async login(@Body() user: LoginUserDto) {
    const data = await this.authService.signIn(user);

    return data;
  }

  @Get('/profile')
  @UseGuards(AuthGuard)
  async getProfile(@Req() req: CustomRequest) {
    const userProfile = await this.authService.getProfile(req.user.email);

    return userProfile;
  }

  @Patch('/update')
  @UseGuards(AuthGuard)
  async updateProfile(
    @Req() req: CustomRequest,
    @Body() payload: UpdateUserDto,
  ) {
    if (payload.password) {
      payload.password = await argon.hash(payload.password);
    }

    const updatedUser = await this.authService.updateUserProfile(
      payload,
      req.user,
    );

    return updatedUser;
  }

  @Delete('/delete')
  @UseGuards(AuthGuard)
  async deleteProfile(@Req() req: CustomRequest) {
    if (!req.user?.uid) {
      throw new BadRequestException('no uid provided');
    }

    await this.authService.deleteUserProfile(req.user.uid);

    return { delete: true, uid: req.user.uid };
  }
}
