import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { orderService } from './order.service';
import { IUser } from '../user/user.interface';

const createOrder = catchAsync(async (req, res) => {
  const user = req.user;

  const order = await orderService.createOrder(
    user as IUser,
    req.body,
    req.ip!,
  );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Order placed successfully',
    data: order,
  });
});

const getOrders = catchAsync(async (req, res) => {
  const order = await orderService.getOrders();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Order retrieved successfully',
    data: order,
  });
});

const verifyPayment = catchAsync(async (req, res) => {
  const order = await orderService.verifyPayment(req.query.order_id as string);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Order verified successfully',
    data: order,
  });
});

const changeOrderStatus = catchAsync(async (req, res) => {
  const order = await orderService.changeOrderStatus(
    req.params.id,
    req.query.status as string,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Order status changed successfully',
    data: order,
  });
});

const getCustomerOrder = catchAsync(async (req, res) => {
  const { email } = req.user;
  const order = await orderService.getCustomerOrdersFromDb(email);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Order retrieved successfully',
    data: order,
  });
});
export const orderController = {
  createOrder,
  verifyPayment,
  getOrders,
  changeOrderStatus,
  getCustomerOrder,
};