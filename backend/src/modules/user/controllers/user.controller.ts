// THIRD PARTY IMPORTS
import { Controller } from '@nestjs/common';

// INNER IMPORTS
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
}
