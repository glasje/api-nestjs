import { UserDto } from "./dto/user.dto";
import { User } from "./interfaces/user.interface";

 

export const USER_REPOSITORY = 'UserRepository';

export interface UserRepository {
  findAll(): Promise<User[]>;
  createUser(createUserDto: UserDto): Promise<User>;
}
