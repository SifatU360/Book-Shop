import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { AuthServices } from './auth.services';
import config from '../../config';


const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  const { refreshToken, accessToken } = result;

  // Expire the previous token if it exists
  // if (req.cookies.token) {
  //   res.clearCookie('token');
  // }

  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: true,
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Login successful',
    data: {
      token: accessToken,
    },
  });
});

const updatePassword = catchAsync(async (req, res) => {
    const result = await AuthServices.updatePasswordInDB(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Password updated successfully',
      data: result,
    });
  });

export const AuthController = {
    updatePassword,
  loginUser,
};