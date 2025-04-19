import React, { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  textColor?: string;
  backgroundColor?: string;
  children?: ReactNode;
}

export default function SectionTitle({ 
  title,
  subtitle,
  textColor = "text-white", // Default text color
  backgroundColor = "bg-zinc-900", // Default background color
  children,
}: SectionTitleProps) {
  return (
    // Full-width container with background color
    <div className={`w-full ${backgroundColor}`}>
      {/* Content container with padding */}
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${textColor}`}>
            {title}
          </h2>
          
          {subtitle && (
            <p className={`text-xl md:text-2xl mb-8 ${textColor} opacity-80`}>
              {subtitle}
            </p>
          )}
          
          {children}
        </div>
      </div>
    </div>
  );
}