import express from 'express';
import { orderController } from './order.controller';

const router = express.Router();

router.get('/revenue', orderController.getRevenue);
router.get('/', orderController.getOrders);
router.post('/', orderController.addOrder);

export default router;
