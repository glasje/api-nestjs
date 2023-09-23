import { IsInt, IsString, Min } from 'class-validator';

export class UserDto { 
  @IsString()
  username:   string;
  @IsString()
  firstName:  string;
  @IsString()
  lastName:   string;
  @IsString()
  email:      string;
  @IsString()
  password:   string;
  @IsString()
  phone:      string; 
}
