
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  name: string;
  image: string;
  productCount: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, productCount }) => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  
  return (
    <Link to={`/category/${name}`} className="block group">
      <div className="relative rounded-lg overflow-hidden shadow-md h-56">
        <img 
          src={image} 
          alt={formattedName} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center">
          <h3 className="text-white text-xl font-bold mb-1">{formattedName}</h3>
          <p className="text-white/80 text-sm">{productCount} Products</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
