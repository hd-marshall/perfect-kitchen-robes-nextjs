'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';

// Define interfaces for TypeScript
interface ProcessStep {
  title: string;
  description: string;
  imageSrc: string;
}

// Define the process steps data
const processStepsData: ProcessStep[] = [
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

export default function OurProcess(): React.ReactElement {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const totalItems: number = processStepsData.length;
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
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
            title="Our Custom Design Journey – Tailored for You"
            subtitle='Getting the perfect custom wardrobe sorted is easier than you think. Our process starts with understanding exactly what you need – from the amount of hanging space versus shelving, to special spots for shoes, ties, or jewellery.'
            textColor='text-black'
            backgroundColor='bg-white'
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
            
            {processStepsData.map((step, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 min-w-[280px] w-[85%] snap-start bg-white rounded shadow-md p-8 relative"
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
            title="Our Custom Design Journey – Tailored for You"
            subtitle='Getting the perfect custom wardrobe sorted is easier than you think. Our process starts with understanding exactly what you need – from the amount of hanging space versus shelving, to special spots for shoes, ties, or jewellery.'
            textColor='text-black'
            backgroundColor='bg-white'
        />
        
        {/* Desktop layout - matching the image */}
        <div className="space-y-12">
          {/* Top row: first 3 steps */}
          <div className="grid grid-cols-3 gap-6">
            {processStepsData.slice(0, 3).map((step, index) => (
              <div key={index} className="bg-white rounded shadow-md p-8 relative">
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
                
                {/* Right arrow for first 2 steps only */}
                {index < 2 && (
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
          
          {/* Bottom row: last 2 steps centered */}
          <div className="grid grid-cols-2 gap-6 mx-auto" style={{ width: '66%' }}>
            {processStepsData.slice(3, 5).map((step, index) => (
              <div key={index + 3} className="bg-white rounded shadow-md p-8 relative">
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
                
                {/* Right arrow for step 4 only */}
                {index === 0 && (
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
      </div>
    </section>
  );
}