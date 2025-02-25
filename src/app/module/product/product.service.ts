
import QueryBuilder from '../../builder/QueryBuilder';
import { IBook } from './product.interface';
import Book from './product.model';


const addBook = async (product: IBook): Promise<IBook> => {
  const result = await Book.create(product);
  return result;
};




const getAllBooks = async (query: Record<string, unknown>) => {
  const AllBookQuery = new QueryBuilder(Book.find(), query)
    .search(['author', 'category', 'title'])
    .filter()
    .limit();


  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const documentCount = await AllBookQuery.countTotal();
  const result = await AllBookQuery.modelQuery;
  return result;
};

const getSingleBook = async (id: string) => {
  const result = await Book.findById(id);
  return result;
};

const updateBook = async (_id: string, payload: Partial<IBook>) => {
  const result = await Book.findByIdAndUpdate(_id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const NumberOfCategory = async () => {
  const result = await Book.aggregate([
    { $group: { _id: '$category', count: { $sum: 1 } } },
  ]);
  return result;
};

const deleteBook = async (_id: string) => {
  const result = await Book.findByIdAndUpdate(
    _id,
    { isDeleted: true },
    { new: true, runValidators: true },
  );
  // console.log('book Deleted', result);
  return result;
};

const GetAuthors = async () => {
  const result = await Book.aggregate([
    { $group: { _id: '$author', count: { $sum: 1 } } },
  ]);
  return result;
};
export const productService = {
  addBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  NumberOfCategory,
  deleteBook,
  GetAuthors,
};
