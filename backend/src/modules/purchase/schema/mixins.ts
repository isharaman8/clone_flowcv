import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class PurchaseType {
  @Prop({ required: true })
  uid: string;

  @Prop({ required: true, enum: ['subscription', 'individual_product'] })
  type: string;
}
