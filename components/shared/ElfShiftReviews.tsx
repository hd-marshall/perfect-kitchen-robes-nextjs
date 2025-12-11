'use client';
import Script from 'next/script';

export default function ElfsightGoogleReviews() {
  return (
    <div className="bg-zinc-800 pt-12">
      <h2 className="font-bold text-4xl md:text-5xl text-white text-center mb-6 px-4">
        What Our Customers Have To Say
      </h2>
      
      <Script 
        src="https://elfsightcdn.com/platform.js" 
        strategy="afterInteractive"
      />
      <div 
        className="elfsight-app-3a1961c4-4e0f-411e-a60d-9ffdbe7e3dc6" 
        data-elfsight-app-lazy
      />
    </div>
  );
}