
import { Product } from '../types';

export const products: Product[] = [
  // Clothing Category
  {
    id: 'c1',
    title: 'Classic White TShirt',
    description: 'A comfortable, everyday white t-shirt made from 100% organic cotton. Perfect for any casual occasion.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'clothing',
    rating: 4.5,
    inStock: true,
    featured: true
  },
  {
    id: 'c2',
    title: 'Slim Fit Jeans',
    description: 'Stylish slim fit jeans with a modern cut. Made from high-quality denim with slight stretch for comfort.',
    price: 549.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'clothing',
    rating: 4.3,
    inStock: true
  },
  {
    id: 'c3',
    title: 'Casual Hoodie',
    description: 'Warm and cozy hoodie perfect for those chilly evenings. Features kangaroo pocket and adjustable hood.',
    price: 334.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'clothing',
    rating: 4.7,
    inStock: true
  },
  {
    id: 'c4',
    title: 'Black TShirt',
    description: 'A comfortable, everyday white t-shirt made from 100% organic cotton. Perfect for any casual occasion.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'clothing',
    rating: 4.5,
    inStock: true,
    featured: true
  },
  
  {
    id: 'c5',
    title: 'Summer Dress',
    description: 'Light and flowy summer dress with floral pattern. Perfect for warm weather and casual outings.',
    price: 539.99,
    image: 'https://images.unsplash.com/photo-1713357805066-8fa70d467564?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'clothing',
    rating: 4.6,
    inStock: true
  
  },
  {
     id: 'c6',
    title: 'Classic White Dress',
    description: 'This plain white dress is a staple piece every wardrobe needs. Designed with a clean silhouette and crafted from soft, breathable fabric, its perfect for everyday wear, layering, or styling up for any occasion.',
    price: 539.99,
    image: 'https://images.unsplash.com/photo-1740589389656-789130dd6a05?q=80&w=3067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'clothing',
    rating: 4.6,
    inStock: true
  },{
  id: 'c7',
    title: 'White Hoodie',
    description: 'Turn heads with this graceful white dress, crafted for both elegance and comfort. Whether youre attending a brunch, a summer party, or a casual day out, this dress is your perfect go-to',
    price: 234.99,
    image: 'https://images.unsplash.com/photo-1615397587950-3cbb55f95b77?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'clothing',
    rating: 4.7,
    inStock: true
  },
  // Electronics Category
  {
    id: 'e1',
    title: 'Wireless Headphones',
    description: 'Premium wireless headphones with smart noise-cancellation technology. Experience crystal clear audio with up to 24 hours of battery life.',
    price: 1029.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'electronics',
    rating: 4.8,
    inStock: true,
    featured: true
  },
  {
    id: 'e2',
    title: 'Smart Watch',
    description: 'Track your fitness, check notifications, and more with this feature-packed smartwatch. Water-resistant and long battery life.',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'electronics',
    rating: 4.6,
    inStock: true
  },
  {
    id: 'e3',
    title: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with deep bass and 360° sound. Perfect for outdoor activities and gatherings.',
    price: 1100.99,
    image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'electronics',
    rating: 4.4,
    inStock: true
  },
  {
    id: 'e4',
    title: 'Wireless Charging Pad',
    description: 'Convenient wireless charging pad compatible with all Qi-enabled devices. Fast charging with sleek, minimalist design.',
    price: 950.99,
    image: 'https://images.unsplash.com/photo-1625895197185-efcec01cffe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'electronics',
    rating: 4.2,
    inStock: true
  },
  
  // Home & Garden Category
  {
    id: 'h1',
    title: 'Ceramic Planter Set',
    description: 'Set of 3 modern ceramic planters in varying sizes. Perfect for indoor plants and home decoration.',
    price: 124.99,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'home',
    rating: 4.7,
    inStock: true,
    featured: true
  },
  {
    id: 'h2',
    title: 'Luxury Bed Sheets',
    description: 'Premium 100% Egyptian cotton bed sheets. Soft, breathable, and durable for the ultimate sleeping experience.',
    price: 389.99,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    category: 'home',
    rating: 4.9,
    inStock: true
  },
  {
    id: 'h3',
    title: 'Modern Wall Art',
    description: 'Contemporary abstract wall art to add a touch of elegance to any room. Printed on high-quality canvas.',
    price: 459.99,
    image: 'https://images.unsplash.com/photo-1604434206959-dd9fc2f9b9bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'home',
    rating: 4.5,
    inStock: true
  },
  {
    id: 'h4',
    title: 'Sleek Black Electric Kettle – 1.7L',
    description: 'Elevate your kitchen with this modern black electric kettle that blends style, intelligence, and performance. Designed for todays fast-paced lifestyle, this kettle features a digital temperature display and smart boil control to ensure your beverage is always brewed just right.',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1738520420636-a1591b84723e?q=80&w=2457&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'home',
    rating: 4.8,
    inStock: true
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getAllCategories = (): string[] => {
  return [...new Set(products.map(product => product.category))];
};
