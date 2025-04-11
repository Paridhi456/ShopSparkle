
import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <p className="text-gray-600 mb-3">
              Last Updated: May 1, 2024
            </p>
            <p className="text-gray-600">
              This Privacy Policy describes how SparkleShop ("we," "us," or "our") collects, uses, and shares your personal information when you visit our website, make a purchase, or otherwise interact with us. By using our services, you agree to the terms of this Privacy Policy.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
            
            <h3 className="font-medium mb-2">Personal Information</h3>
            <p className="text-gray-600 mb-4">
              When you make a purchase or attempt to make a purchase, we collect certain information from you, including:
            </p>
            <ul className="list-disc pl-5 mb-6 text-gray-600">
              <li>Name</li>
              <li>Email address</li>
              <li>Billing address</li>
              <li>Shipping address</li>
              <li>Phone number</li>
              <li>Payment information (credit card numbers, etc.)</li>
              <li>Purchase history</li>
            </ul>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Email: returns@sparkleshop.com</li>
              <li>Phone: (800) 123-4567</li></ul>
          </section> 
        </div>
      </div>
    </div>
  );
};

export default Privacy;
