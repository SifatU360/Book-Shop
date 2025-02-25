import { Schema, model } from 'mongoose';
import { IProduct } from './product.interface';


const bookSchema = new Schema <IProduct>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: {
      type: String,
      enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
      required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, default: 0 },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const Book = model<IProduct>('Book', bookSchema);

export default Book;
