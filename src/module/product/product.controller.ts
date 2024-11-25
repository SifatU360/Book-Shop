import { Request, Response } from 'express';
import { productService } from './product.service';

const createBook = async (req: Request, res: Response) => {
  try {
    const playload = req.body;
    const result = await productService.addBook(playload);
    res.status(201).json({
      message: 'Book created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res
      .status(400)
      .json({
        message: 'Failed to add book',
        success: false,
        error,
        stack: error.stack,
      });
  }
};


const getAllBooks = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await productService.getAllBooks(searchTerm as string);
    if (result.length === 0) {
      throw new Error('No books found by your search term');
    }

    res.status(200).json({
      message: 'Books retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error: unknown) {
    if (error.message === 'No books found by your search term') {
      res
        .status(404)
        .json({
          message: 'No books found by your search term',
          success: false,
        });
    } else {
      res.status(500).json({
        message: 'Error retrieving books',
        success: false,
      });
    }
  }
};

const getSingleBook = async (req: Request, res: Response) => {
  try {

    const productId = req.params;
    const result = await productService.getSingleBook(productId);
    
    res.status(200).json({
      message: 'Book retrieved successfully',
      success: true,
      data: result})
    
  
  } catch (error:unknown) {
    res
      .status(500)
      .json({
        message: 'Error retrieving book',
        success: false,
        error,
        stack: error.stack,
      });
  }
};

const updateBook = async (req: Request, res: Response) => {
  try {
    const result = await productService.updateBook(
      req.params.productId,
      req.body,
    );

    res.status(200).json({
      message: 'Book updated successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Error updating book',
        success: false,
        error,
        stack: error.stack,
      });
  }
};

const deleteBook = async (req: Request, res: Response) => {
  try {
    await productService.deleteBook(req.params.productId);
    res
      .status(200)
      .json({ message: 'Book deleted successfully', success: true, data: {} });
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Error deleting book',
        success: false,
        error,
        stack: error.stack,
      });
  }
};
export const bookController = {
  createBook,
  // getBooks,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
