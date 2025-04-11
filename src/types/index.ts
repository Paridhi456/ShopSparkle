
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
  featured?: boolean;
}

export type CartItem = {
  product: Product;
  quantity: number;
};
