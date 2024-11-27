import { IProduct } from './product.interface';
import Book from './product.model';


const addBook = async (product: IProduct): Promise<IProduct> => {
  const result = await Book.create(product);
  return result;
};



const getAllBooks = async(searchTerm?: string) => {
  try {
    const filter = searchTerm
    ? {
      $or: [
        { title: { $regex: searchTerm, $options: 'i' } },
        { author: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
      ],
    }
    : {};
    const result = await Book.find(filter);
    return result;
  } catch (error) {
    throw new Error('Failed to retrieve books: ' + error.message);
  }
}


const getSingleBook = async (id: string) => {
  // console.log(id);
  const result = await Book.findById(id);
  // console.log(result)
  return result;
};

const updateBook = async (id: string, updateData: IProduct) => {
  const result = await Book.findByIdAndUpdate(id, updateData, { new: true });

  return result;
};

const deleteBook = async (id: string) => {
  const result = await Book.findByIdAndDelete(id);
  return result;
};
export const productService = {
  addBook,
  // getBooks,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
