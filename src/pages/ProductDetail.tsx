import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ChevronRight, Minus, Plus, ShoppingCart, Star, RotateCcw } from 'lucide-react';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = getProductById(productId || '');
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">Sorry, the product you are looking for does not exist.</p>
            <Link to="/" className="btn-primary">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link to={`/category/${product.category}`} className="hover:text-primary">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-gray-700">{product.title}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-full object-contain aspect-square" 
            />
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                    size={18} 
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-500">{product.rating.toFixed(1)} rating</span>
            </div>
            
            {/* Price */}
            <div className="text-2xl font-bold text-primary mb-4">
              ₹{product.price.toFixed(2)}
            </div>
            
            {/* Description */}
            <p className="text-gray-700 mb-6">
              {product.description}
            </p>
            
            {/* Quantity Selector */}
            {product.inStock ? (
              <>
                <div className="flex items-center mb-6">
                  <span className="mr-4 font-medium">Quantity:</span>
                  <div className="flex items-center border rounded overflow-hidden">
                    <button 
                      onClick={decreaseQuantity}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-2 font-medium text-center w-12">{quantity}</span>
                    <button 
                      onClick={increaseQuantity}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                
                {/* Add to Cart Button */}
                <Button 
                  className="w-full mb-6 py-6 text-lg"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
              </>
            ) : (
              <div className="mb-6">
                <div className="bg-red-50 text-red-700 px-4 py-3 rounded-md">
                  This product is currently out of stock.
                </div>
              </div>
            )}
            
            {/* Additional Info - Only keeping Easy Returns */}
            <div className="border-t pt-6">
              <div className="flex items-start">
                <RotateCcw className="mr-3 h-5 w-5 text-gray-600 mt-0.5" />
                <div>
                  <h3 className="font-medium">Easy Returns</h3>
                  <p className="text-sm text-gray-600">Return products within 30 days for a full refund.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
