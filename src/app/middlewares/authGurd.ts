import jwt, { JwtPayload } from 'jsonwebtoken';
import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import config from '../config';
import { User } from '../module/user/user.model';
import AppError from '../errors/AppError';

const authGurd = (...roles: string[]) => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers?.authorization;
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized');
    }
    const decodedData = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload;
    const { email, iat, role } = decodedData;
    req.user = decodedData;
    const existUser = await User.findOne({
      email,
    });
    if (!existUser) {
      throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }
    if (existUser?.passwordChangeAt && iat) {
      const passwordChangeAt = Math.floor(
        new Date(existUser?.passwordChangeAt).getTime() / 1000,
      );

      const checkJwtIssuedBeforeLastPasswordChange = passwordChangeAt > iat;
      if (checkJwtIssuedBeforeLastPasswordChange) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized');
      }
    }
    // console.log('roles', roles, 'role', role);
    if (roles.length && !roles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthorized');
    }
    next();
  });
};

export default authGurd;