import bcrypt from 'bcrypt';
import { User } from '../user/user.model';
import httpStatus from 'http-status';
import config from '../../config';
import AppError from '../../errors/AppError';
import { ILoginUser } from './auth.interface';
import { createToken } from './auth.utils';


const loginUser = async (payload: ILoginUser) => {
    // checking if the user is exist
    const user = await User.isUserExistsByCustomEmail(payload.email);
  
    if (!user) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid credentials');
    }
  
    const isBlocked = user?.activity;
  
    if (!isBlocked) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'This user is blocked!');
    }
  
    //checking if the password is correct
  
    if (!(await User.isPasswordMatched(payload?.password, user?.password))){
      console.log(user?.password);
      console.log(payload?.password);
      throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid credentialss');
  
    }
    //create token and sent to the  client
  
    const jwtPayload = {
      email: user.email,
      role: user.role as string,
    };
  
    
    
    const accessToken = createToken(
      jwtPayload,
      config.jwt_access_secret as string,
      24 * 60 * 60,
    
    );
  
    const refreshToken = createToken(
      jwtPayload,
      config.jwt_refresh_secret as string,
      1000 * 60 * 60 * 24 * 365,
    );
  
    // console.log('Generated Acces Token ', accessToken);
    //   console.log("JWT Secret:", config.jwt_access_secret);
    // console.log("JWT Expiry:", config.jwt_access_expires_in);
  
    return {
      accessToken,
      refreshToken
    };
  };

const updatePasswordInDB = async (payload: {
  email: string;
  oldPassword: string;
  newPassword: string;
}) => {
  const { email, oldPassword, newPassword } = payload;
  console.log('from line 38', email, oldPassword, newPassword);
  // Checking user exists in db or not
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  // Checking old password is correct or not
  const isPasswordMatched = bcrypt.compareSync(oldPassword, user.password);
  console.log('from line 43', isPasswordMatched);
  if (!isPasswordMatched) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid password');
  }
  const hashedNewPassword = bcrypt.hashSync(
    newPassword,
    Number(config.bcrypt_salt_rounds),
  );
  user.password = hashedNewPassword;
  const result = await user.save();
  return result;
};

export const AuthServices = { loginUser, updatePasswordInDB };