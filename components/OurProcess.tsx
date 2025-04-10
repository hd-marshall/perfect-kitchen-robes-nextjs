'use client';
import React from 'react';
import Image from 'next/image';

interface ProcessStep {
  title: string;
  description: string;
  imageSrc: string;
}

const OurProcess: React.FC = () => {
  const processSteps: ProcessStep[] = [
    {
      title: 'Initial Consultation',
      description: 'Every great result begins with a chat. Whether you\'re looking to revamp your dated kitchen or maximise your wardrobe storage space, our journey starts when you reach out to discuss your vision.',
      imageSrc: '/assets/images/our-process/thinking.png'
    },
    {
      title: 'Personalised Planning',
      description: 'Following our first meeting, we\'ll craft concept designs to help you visualise your project. Our experienced team will suggest innovative solutions, quality materials, and practical layouts that suit both your lifestyle needs and budget considerations.',
      imageSrc: '/assets/images/our-process/curve.png'
    },
    {
      title: 'Confirmation & Scheduling',
      description: 'Once you\'re delighted with the finalised design, we\'ll lock in your project with a formal agreement. A small deposit secures your place in our production schedule, ensuring your renovation becomes our next priority.',
      imageSrc: '/assets/images/our-process/contract.png'
    },
    {
      title: 'Crafting & Installation',
      description: 'With your project confirmed, our skilled craftspeople begin creating your custom pieces in our Melbourne workshop. Our team will coordinate with you regarding timelines, providing clear communication about manufacturing progress and installation dates.',
      imageSrc: '/assets/images/our-process/hammer.png'
    }
  ];

  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-medium text-center text-[#464646] mb-8">Our Approach</h2>
        
        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
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
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-0 h-0 
                    border-t-[15px] border-t-transparent 
                    border-l-[20px] border-l-black 
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
};

export default OurProcess;