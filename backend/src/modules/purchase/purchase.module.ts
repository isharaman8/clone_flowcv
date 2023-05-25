// THIRD PARTY IMPORTS
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

// INNER IMPORTS
import { PurchaseService } from './services/purchase.service';
import { Purchase, PurchaseSchema } from './schema/purchase.schema';
import { PurchaseController } from './controllers/purchase.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get('jsonwebtoken.jwt_secret'),
          signOptions: { expiresIn: '30d' },
        };
      },
      inject: [ConfigService],
    }),

    MongooseModule.forFeature([
      { name: Purchase.name, schema: PurchaseSchema },
    ]),
  ],
  providers: [PurchaseService],
  controllers: [PurchaseController],
  exports: [PurchaseModule],
})
export class PurchaseModule {}
