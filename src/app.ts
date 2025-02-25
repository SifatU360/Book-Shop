import express, {  Request, Response } from 'express'

import userRouter from './app/module/product/product.router';
import orderRouter from './app/module/order/order.routes'
const app = express();

app.use(express.json());

app.use('/api/products', userRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req:Request, res:Response) => {
   res.send({
    status: true,
    message:"Server Live"
   })
})


export default app;