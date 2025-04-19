import React from 'react';
import Image from 'next/image';

import SectionTitle from '@/components/ui/SectionTitle';
import { processStepsData } from '@/data/home-variables';

export default function OurProcess() {
  return (
    <section className="w-full pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <SectionTitle
          title="Our Approach"
          textColor='text-black'
          backgroundColor='bg-white'
        />
        
        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processStepsData.map((step, index) => (
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
              
              {/* Arrow for desktop view (excluding the last item) - now black */}
              {index < processStepsData.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
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
    </section>
  );
}