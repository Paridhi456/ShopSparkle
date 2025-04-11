import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearchProducts } from '@/hooks/useProducts';
import ProductGrid from '@/components/product/ProductGrid';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query') || '';
  
  const { data: searchResults = [], isLoading } = useSearchProducts(searchTerm);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="section-padding">
      <div className="container-custom">
        <Button 
          variant="ghost" 
          className="mb-4 flex items-center gap-2"
          onClick={handleBack}
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        
        <h1 className="text-3xl font-bold mb-2">Search Results</h1>
        <p className="text-gray-600 mb-8">
          {searchResults.length} results found for "{searchTerm}"
        </p>
        
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : searchResults.length > 0 ? (
          <ProductGrid products={searchResults} />
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">
              No products found matching "{searchTerm}".
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Try different keywords or browse categories.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
