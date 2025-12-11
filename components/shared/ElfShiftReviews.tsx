'use client';
import Script from 'next/script';

export default function ElfsightGoogleReviews() {
  return (
    <div className="bg-zinc-800 py-8">
      <Script 
        src="https://elfsightcdn.com/platform.js" 
        strategy="lazyOnload"
      />
      <div 
        className="elfsight-app-3a1961c4-4e0f-411e-a60d-9ffdbe7e3dc6" 
        data-elfsight-app-lazy
      />
    </div>
  );
}