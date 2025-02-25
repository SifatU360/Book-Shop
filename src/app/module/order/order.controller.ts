/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { orderService } from './order.service';

const addOrder = async (req: Request, res: Response) => {
  try {
    const playload = req.body;

    const result = await orderService.createOrder(playload);

    res.status(201).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res
      .status(400)
      .json({
        message: 'Order created failed',
        success: false,
        error,
        stack: error.stack,
      });
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getOrders();
    if (result.length === 0) {
      return res.status(404).json({
        message: 'No orders found',
        success: false,
        data: result,
      });
    }

    res.status(200).json({
      message: 'Orders retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res
      .status(500)
      .json({
        message: 'Error retrieving orders',
        success: false,
        error,
        stack: error.stack,
      });
  }
};

const getRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await orderService.calculateRevenue();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: { totalRevenue },
    });
  } catch (error: any) {
    res
      .status(500)
      .json({
        message: 'Error calculating revenue',
        success: false,
        error,
        stack: error.stack,
      });
  }
};

export const orderController = {
  addOrder,
  getOrders,
  getRevenue,
};
