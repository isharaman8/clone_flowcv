// THIRD PARTY IMPORTS
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsEnum,
  IsBoolean,
} from 'class-validator';

const RoleEnum = {
  admin: 'admin',
  user: 'user',
};

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(RoleEnum)
  readonly role: string;

  @IsBoolean()
  readonly active: boolean;
}