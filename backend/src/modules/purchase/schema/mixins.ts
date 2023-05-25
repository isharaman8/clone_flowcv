import { Prop, Schema } from '@nestjs/mongoose';
import { PURCHASE_ENUM } from 'src/shared/constants';

@Schema()
export class PurchaseType {
  @Prop({ required: true })
  uid: string;

  @Prop({ required: true, enum: PURCHASE_ENUM })
  type: string;
}
