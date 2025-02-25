import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';
import bcrypt from 'bcrypt';
import Config from '../../config';
const createNewUser = catchAsync(async (req, res) => {
  const hashedPassword = bcrypt.hashSync(
    req.body.password,
    Number(Config.bcrypt_salt_rounds),
  );
  const userDataWithCncryptedPassword = {
    ...req.body,
    password: hashedPassword,
  };
  const result = await UserServices.RegisterUserIntoDB(
    userDataWithCncryptedPassword,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

const RetriveUsers = catchAsync(async (req, res) => {
  const result = await UserServices.RetriveAllUserFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User retrieved successfully',
    data: result,
  });
});

const deactivateUser = catchAsync(async (req, res) => {
  const result = await UserServices.deactivateUser(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deactivated successfully',
    data: result,
  });
});
const activateUser = catchAsync(async (req, res) => {
  const result = await UserServices.activateUser(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User activated successfully',
    data: result,
  });
});



export const UserControllers = {
  createNewUser,
  RetriveUsers,
  deactivateUser,
  activateUser,
  
};