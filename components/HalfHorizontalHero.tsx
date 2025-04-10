import React from 'react';
import Image from 'next/image';

interface HeroProps {
  imagePath: string;
  text?: string;
}

const Hero: React.FC<HeroProps> = ({
  imagePath,
  text = "Kitchen"
}) => {
  return (
    <div className="relative h-[600px] w-full">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src={imagePath}
          alt="Hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative flex items-center h-full px-4 md:px-12 lg:px-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Hero;