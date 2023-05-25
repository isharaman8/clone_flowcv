// THIRD PARTY IMPORTS
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Purchase {
  @Prop({ required: true })
  uid: string;

  @Prop({ required: true })
  user_uid: string;

  @Prop({ required: true, enum: ['individual_purchase', 'subscription'] })
  purchase_type: string;

  @Prop({ required: true })
  purchase_uid: string;

  @Prop({ default: null })
  purchase_valid_till: Date;

  @Prop({ default: null })
  purchase_valid_days: number;

  @Prop({ default: 0 })
  price: number;

  @Prop({ default: null })
  purchased_date: Date;

  @Prop({ default: false })
  purchase_valid_forever: boolean;

  @Prop({ default: true })
  active: boolean;
  // TODO: STORE OTHER TRANSACTION IDs AFTER PAYMENT INTEGRATION
}

export const PurchaseSchema = SchemaFactory.createForClass(Purchase);
