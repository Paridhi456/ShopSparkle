
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import CartItem from '@/components/cart/CartItem';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ShoppingCart } from 'lucide-react';

const Cart = () => {
  const { items, subtotal, clearCart } = useCart();
  
  // Calculate tax (assumed 18% GST)

  // Calculate total
  const total = subtotal

  if (items.length === 0) {
    return (
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center py-12">
            <div className="mb-4 flex justify-center">
              <ShoppingCart size={64} className="text-gray-300" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center pb-4 border-b">
                <h2 className="text-xl font-semibold">Items ({items.length})</h2>
                <Button variant="ghost" onClick={clearCart} className="text-sm text-red-600 hover:text-red-800">
                  Clear Cart
                </Button>
              </div>
              
              <div className="divide-y">
                {items.map(item => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
              
              <div className="mt-6">
                <Link to="/" className="text-primary flex items-center hover:underline">
                  <ShoppingBag className="mr-2 h-4 w-4" /> Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
              
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Link to="/checkout">
                  <Button className="w-full py-6 text-lg">
                    Proceed to Checkout
                  </Button>
                </Link>
                <p className="text-xs text-gray-500 text-center mt-4">
                  By proceeding to checkout, you agree to our <Link to="/policy/privacy" className="underline">Privacy Policy</Link> and <Link to="/policy/terms" className="underline">Terms of Service</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
