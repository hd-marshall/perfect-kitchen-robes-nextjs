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
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${textColor}`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {subtitle && (
            <p
              className={`text-lg mb-8 ${textColor} opacity-80`}
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          )}
          {children}
        </div>
      </div>
    </div>
  );
}