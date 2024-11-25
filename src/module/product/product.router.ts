import { Router } from "express";
import { bookController } from "./product.controller";

const userRouter = Router();

userRouter.post('/', bookController.createBook );
userRouter.get('/', bookController.getAllBooks);
userRouter.get('/:productId', bookController.getSingleBook);
userRouter.put('/:productId', bookController.updateBook);
userRouter.delete('/:productId', bookController.deleteBook);

export default userRouter;