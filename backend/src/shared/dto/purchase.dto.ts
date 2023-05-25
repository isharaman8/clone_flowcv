// THIRD PARTY IMPORTS
import { PartialType } from '@nestjs/mapped-types';
import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsNumber,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class PurchaseDto {
  @IsString()
  @IsNotEmpty()
  purchase_type: string;

  @IsString()
  @IsNotEmpty()
  purchase_uid: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsDate()
  @IsNotEmpty()
  purchase_date: Date;

  @IsDate()
  @IsOptional()
  purchase_valid_till?: Date;

  @IsBoolean()
  @IsOptional()
  purchase_valid_forever?: boolean;

  @IsBoolean()
  @IsOptional()
  active?: boolean;
}

export class UpdatePurchaseDto extends PartialType(PurchaseDto) {}
