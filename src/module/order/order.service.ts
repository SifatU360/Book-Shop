import { Order } from './order.model';
import Book from '../product/product.model';
import { IOrder } from './order.interface';

const createOrder = async (orderData: IOrder) => {
  const book = await Book.findById(orderData.product);

  if (!book) {
    throw new Error('Book not found');
  }

  if (book.quantity < orderData.quantity) {
    throw new Error('Insufficient stock');
  }

  const totalPrice = book.price * orderData.quantity;

  book.quantity -= orderData.quantity;
  book.inStock = book.quantity > 0;
  await book.save();

  const order = new Order({
    ...orderData,
    totalPrice,
  });
  const result = await order.save();
  return result;
};

const getOrders = async () => {
  const result = await Order.find();
  return result;
};

const calculateRevenue = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);
  return result[0]?.totalRevenue || 0;
};


export const orderService = {
  createOrder,
  getOrders,
  calculateRevenue
}