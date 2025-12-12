import React from 'react';
// 1. Import the image relative to this component file
import heroImage from '@/assets/logos/img.png'; 


export const HeroSection = () => {
  return (
    <section className="relative w-full bg-asthra-dark overflow-hidden flex items-center justify-center">
      {/* 2. Use the imported variable in the src attribute */}
      <img
        src={heroImage} 
        alt="Hero Section"
        className="w-full h-auto object-contain mx-auto"
      />
    </section>
  );
};