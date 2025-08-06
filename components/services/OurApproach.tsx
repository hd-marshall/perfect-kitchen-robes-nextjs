'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';

// Define interfaces for TypeScript
export interface ProcessStep {
  title: string;
  description: string;
  imageSrc: string;
}

interface ProcessStepsProps {
  processStepData?: ProcessStep[];
  title?: string;
  subtitle?: string;
  textColor?: string;
  backgroundColor?: string;
}

// Define the default process steps data
const defaultProcessStepsData: ProcessStep[] = [
  {
    title: "Consultation",
    description: "We chat with you (often on-site in your Melbourne home) to discuss your vision, storage requirements, and style preferences.",
    imageSrc: "/assets/images/our-process/thinking.png"
  },
  {
    title: "Measure & Design",
    description: "We take precise measurements and create initial design concepts, considering workflow and aesthetics.",
    imageSrc: "/assets/images/our-process/curve.png"
  },
  {
    title: "Material Selection",
    description: "Choose from a wide range of quality materials, colours, and finishes to match your home's décor.",
    imageSrc: "/assets/images/our-process/wood.png"
  },
  {
    title: "Detailed Quote",
    description: "We provide a clear, itemised quote with no hidden surprises.",
    imageSrc: "/assets/images/our-process/contract.png"
  },
  {
    title: "Craftsmanship & Installation",
    description: "Our skilled Melbourne-based team builds your wardrobe components and installs them with meticulous care and attention to detail.",
    imageSrc: "/assets/images/our-process/hammer.png"
  }
];

export default function ProcessSteps({
  processStepData = defaultProcessStepsData,
  title = "Our Custom Design Journey – Tailored for You",
  subtitle = "Getting the perfect custom wardrobe sorted is easier than you think. Our process starts with understanding exactly what you need – from the amount of hanging space versus shelving, to special spots for shoes, ties, or jewellery.",
  textColor = "text-black",
  backgroundColor = "bg-white"
}: ProcessStepsProps): React.ReactElement {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const totalItems: number = processStepData.length;
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if we're on mobile/tablet (portrait iPad and smaller)
  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobile(window.innerWidth < 1024); // Changed from 768 to 1024 to include iPad portrait
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Track scroll position and update active index (only on mobile)
  useEffect(() => {
    if (!isMobile) return;
    
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    const handleScroll = (): void => {
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
  }, [totalItems, isMobile]);

  // Function to determine grid layout based on number of steps
  const getGridLayout = (totalSteps: number) => {
    if (totalSteps <= 3) {
      return {
        rows: [totalSteps],
        gridCols: totalSteps === 1 ? 'lg:grid-cols-1' : totalSteps === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'
      };
    } else if (totalSteps === 4) {
      return {
        rows: [4],
        gridCols: 'lg:grid-cols-4'
      };
    } else if (totalSteps === 5) {
      return {
        rows: [3, 2],
        gridCols: 'lg:grid-cols-3'
      };
    } else if (totalSteps === 6) {
      return {
        rows: [3, 3],
        gridCols: 'lg:grid-cols-3'
      };
    } else if (totalSteps <= 8) {
      return {
        rows: [4, totalSteps - 4],
        gridCols: 'lg:grid-cols-4'
      };
    } else {
      // For more than 8 steps, use a consistent 4-column layout
      const rows = [];
      let remaining = totalSteps;
      while (remaining > 0) {
        if (remaining >= 4) {
          rows.push(4);
          remaining -= 4;
        } else {
          rows.push(remaining);
          remaining = 0;
        }
      }
      return {
        rows: rows,
        gridCols: 'lg:grid-cols-4'
      };
    }
  };

  const gridLayout = getGridLayout(totalItems);

  // Function to render arrows between steps
  const shouldShowArrow = (rowIndex: number, stepIndex: number, stepsInRow: number) => {
    // Don't show arrow after the last step in a row
    return stepIndex < stepsInRow - 1;
  };
  // Function to scroll to a specific item when indicator is clicked
  const scrollToItem = (index: number): void => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: index * containerWidth * 0.85,
        behavior: 'smooth'
      });
    }
  };

  // Render mobile view (horizontal scroll)
  if (isMobile) {
    return (
      <section className="w-full pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <SectionTitle
            title={title}
            subtitle={subtitle}
            textColor={textColor}
            backgroundColor={backgroundColor}
          />
          
          {/* Mobile Process Steps - Horizontal scroll */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-4 gap-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Hide scrollbar for Chrome, Safari and Opera */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {processStepData.map((step, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 min-w-[280px] w-[85%] snap-start bg-white rounded-lg shadow-xl p-8 relative"
              >
                {/* Image */}
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Image
                    src={step.imageSrc}
                    alt={step.title}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                
                {/* Step Title */}
                <h3 className="text-xl font-medium text-[#464646] mb-4 text-center">
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p className="text-[#464646] text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Interactive scroll indicator for mobile */}
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {Array.from({ length: totalItems }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToItem(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'w-8 bg-[#c9c5b1]' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Render desktop view with images added to the original grid layout
  return (
    <section className="w-full pb-4 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <SectionTitle
            title={title}
            subtitle={subtitle}
            textColor={textColor}
            backgroundColor={backgroundColor}
        />
        
        {/* Desktop layout - dynamic grid based on number of steps */}
        <div>
          {gridLayout.rows.map((stepsInRow, rowIndex) => {
            const startIndex = gridLayout.rows.slice(0, rowIndex).reduce((sum, count) => sum + count, 0);
            const rowSteps = processStepData.slice(startIndex, startIndex + stepsInRow);
            
            // Determine grid template columns based on the maximum columns in the layout
            const maxCols = gridLayout.gridCols.includes('4') ? 4 : gridLayout.gridCols.includes('3') ? 3 : 2;
            
            // Use CSS Grid with explicit column fractions for equal widths
            const gridStyle = {
              display: 'grid',
              gridTemplateColumns: `repeat(${stepsInRow}, 1fr)`,
              gap: '1.5rem', // Consistent gap for all layouts
              marginBottom: rowIndex < gridLayout.rows.length - 1 ? '3rem' : '0' // Add bottom margin except for last row
            };
            
            // For rows with fewer items than max columns, center the grid
            const containerStyle = stepsInRow < maxCols ? {
              maxWidth: `${(stepsInRow / maxCols) * 100}%`,
              margin: '0 auto'
            } : {};

            return (
              <div key={rowIndex} style={containerStyle} className={rowIndex > 0 ? 'mt-12' : ''}>
                <div style={gridStyle}>
                  {rowSteps.map((step, stepIndex) => (
                    <div key={startIndex + stepIndex} className="bg-white rounded-lg shadow-xl p-8 relative h-full flex flex-col">
                      {/* Image */}
                      <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center flex-shrink-0">
                        <Image
                          src={step.imageSrc}
                          alt={step.title}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                      
                      {/* Step Title - Fixed height area */}
                      <div className="h-16 flex items-center justify-center mb-4 flex-shrink-0">
                        <h3 className="text-xl font-medium text-[#464646] text-center leading-tight">
                          {step.title}
                        </h3>
                      </div>
                      
                      {/* Step Description - Flexible area */}
                      <div className="flex-grow flex items-start">
                        <p className="text-[#464646] text-center leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Right arrow - show for all but last step in row */}
                      {shouldShowArrow(rowIndex, stepIndex, stepsInRow) && (
                        <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10">
                          <div className="w-0 h-0
                           border-t-[15px] border-t-transparent
                           border-l-[20px] border-l-zinc-400
                           border-b-[15px] border-b-transparent">
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}