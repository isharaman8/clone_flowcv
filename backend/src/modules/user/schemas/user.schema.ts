// THIRD PARTY IMPORTS
import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  uid: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, enum: ['admin', 'user'] })
  role: string;

  @Prop({ required: true, enum: ['basic', 'standard', 'premium'] })
  plan: string;

  @Prop({ required: true, default: true })
  active: boolean;

  @Prop({ default: null })
  deleted_by: string;

  @Prop({ default: null })
  deleted_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
