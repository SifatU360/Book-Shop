import { Router } from 'express';
import { bookController } from './product.controller';

const router = Router();

router.post('/create-new-book', bookController.createBook);
router.get('/get-all-books', bookController.getAllBooks);
router.get('/get-book/:id', bookController.getSingleBook);
router.get('/category', bookController.numberOfCategory);
router.get('/authors', bookController.getAuthors);
router.patch("/delete-book/:id", bookController.deleteBook)
router.put("/update-book/:id", bookController.updateBook)
export const BookRoutes = router;