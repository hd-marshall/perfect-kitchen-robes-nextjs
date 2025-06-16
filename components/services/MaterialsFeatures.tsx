'use client'
import React, { useState, useRef, useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface MaterialsFeaturesProps {
  sectionId?: string;
  title: string;
  description: string;
  features: FeatureItem[];
  backgroundColor?: string;
  textColor?: string;
}

export default function MaterialsFeatures({
  sectionId = "materials-features",
  title,
  description,
  features,
  backgroundColor = "bg-zinc-800",
  textColor = "text-white"
}: MaterialsFeaturesProps): React.ReactElement {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = features.length;

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
  }, [totalItems]);

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

  // Group features into rows of 3 for desktop
  const groupedFeatures = [];
  for (let i = 0; i < features.length; i += 3) {
    groupedFeatures.push(features.slice(i, i + 3));
  }

  return (
    <section id={sectionId} className={`py-8 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={title}
          textColor={textColor}
          backgroundColor={backgroundColor}
        />
        
        <div className="mx-auto max-w-5xl">
          {/* Full-width content without image */}
          <div className="prose max-w-none mb-10 text-center">
            <p className={`${textColor} text-lg leading-relaxed`} dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          
          {/* Mobile horizontal scroll */}
          <div 
            ref={scrollRef}
            className="md:hidden flex overflow-x-auto pb-4 gap-6 mt-10 snap-x snap-mandatory scrollbar-hide"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {/* Feature cards for mobile */}
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 min-w-[280px] w-[85%] snap-start flex items-start gap-4 p-4 bg-gray-100 rounded-lg shadow-md"
              >
                <div className="text-[#c9c5b1] text-2xl flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop grouped rows */}
          <div className="hidden md:block space-y-6 mt-10">
            {groupedFeatures.map((rowFeatures, rowIndex) => (
              <div 
                key={rowIndex}
                className={`flex gap-6 ${
                  rowFeatures.length < 3 ? 'justify-center' : 'justify-between'
                }`}
              >
                {rowFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-100 rounded-lg shadow-md w-80"
                  >
                    <div className="text-[#c9c5b1] text-2xl flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          {/* Interactive scroll indicator for mobile only */}
          {totalItems > 1 && (
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
          )}
        </div>
      </div>
    </section>
  );
}