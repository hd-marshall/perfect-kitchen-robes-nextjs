'use client';

// components/ContactInfoBox.tsx
import { ReactNode } from 'react';

type ContactInfoBoxProps = {
  icon: string;
  title: string;
  content: ReactNode;
  onClick?: () => void;
};

export default function ContactInfoBox({ icon, title, content, onClick }: ContactInfoBoxProps) {
  return (
    <div 
      className={`bg-gray-50 rounded-lg shadow-md p-8 text-center flex-1 min-w-[250px] max-w-xs transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <i className={`${icon} text-4xl text-blue-500 mb-4`}></i>
      <h3 className="text-lg font-bold text-gray-800 my-2">{title}</h3>
      <div className="text-gray-600">{content}</div>
    </div>
  );
}
