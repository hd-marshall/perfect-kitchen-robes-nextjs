'use client'
import React, { useState, useRef, useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';

export default function MaterialsFeatures(): React.ReactElement {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = 6; // Total number of feature cards

  // Track scroll position and update active index
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      if (scrollContainer) {
        const scrollPosition = scrollContainer.scrollLeft;
        const containerWidth = scrollContainer.clientWidth;
        // Calculate which item is most visible in the viewport
        const newIndex = Math.round(scrollPosition / (containerWidth * 0.85));
        setActiveIndex(Math.min(newIndex, totalItems - 1));
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to a specific item when indicator is clicked
  const scrollToItem = (index: number) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: index * containerWidth * 0.85,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="materials-features" className="py-8 bg-zinc-800">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Beyond the Basics: <br/> Materials and Features"
          textColor="text-white"
          backgroundColor="bg-zinc-800"
        />
        
        <div className="mx-auto max-w-5xl">
          {/* Full-width content without image */}
          <div className="prose max-w-none mb-10 text-center">
            <p className="text-white text-lg leading-relaxed">
              While quality hardware and stylish finishes are standard, we offer a wide array of options to truly personalise your wardrobe. Choose from durable laminates in various colours and textures, elegant timber veneers, or sleek painted finishes. <br/><br/> We can also incorporate features like integrated lighting, mirrored doors, specialised drawers, pull-out shoe racks, and tailored accessory compartments to create a wardrobe that's not just storage, but a reflection of your lifestyle.
            </p>
          </div>
          
          {/* Horizontal scroll on mobile, grid on larger screens */}
          <div 
            ref={scrollRef}
            className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 flex overflow-x-auto pb-4 gap-6 mt-10 snap-x snap-mandatory scrollbar-hide"
          >
            {/* Feature cards - with flex-shrink-0 and min-width for mobile scrolling */}
            <div className="flex-shrink-0 min-w-[280px] w-[85%] md:w-full snap-start flex items-start gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="text-[#c9c5b1] text-2xl flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Integrated Lighting</h3>
                <p className="text-gray-600">Perfect illumination for finding exactly what you're looking for.</p>
              </div>
            </div>
            
            <div className="flex-shrink-0 min-w-[280px] w-[85%] md:w-full snap-start flex items-start gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="text-[#c9c5b1] text-2xl flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Mirrored Doors</h3>
                <p className="text-gray-600">Adds functionality while creating a sense of space.</p>
              </div>
            </div>
            
            <div className="flex-shrink-0 min-w-[280px] w-[85%] md:w-full snap-start flex items-start gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="text-[#c9c5b1] text-2xl flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Specialised Drawers</h3>
                <p className="text-gray-600">Custom storage solutions for your specific needs.</p>
              </div>
            </div>
            
            <div className="flex-shrink-0 min-w-[280px] w-[85%] md:w-full snap-start flex items-start gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="text-[#c9c5b1] text-2xl flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Tailored Compartments</h3>
                <p className="text-gray-600">Keep your smaller items organised and accessible.</p>
              </div>
            </div>
            
            <div className="flex-shrink-0 min-w-[280px] w-[85%] md:w-full snap-start flex items-start gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="text-[#c9c5b1] text-2xl flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Pull-out Shoe Racks</h3>
                <p className="text-gray-600">Easy access storage for your footwear collection.</p>
              </div>
            </div>
            
            <div className="flex-shrink-0 min-w-[280px] w-[85%] md:w-full snap-start flex items-start gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="text-[#c9c5b1] text-2xl flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Premium Finishes</h3>
                <p className="text-gray-600">From laminates to timber veneers and painted finishes.</p>
              </div>
            </div>
          </div>
          
          {/* Interactive scroll indicator for mobile only */}
          <div className="flex justify-center mt-4 md:hidden">
            <div className="flex space-x-2">
              {[...Array(totalItems)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToItem(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'w-8 bg-[#c9c5b1]' 
                      : 'w-2 bg-gray-400 hover:bg-gray-300'
                  }`}
                  aria-label={`Go to item ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}