// THIRD PARTY IMPORTS
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsEnum,
  IsBoolean,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

const RoleEnum = {
  admin: 'admin',
  user: 'user',
};

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(RoleEnum)
  @IsOptional()
  @ApiProperty()
  role?: string;

  @IsBoolean()
  @ApiProperty()
  @IsOptional()
  readonly active?: boolean;
}

export class LoginUserDto {
  @IsEmail()
  @IsNotEmpty()
  readonly email: number;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
