import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  imagePath: string;
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

const Hero: React.FC<HeroProps> = ({
  imagePath,
  title,
  text,
  buttonText,
  buttonLink
}) => {
  return (
    <div className="relative h-screen">
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
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl leading-tight drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl drop-shadow-md">
          {text}
        </p>
        <Link 
          href={buttonLink}
          className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium text-lg transition-all duration-300 cursor-pointer hover:bg-[#c9c5b1] hover:text-white hover:shadow-md shadow-md"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Hero;