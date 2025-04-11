
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;

}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageSrc,

}) => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 py-24 md:py-32">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl mb-8 text-white/90">{subtitle}</p>
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
