import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';

export class CreateTemplateDto {
  @IsString()
  @IsOptional()
  uid: string;

  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsObject()
  @IsOptional()
  readonly content: object;

  @IsObject()
  @IsOptional()
  readonly personalDetails: object;

  @IsObject()
  @IsOptional()
  readonly customization: object;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  created_by?: string;

  @IsObject()
  @IsOptional()
  resume_data: object;
}

export class UpdateTemplateDto extends PartialType(CreateTemplateDto) {}
