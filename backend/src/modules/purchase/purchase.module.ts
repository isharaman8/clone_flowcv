// THIRD PARTY IMPORTS
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// INNER IMPORTS
import { PurchaseService } from './services/purchase.service';
import { Purchase, PurchaseSchema } from './schema/purchase.schema';
import { PurchaseController } from './controllers/purchase.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Purchase.name, schema: PurchaseSchema },
    ]),
  ],
  providers: [PurchaseService],
  controllers: [PurchaseController],
  exports: [PurchaseModule],
})
export class PurchaseModule {}
