// THIRD PARTY IMPORTS
import {
  Body,
  Controller,
  HttpCode,
  Param,
  Patch,
  Post,
  Req,
  Query,
  UseGuards,
  Get,
  Delete,
  UnauthorizedException,
} from '@nestjs/common';

// INNER IMPORTS
import { CustomRequest } from 'src/shared/interfaces';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { AdminService } from '../services/admin.service';
import { UserService } from 'src/modules/user/services/user.service';
import { AuthService } from 'src/modules/auth/services/auth.service';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from 'src/shared/dto';

@Controller('admin')
export class AdminController {
  constructor(
    private authService: AuthService,
    private adminService: AdminService,
    private userService: UserService,
  ) {}

  // AUTH
  @Post('/login')
  async login(@Body() payload: LoginUserDto) {
    const loginAdmin = await this.authService.signIn(payload, 'admin');

    return loginAdmin;
  }

  @Post('/signup')
  @HttpCode(201)
  async signUp(@Body() payload: CreateUserDto) {
    const createdAdmin = await this.authService.signUp(payload, 'admin');

    return createdAdmin;
  }

  // MAIN FUNCTIONS
  @Post('/create-user')
  @HttpCode(201)
  async createUser(@Body() payload: CreateUserDto) {
    const createdUser = await this.authService.signUp(
      payload,
      payload.role || 'user',
    );

    return createdUser;
  }

  @UseGuards(AuthGuard)
  @Get(['/get-users', '/get-users/:userId'])
  async getUsers(
    @Query() query: any,
    @Param('userId') userId: string | null = null,
  ) {
    const parsedQuery = this.adminService.getParsedQuery(query);

    if (userId) {
      parsedQuery.uid = userId;
    }

    const allUsers = await this.userService.getAllUsers(parsedQuery);

    return allUsers;
  }

  @Patch('/update-user/:userId')
  @UseGuards(AuthGuard)
  async updateUser(
    @Body() payload: UpdateUserDto,
    @Param('userId') userId: string,
    @Req() req: CustomRequest,
  ) {
    if (req?.user?.role !== 'admin') {
      throw new UnauthorizedException({
        message: "user cannot edit other users' profile",
      });
    }

    const updatedUser = await this.adminService.updateUser(userId, payload);

    return updatedUser;
  }

  @Delete('/delete-user/:useId')
  @UseGuards(AuthGuard)
  @HttpCode(201)
  async deleteUser(@Param('userId') userId: string, @Req() req: CustomRequest) {
    if (req?.user?.role !== 'admin') {
      throw new UnauthorizedException({
        message: 'user cannot delete or update other users',
      });
    }

    await this.adminService.updateUser(userId, { active: false });
  }
}
