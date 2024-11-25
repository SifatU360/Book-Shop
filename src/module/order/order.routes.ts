import express from 'express';
import { orderController } from './order.controller';

const router = express.Router();

router.post('/', orderController.addOrder);
router.get('/', orderController.getOrders);
router.get('/revenue', orderController.getRevenue);

export default router;
