'use client';

import React, { useState, useEffect, useRef } from 'react';

// Define interface for testimonial
interface Testimonial {
  title: string;
  content: string;
  author: string;
}

const TestimonialSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const totalSlides = 4; // Increased to include Read More slide
  
  // Handle next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };
  
  // Handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };
  
  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Update the slider transform when currentSlide changes
  useEffect(() => {
    if (slidesRef.current.length > 0 && slidesRef.current[0]) {
      const slideWidth = slidesRef.current[0].offsetWidth;
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
      }
    }
  }, [currentSlide]);
  
  // The testimonial data
  const testimonials: Testimonial[] = [
    {
      title: "Exceptional Craftsmanship",
      content: "The quality of work was outstanding. The team was meticulous with every detail, and the final result exceeded our expectations. We couldn't be happier with our new kitchen.",
      author: "Michael Thompson"
    },
    {
      title: "Exceptional Quality",
      content: "We've been working with this company for over 5 years, and the quality of their craftsmanship is unmatched. Every project is completed with remarkable attention to detail and using only the finest materials.",
      author: "Sarah Johnson"
    },
    {
      title: "Professional Service",
      content: "From the initial consultation to the final installation, the entire process was smooth and professional. The team was always responsive and accommodating to our specific needs and requests.",
      author: "David Williams"
    }
  ];
  
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1340px] px-4 pb-16 sm:px-6 lg:me-0 lg:ps-8 lg:pe-0">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center sm:text-left">
            <p className="mt-4 text-gray-700">
              See what our customers have to say about our quality, service, and attention to detail.
            </p>
            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                onClick={prevSlide}
                className="rounded-full border border-black p-3 text-black transition hover:bg-[#c9c5b1] hover:border-[#c9c5b1] hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                aria-label="Next slide"
                onClick={nextSlide}
                className="rounded-full border border-black p-3 text-black transition hover:bg-[#c9c5b1] hover:border-[#c9c5b1] hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="-mx-6 lg:col-span-2 lg:mx-0 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              ref={sliderRef}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {[...testimonials, null].map((testimonial, index) => (
                <div 
                  key={index}
                  ref={(el) => {
                    slidesRef.current[index] = el;
                  }}
                  className="w-full flex-shrink-0 px-6"
                >
                  {testimonial ? (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm h-full flex flex-col">
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex gap-1 text-[#c9c5b1] mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              />
                            </svg>
                          ))}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 flex-grow-0">
                          {testimonial.title}
                        </h3>
                        <p className="text-gray-600 mb-4 flex-grow">
                          {testimonial.content}
                        </p>
                        <p className="text-sm font-medium text-gray-500 mt-auto">
                          — {testimonial.author}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm h-full flex flex-col p-6 text-center"
                    >
                      <p className="text-gray-600 mb-6 flex-grow">
                        See what our customers are saying about us on Google Reviews
                      </p>
                      <div>
                        <a 
                          href="https://g.page/r/CXYE-7ihVzZ9EAE/review" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-black text-white px-8 py-3 rounded-md font-medium text-lg transition-all duration-300 cursor-pointer hover:bg-[#c9c5b1] hover:text-black hover:shadow-md shadow-md"
                        >
                          Read More Reviews
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Slide indicators */}
            <div className="mt-4 flex justify-center gap-2">
              {[...testimonials, null].map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    currentSlide === index ? 'bg-[#c9c5b1]' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            aria-label="Previous slide"
            onClick={prevSlide}
            className="rounded-full border border-black p-4 text-black transition hover:bg-[#c9c5b1] hover:border-[#c9c5b1] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 -rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <button
            aria-label="Next slide"
            onClick={nextSlide}
            className="rounded-full border border-black p-4 text-black transition hover:bg-[#c9c5b1] hover:border-[#c9c5b1] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;