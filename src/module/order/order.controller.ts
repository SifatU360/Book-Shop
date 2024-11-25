import { Request, Response } from 'express';
import { orderService } from './order.service';
// import bookValidationSchema from '../product/product.validation';

const addOrder = async (req: Request, res: Response) => {
  try {
    const playload = req.body;
    // const { error, value } = bookValidationSchema.validate(product);
    const result = await orderService.createOrder(playload);
    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'Something went wrong !',
    //     error: error.details,
    //   });
    // }
    res
      .status(201)
      .json({
        message: 'Order created successfully',
        success: true,
        data: result,
      });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

const getOrders = async (_req: Request, res: Response) => {
  try {
    const result = await orderService.getOrders();
    res
      .status(200)
      .json({
        message: 'Orders retrieved successfully',
        success: true,
        data: result,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error retrieving orders', success: false, error,stack: error.stack  });
  }
};

const getRevenue = async (_req: Request, res: Response) => {
  try {
    const totalRevenue = await orderService.calculateRevenue();
    res
      .status(200)
      .json({
        message: 'Revenue calculated successfully',
        success: true,
        data: { totalRevenue },
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error calculating revenue', success: false ,error,stack: error.stack });
  }
};

export const orderController = {
  addOrder,
  getOrders,
  getRevenue,
};
