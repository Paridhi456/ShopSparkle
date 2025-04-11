
import React from 'react';
import { Link } from 'react-router-dom';

const Shipping = () => {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Processing Times</h2>
            <p className="text-gray-600 mb-3">
              All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Shipping Methods and Delivery Times</h2>
            <p className="text-gray-600 mb-3">
              We offer the following shipping options:
            </p>
            
            <div className="bg-white-50 p-6 rounded-lg mb-4">
              <h3 className="font-medium mb-2">Standard Shipping (5-7 business days)</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Free on orders over ₹500</li>
                <li>₹10 for orders under ₹50</li>
              </ul>
              <p className="text-gray-600 text-sm">
                Standard shipping is available for all locations within the continental United States.
              </p>
            </div>
            
            <div className="bg-white-50 p-6 rounded-lg mb-4">
              <h3 className="font-medium mb-2">Expedited Shipping (2-3 business days)</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>50₹.99 flat rate for all orders</li>
              </ul>
              <p className="text-gray-600 text-sm">
                Expedited shipping is available for all locations within the continental United States.
              </p>
            </div>
            
            <div className="bg-white-50 p-6 rounded-lg">
              <h3 className="font-medium mb-2">International Shipping (7-14 business days)</h3>
              <ul className="list-disc pl-5 mb-4">
                <li>Starting at ₹100.00, calculated at checkout based on destination</li>
              </ul>
              <p className="text-gray-600 text-sm">
                International shipping is available to select countries. Please note that delivery times may be affected by customs processing in your country.
              </p>
            </div>
          </section>
          
         
          
        
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Order Issues</h2>
            <p className="text-gray-600 mb-3">
              If you have any issues with your shipment, such as damaged products or missing items, please contact our customer service team within 48 hours of receiving your order. We will work with you to resolve any problems as quickly as possible.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="text-gray-600 mb-3">
              If you have any questions about our shipping policy, please contact us at:
            </p>
            <ul className="list-disc pl-5">
              <li>Email: support@sparkleshop.com</li>
              <li>Phone: (800) 123-4567</li>
              <li>
                <Link to="/contact" className="text-primary hover:underline">
                  Contact Form
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
