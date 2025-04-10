'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Update the path to use /assets from public directory
const logoPath = '/assets/title-white.svg';

interface FooterLink {
  name: string;
  path: string;
  icon?: React.ReactNode;
}

interface CompanyInfo {
  name: string;
  tagline: string;
}

interface FooterLinks {
  services: FooterLink[];
  company: FooterLink[];
  social: FooterLink[];
  companyInfo: CompanyInfo;
}

const Footer: React.FC = () => {
  // State for accordion functionality - null means all sections are closed by default
  const [openSection, setOpenSection] = useState<string | null>(null);
  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check window size on initial load and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  // Define all links as variables for easy modification
  const links: FooterLinks = {
    services: [
      { name: 'Kitchens', path: '/services/kitchens' },
      { name: 'Wardrobes', path: '/services/wardrobes' },
      { name: 'Sliding Doors', path: '/services/sliding-doors' },
      { name: 'Vanities', path: '/services/vanities' },
      { name: 'Laundries', path: '/services/laundries' },
      { name: 'Shower Screens', path: '/services/shower-screens' }
    ],
    company: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
    social: [
      { 
        name: 'Facebook', 
        path: 'https://www.facebook.com/share/1BAJSx3kJz/?mibextid=wwXIfr',
        icon: <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      },
      { 
        name: 'Instagram', 
        path: 'https://www.instagram.com/perfectkitchenrobes/',
        icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      }
    ],
    companyInfo: {
      name: 'Perfect Kitchen and Robes',
      tagline: 'Designed for You, Built to Last'
    }
  };

  // Chevron down SVG for accordion
  const ChevronDown: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );

  return (
    <footer className="bg-black text-white text-center">
      {/* Top section with columns */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* SERVICES COLUMN */}
          <div>
            {/* Mobile accordion header */}
            <button 
              className="md:hidden w-full flex justify-between items-center text-xl font-bold uppercase mb-4 text-gray-300"
              onClick={() => toggleSection('services')}
            >
              <span>Services</span>
              <ChevronDown isOpen={openSection === 'services'} />
            </button>
            
            {/* Desktop heading */}
            <h6 className="hidden md:block text-xl font-bold uppercase mb-6 text-gray-300">Services</h6>
            
            {/* Content - closed by default on mobile */}
            <ul 
              className={`space-y-4 overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === 'services' || !isMobile
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              {links.services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.path} 
                    className="hover:text-[#c9c5b1] transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* COMPANY COLUMN */}
          <div>
            {/* Mobile accordion header */}
            <button 
              className="md:hidden w-full flex justify-between items-center text-xl font-bold uppercase mb-4 text-gray-300"
              onClick={() => toggleSection('company')}
            >
              <span>Company</span>
              <ChevronDown isOpen={openSection === 'company'} />
            </button>
            
            {/* Desktop heading */}
            <h6 className="hidden md:block text-xl font-bold uppercase mb-6 text-gray-300">Company</h6>
            
            {/* Content - closed by default on mobile */}
            <ul 
              className={`space-y-4 overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === 'company' || !isMobile
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              {links.company.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.path} 
                    className="hover:text-[#c9c5b1] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* SOCIAL MEDIA */}
          <div>
            {/* Mobile accordion header */}
            <button 
              className="md:hidden w-full flex justify-between items-center text-xl font-bold uppercase mb-4 text-gray-300"
              onClick={() => toggleSection('social')}
            >
              <span>Social Media</span>
              <ChevronDown isOpen={openSection === 'social'} />
            </button>
            
            {/* Desktop heading */}
            <h6 className="hidden md:block text-xl font-bold uppercase mb-6 text-gray-300">Social Media</h6>
            
            {/* Content - closed by default on mobile */}
            <ul 
              className={`space-y-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openSection === 'social' || !isMobile
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              {links.social.map((platform, index) => (
                <li key={index}>
                  <Link
                    href={platform.path}
                    className="hover:text-[#c9c5b1] transition-colors duration-300 inline-block"
                    aria-label={platform.name}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-current">
                      {platform.icon}
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Divider line */}
      <div className="border-t border-gray-800"></div>
      
      {/* Bottom section with centered logo and copyright info */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-center">
          {/* Logo and company info */}
          <div className="flex flex-col items-center mb-6">
            <div className="mb-4">
              <Image 
                src={logoPath}
                alt="Company Logo" 
                width={80}
                height={80}
                className="fill-current"
              />
            </div>
            <div className="text-center">
              <p className="font-bold text-xl mb-1">{links.companyInfo.name}</p>
              <p className="text-sm mb-4">{links.companyInfo.tagline}</p>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} {links.companyInfo.name}. All Rights Reserved.</p>
            <p className="mt-2">All designs and images displayed are protected by copyright laws.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;