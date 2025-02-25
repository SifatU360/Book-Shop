/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Types } from 'mongoose';
import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export interface IUser {
  id?: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  passwordChangeAt?: Date;
  phone?: string;
  address?: string;
  city?: string;
  createdAt?: Date;
  updatedAt?: Date;
  activity: 'activated' | 'deactivated';
}

export interface UserModel extends Model<IUser> {
    //instance methods for checking if the user exist
    isUserExistsByCustomEmail(email: string): Promise<IUser>;
    //instance methods for checking if passwords are matched
    isPasswordMatched(
      plainTextPassword: string,
      hashedPassword: string,
    ): Promise<boolean>;
    isJWTIssuedBeforePasswordChanged(
      passwordChangedTimestamp: Date,
      jwtIssuedTimestamp: number,
    ): boolean;
  }

  export type TUserRole = keyof typeof USER_ROLE;