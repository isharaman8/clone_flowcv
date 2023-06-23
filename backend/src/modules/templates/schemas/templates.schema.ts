// THIRD PARTY IMPORTS
import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import {
  Content,
  Customization,
  PersonalDetails,
  ResumeData,
} from 'src/shared/interfaces/template.interface';
import { TEMPLATE_ENUM } from 'src/shared/constants';

@Schema({ timestamps: true })
export class Template extends Document {
  @Prop({ required: true, unique: true })
  uid: string;

  @Prop({ required: true })
  title: string;

  @Prop({ type: Object })
  content: Content;

  @Prop({ type: Object })
  personalDetails: PersonalDetails;

  @Prop({ type: Object })
  customization: Customization;

  @Prop({ required: true, enum: TEMPLATE_ENUM })
  type: string;

  @Prop({ required: true })
  created_by: string;

  @Prop({ type: Object })
  resume_data: ResumeData;
}

export const TemplateSchema = SchemaFactory.createForClass(Template);
