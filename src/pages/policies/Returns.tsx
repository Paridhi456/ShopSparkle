
import React from 'react';
import { Link } from 'react-router-dom';

const Returns = () => {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Return & Refund Policy</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Return Policy</h2>
            <p className="text-gray-600 mb-3">
              We want you to be completely satisfied with your purchase. If you're not, we accept returns within 30 days of delivery for a full refund or exchange.
            </p>
          </section>
          
          <section className="mb-8">
            
            
            <p className="text-gray-600 mb-3">
              The following items cannot be returned:
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Gift cards</li>
              <li>Downloadable software products</li>
              <li>Personal care items that have been opened or used</li>
              <li>Items marked as "Final Sale" or "Non-Returnable"</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Return Process</h2>
            <ol className="list-decimal pl-5 mb-4 text-gray-600">
              <li className="mb-2">
                <strong>Initiate a return:</strong> Log in to your account and navigate to your order history, or contact our customer support team to initiate the return process.
              </li>
              <li className="mb-2">
                <strong>Receive a Return Merchandise Authorization (RMA):</strong> We'll send you an email with an RMA number and return instructions.
              </li>
              <li className="mb-2">
                <strong>Package your return:</strong> Securely package the item in its original packaging along with the RMA form.
              </li>
              <li className="mb-2">
                <strong>Ship your return:</strong> Send your return to the address provided in the return instructions. We recommend using a trackable shipping method.
              </li>
              <li>
                <strong>Await processing:</strong> Once we receive your return, we'll inspect the item and process your refund or exchange within 5-7 business days.
              </li>
            </ol>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Refunds</h2>
            <p className="text-gray-600 mb-3">
              Once we receive and inspect your return, we'll process your refund. The refund will be credited to your original payment method within 3-5 business days, depending on your bank's processing times.
            </p>
            <p className="text-gray-600 mb-3">
              The following costs are non-refundable:
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Original shipping fees</li>
              <li>Return shipping fees (unless the return is due to our error)</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Exchanges</h2>
            <p className="text-gray-600 mb-3">
              If you need to exchange an item for a different size, color, or product, please indicate this when initiating your return. We'll process the exchange once we receive your original item.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Damaged or Defective Items</h2>
            <p className="text-gray-600 mb-3">
              If you receive a damaged or defective item, please contact us immediately. We'll provide a prepaid return shipping label and process a replacement or refund as soon as possible.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="text-gray-600 mb-3">
              If you have any questions about our return policy, please contact us at:
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Email: returns@sparkleshop.com</li>
              <li>Phone: (800) 123-4567</li></ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Returns;
