"use client";

import { useState } from "react";
import SectionTitle from "../ui/SectionTitle";

// Define TypeScript interfaces
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqData: FAQItem[];
  title?: string;
}

export default function FAQ({ 
  faqData,
  title = "Frequently Asked Questions"
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);
  
  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title={title}
          textColor="text-black"
          backgroundColor="bg-white"
        />
        
        <div className="accordion-group">
          {faqData.map((faq: FAQItem, index: number) => (
            <div
              key={index}
              className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-[#c9c5b1]/20 ${
                openIndex === index ? "bg-[#c9c5b1]/20" : ""
              }`}
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <h5 className="text-gray-900 font-medium">
                  {faq.question}
                </h5>
                <svg
                  className={`text-gray-500 transition duration-500 group-hover:text-[#c9c5b1] ${
                    openIndex === index ? "text-[#c9c5b1] rotate-180" : ""
                  }`}
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                className={`accordion-content w-full px-0 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-60 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-base text-gray-900 leading-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}