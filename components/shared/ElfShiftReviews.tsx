'use client';
import Script from 'next/script';
import { usePathname } from 'next/navigation'; // Import usePathname for dynamic schema URL

export default function ElfsightGoogleReviews() {
  // Define the schema data statically based on your expected ratings
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness", // Change this type if you are reviewing a product
    "name": "Perfect Kitchen & Robes",
    "url": `https://perfectkitchenrobes.com${usePathname()}`, // Ensures the URL is correct for the current page
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0", // <-- **UPDATE THIS** to your average rating
      "reviewCount": "22"  // <-- **UPDATE THIS** to your total review count
    }
  };

  // Stringify the JSON-LD and escape special characters for security
  const jsonLd = JSON.stringify(reviewSchema).replace(/</g, '\\u003c');

  return (
    <div className="bg-zinc-800 pt-12">
      {/* 1. Add the SSR JSON-LD Script Tag */}
      {/* This script is included in the initial HTML and readable by Googlebot */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <h2 className="font-bold text-4xl md:text-5xl text-white text-center mb-6 px-4">
        What Our Customers Have To Say
      </h2>

      {/* 2. Elfsight Visual Widget (Client-Side Rendering) */}
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive" // Loads script after main content
      />
      <div
        className="elfsight-app-3a1961c4-4e0f-411e-a60d-9ffdbe7e3dc6"
        data-elfsight-app-lazy
      />
    </div>
  );
}
