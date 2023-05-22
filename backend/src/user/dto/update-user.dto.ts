// THIRD PARTY IMPORTS
import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsEmail, IsEnum, IsBoolean } from 'class-validator';

const RoleEnum = {
  admin: 'admin',
  user: 'user',
};

class UserDto {
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsString()
  @IsEnum(RoleEnum)
  readonly role: string;

  @IsBoolean()
  readonly active: boolean;
}

export class UpdateUserDto extends PartialType(UserDto) {}
