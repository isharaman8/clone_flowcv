// THIRD PARTY IMPORTS
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

// INNER IMPORTS
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import appConfig from 'config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [appConfig], isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // Import the ConfigModule
      useFactory: async (configService: ConfigService) => {
        return {
          uri: configService.get('mongo_db.url'),
          useNewUrlParser: true,
          useUnifiedTopology: true,
        };
      },
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    AdminModule,
  ],
})
export class AppModule {}
