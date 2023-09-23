import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { UserSchema } from './schemas/user.schema';
import { USER_REPOSITORY } from './user.repository';
import { UserMongoRepository } from './user-mongo.repository';

@Module({
  imports:[  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),],
  controllers: [UserController],
  providers: [UserService,
    {
      provide: USER_REPOSITORY,
      useClass: UserMongoRepository,
    },]
})
export class UserModule {}
