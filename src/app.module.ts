import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configOptions } from './config/config-options';
import { PetModule } from './pet/pet.module';
@Module({
  imports: [
    ConfigModule.forRoot(configOptions),
    UserModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const mongoConfig = configService.get('mongo');
        return {
          uri: mongoConfig.uri,
        };
      },
      inject: [ConfigService],
    }),
    PetModule,
  ],
  controllers: [AppController],
  providers: [ConfigModule, AppService],
})
export class AppModule {}
