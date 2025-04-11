
import React from 'react';
import Hero from '@/components/common/Hero';
import ProductGrid from '@/components/product/ProductGrid';
import CategoryCard from '@/components/ui/CategoryCard';
import { products, getFeaturedProducts, getAllCategories, getProductsByCategory } from '@/data/products';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const categories = getAllCategories();

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Shop the Latest Trends"
        subtitle="Discover our curated collection of high-quality products at unbeatable prices."
        imageSrc="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
      
      {/* Categories Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map(category => (
              <CategoryCard 
                key={category}
                name={category}
                image={getProductsByCategory(category)[0].image} 
                productCount={getProductsByCategory(category).length}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link 
              to="/category/clothing" 
              className="text-primary flex items-center hover:underline"
            >
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <ProductGrid products={featuredProducts} /><br></br>
         
        </div>
      </section>
      
     
    </div>
  );
};

export default Index;
