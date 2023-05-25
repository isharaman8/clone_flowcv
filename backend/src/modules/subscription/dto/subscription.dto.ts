import { PartialType } from '@nestjs/mapped-types';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateSubscriptionDto {
  @IsString()
  @IsOptional()
  uid: string;

  @IsString()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsNumber()
  @IsOptional()
  readonly price: number;

  @IsBoolean()
  @IsOptional()
  readonly active?: boolean;

  @IsString()
  @IsOptional()
  deleted_by?: string;

  @IsDate()
  @IsOptional()
  deleted_at?: Date;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  created_by?: string;

  @IsNumber()
  @IsNotEmpty()
  duration: number;
}

export class UpdateSubscriptionDto extends PartialType(CreateSubscriptionDto) {}
