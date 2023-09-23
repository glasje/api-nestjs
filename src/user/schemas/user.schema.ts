import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';


@Schema()
class User {
  @Prop()
  id:string;

  @Prop()
  email: string;

  @Prop()
  username: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  password: string;

  @Prop()
  phone: string;

  @Prop()
  userStatus: number;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);

export type UserModel = Model<UserDocument>;
