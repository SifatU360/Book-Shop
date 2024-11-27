import { Router } from "express";
import { bookController } from "./product.controller";

const userRouter = Router();



userRouter.get('/:productId', bookController.getSingleBook);
userRouter.put('/:productId', bookController.updateBook);
userRouter.delete('/:productId', bookController.deleteBook);
userRouter.get('/', bookController.getAllBooks);
userRouter.post('/', bookController.createBook );

export default userRouter;