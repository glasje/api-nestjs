import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY, UserRepository } from './user.repository';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository,
  ) {}
  async findAll() {
    return this.userRepository.findAll();
  }
  async createUser(createUserDto: UserDto) {
    return await this.userRepository.createUser(createUserDto);
  }
}
