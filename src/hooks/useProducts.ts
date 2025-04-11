import { useQuery } from '@tanstack/react-query';
import { 
  getAllCategories, 
  getFeaturedProducts, 
  getProductById, 
  getProductsByCategory,
  products as allProducts
} from '../data/products';
import { Product } from '../types';

type Category = {
  id: string;
  name: string;
  description: string;
};

export const useAllProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      return allProducts;
    }
  });
};

export const useProductsByCategory = (categoryName: string) => {
  return useQuery({
    queryKey: ['products', 'category', categoryName],
    queryFn: async () => {
      return getProductsByCategory(categoryName);
    },
    enabled: !!categoryName
  });
};

export const useProduct = (productId: string) => {
  return useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      const product = getProductById(productId);
      if (!product) throw new Error('Product not found');
      return product;
    },
    enabled: !!productId
  });
};

export const useFeaturedProducts = () => {
  return useQuery({
    queryKey: ['products', 'featured'],
    queryFn: async () => {
      return getFeaturedProducts();
    }
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const categoryNames = getAllCategories();
      return categoryNames.map(name => ({
        id: name,
        name: name,
        description: `${name.charAt(0).toUpperCase() + name.slice(1)} products collection`
      })) as Category[];
    }
  });
};

export const useSearchProducts = (searchTerm: string) => {
  return useQuery({
    queryKey: ['products', 'search', searchTerm],
    queryFn: async () => {
      if (!searchTerm || searchTerm.trim() === '') {
        return [];
      }
      
      return allProducts.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
    enabled: !!searchTerm && searchTerm.trim() !== ''
  });
};
