// THIRD PARTY IMPORTS
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  @IsNotEmpty()
  readonly email: number;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
