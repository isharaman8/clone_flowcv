// THIRD PARTY IMPORTS
import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Subscription extends Document {
  @Prop({ required: true, unique: true })
  uid: string;

  @Prop({ required: true })
  name: string;

  @Prop({ default: null })
  description: string;

  @Prop({ required: true })
  created_by: string;

  @Prop({ default: 0 })
  price: number;

  @Prop({ required: true, default: true })
  active: boolean;

  @Prop({ required: true })
  duration: number;

  @Prop({})
  deleted_by: string;

  @Prop({})
  deleted_at: Date;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
