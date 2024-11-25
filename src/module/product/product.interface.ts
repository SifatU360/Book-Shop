export interface IProduct {
  title: string;
  author: string;
  price: number;
  // category : string;
  category: 'Fiction' | 'Science' | 'SelfDevelopment' | 'Poetry' | 'Religious';
  description: string;
  quantity: number;
  inStock: boolean;
}
