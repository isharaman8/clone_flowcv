// THIRD PARTY IMPR
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// INNER IMPORTS
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
