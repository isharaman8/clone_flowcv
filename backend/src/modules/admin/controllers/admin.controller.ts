import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from 'src/modules/auth/services/auth.service';
import { CreateUserDto, LoginUserDto } from 'src/shared/dto';
import { UserService } from 'src/modules/user/user.service';

@Controller('admin')
export class AdminController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('/login')
  async login(@Body() payload: LoginUserDto) {
    const loginAdmin = await this.authService.signIn(payload, 'admin');

    return loginAdmin;
  }

  @Post('/signup')
  async signUp(@Body() payload: CreateUserDto) {
    const createdAdmin = await this.authService.signUp(payload, 'admin');

    return createdAdmin;
  }
}
