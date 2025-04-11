import React from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '@/components/product/ProductGrid';
import { Skeleton } from '@/components/ui/skeleton';
import { useProductsByCategory } from '@/hooks/useProducts';

const ProductCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { data: products, isLoading, error } = useProductsByCategory(categoryId || '');

  const formatCategoryName = (name: string) => {
    if (name === 'home') return 'Home & Garden';
    if (name === 'beauty') return 'Beauty & Personal Care';
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  if (!categoryId) {
    return (
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-red-600">
              Category not found. Please check the URL.
            </h3>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-64 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section-padding">
        <div className="container-custom">
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-red-600">
              Error loading products. Please try again later.
            </h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-2">{formatCategoryName(categoryId)}</h1>
        <p className="text-gray-600 mb-8">
          Explore our {formatCategoryName(categoryId)} collection.
        </p>
        
        {products && products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">
              No products found in this category.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
