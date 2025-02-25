import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, {  Request, Response, Application } from 'express'
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use('/api/v1', router);
app.use(
   cors({
   //   origin: ['http://localhost:5173', 'https://book-bliss-alpha.vercel.app'],
     credentials: true,
   }),
 );
 
app.get('/', (req:Request, res:Response) => {
   res.send({
    status: true,
    message:"Server Live"
   })
})
app.use(globalErrorHandler);

export default app;






