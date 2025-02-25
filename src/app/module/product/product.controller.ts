import { productService } from './product.service';
import catchAsync from '../../utils/catchAsync';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';


const createBook =  catchAsync(async (req, res) => {
  const result = await productService.addBook(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book created successfully',
    data: result,
  });
});

const getAllBooks = catchAsync(async (req, res) => {
  const queries = req.query;
  // console.log(queries);
  const result = await productService.getAllBooks(queries);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully',
    data: result,
  });
});

const getSingleBook = catchAsync(async (req, res) => {
  const result = await productService.getSingleBook(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully',
    data: result,
  });
});

const updateBook =  catchAsync(async (req, res) => {
  const result = await productService.updateBook(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Updated successfully',
    data: result,
  });
});

const numberOfCategory = catchAsync(async (req, res) => {
  const result = await productService.NumberOfCategory();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully',
    data: result,
  });
});


const deleteBook = catchAsync(async (req, res) => {
  const result = await productService.deleteBook(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Deleted successfully',
    data: result,
  });
});


const getAuthors = catchAsync(async (req, res) => {
  const result = await productService.GetAuthors();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully',
    data: result,
  });
});

export const bookController = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  numberOfCategory,
  deleteBook,
  getAuthors,
};
