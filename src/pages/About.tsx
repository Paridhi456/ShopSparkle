
import React from 'react';

const About = () => {
  return (
    <div>
      {/* Hero section */}
      <div className="bg-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">About SparkleShop</h1>
          <p className="text-xl max-w-2xl">Our journey, mission, and the values that drive us forward.</p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                SparkleShop started in 2024 with a simple mission: to make quality products accessible to everyone. 
                What began as a small online store run from a garage has grown into a thriving e-commerce platform 
                serving thousands of customers nationwide.
              </p>
              <p className="text-gray-600">
                Our founder noticed a gap in the market for affordable yet high-quality goods across 
                various categories. She believed that everyone deserves access to great products without breaking the bank. 
                This philosophy continues to guide our business decisions today.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
     
      
    </div>
  );
};

export default About;
