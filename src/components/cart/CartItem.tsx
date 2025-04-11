
import React from 'react';
import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/context/CartContext';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(product.id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b">
      <div className="w-full sm:w-24 h-24 mb-4 sm:mb-0 mr-0 sm:mr-4 flex-shrink-0">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover rounded"
          />
        </Link>
      </div>
      <div className="flex-grow">
        <Link to={`/product/${product.id}`} className="text-lg font-medium hover:text-primary transition-colors">
          {product.title}
        </Link>
        <p className="text-gray-600 text-sm mt-1">₹{product.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center mt-4 sm:mt-0">
        <select 
          value={quantity} 
          onChange={handleQuantityChange}
          className="mr-4 p-2 border rounded bg-white"
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map(num => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <p className="font-medium mr-4 w-20 text-right">
          ₹{(product.price * quantity).toFixed(2)}
        </p>
        <Button variant="ghost" size="icon" onClick={handleRemove}>
          <Trash2 className="h-5 w-5 text-gray-500 hover:text-red-500" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
