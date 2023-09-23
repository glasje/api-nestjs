import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument, UserModel } from './schemas/user.schema';
import { Document } from 'mongoose';
import { UserRepository } from './user.repository';
import { UserDto } from './dto/user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserMongoRepository implements UserRepository {
  constructor(@InjectModel(User.name) private userModel: UserModel) {}

  async findAll() {
    const users = await this.userModel.find().lean();

    return users.map((user) => this.mapToUser(user));
  }

  async createUser(createUserDto: UserDto): Promise<User> {
    const userCreated = await new this.userModel(createUserDto).save();

    return this.mapToUser(userCreated);
  }

  private mapToUser(rawUser: User): User {
    const user = new User();
    user.username = rawUser.username;
    user.firstName = rawUser.firstName;
    user.lastName = rawUser.lastName;
    user.email = rawUser.email;
    user.password = rawUser.password;
    user.phone = rawUser.phone;

    return user;
  }
}
