import React from 'react';

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  serviceTitle: string;
  serviceDescription: string;
  features: ServiceFeature[];
}

export default function ServiceFeatures({
  serviceTitle,
  serviceDescription,
  features,
}: ServiceFeaturesProps) {
  return (
    <section className="w-full mx-auto pt-16 pb-4 bg-white">
      {/* Features Section */}
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          {serviceTitle}
        </h2>
        <p className="text-lg text-black mb-12">
          {serviceDescription}
        </p>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-zinc-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300 text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}