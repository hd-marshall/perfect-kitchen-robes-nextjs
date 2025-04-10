'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  // Navigation links as variables for better readability
  const navLinks = {
    home: "/",
    about: "/about",
    services: {
      kitchens: "/services/kitchens",
      wardrobes: "/services/wardrobes",
      slidingDoors: "/services/sliding-doors",
      vanities: "/services/vanities",
      laundries: "/services/laundries",
      showerScreens: "/services/shower-screens"
    },
    contact: "/contact"
  };

  // Service descriptions for dropdown
  const serviceDescriptions = {
    kitchens: "Custom kitchen designs to transform your cooking space",
    wardrobes: "Beautiful and functional wardrobe solutions",
    slidingDoors: "Space-saving sliding door solutions for any room",
    vanities: "Elegant vanity designs to upgrade your bathroom",
    laundries: "Functional and stylish laundry room renovations",
    showerScreens: "Modern shower screens to complete your bathroom"
  };
  
  // State for dropdown menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);

  // Add scroll event listener to close menus when scrolling and track scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Close menus when scrolling
      if (isMenuOpen) setIsMenuOpen(false);
      if (isServicesOpen) setIsServicesOpen(false);
      if (showMobileServices) setShowMobileServices(false);
      
      // Check if user has scrolled down
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen, isServicesOpen, showMobileServices]);

  // Close all menus
  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setShowMobileServices(false);
  };

  // Toggle functions
  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    
    // If closing the main menu, also close the services menu and mobile services
    if (!newMenuState) {
      setIsServicesOpen(false);
      setShowMobileServices(false);
    }
  };

  const toggleServices = () => {
    // For desktop, toggle the dropdown
    setIsServicesOpen(!isServicesOpen);
    
    // For mobile, toggle showing services and hiding other menu items
    setShowMobileServices(!showMobileServices);
  };

  return (
    <nav className={`${hasScrolled || isServicesOpen || isMenuOpen ? 'bg-black' : 'bg-transparent'} text-white fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      <div className="flex flex-wrap justify-between items-center w-full p-4">
          <Link href={navLinks.home} className="flex items-center ml-4 md:ml-8 lg:ml-12" onClick={closeAllMenus}>
              <Image 
                src="/assets/logo-white.svg" 
                alt="Perfect Kitchen & Robes" 
                width={64} 
                height={64} 
                className="h-16 w-auto" 
              />
          </Link>
          <button 
            onClick={toggleMenu} 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors duration-300" 
            aria-controls="mega-menu-full" 
            aria-expanded={isMenuOpen}
          >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div id="mega-menu-full" className={`items-center justify-end font-medium ${isMenuOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 md:opacity-100 md:max-h-96 md:bg-transparent'} transition-all duration-300 overflow-hidden w-full md:flex md:w-auto md:order-1 md:mr-4 lg:mr-12`}>
              <ul className={`flex flex-col p-4 md:p-0 mt-4 rounded-lg md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 transition-all duration-300 text-lg md:text-xl`}>
                  {/* Only show these links on desktop or when mobile services is not active */}
                  <li>
                      <button 
                        onClick={toggleServices}
                        className="flex items-center justify-between w-full py-2 px-3 text-white rounded-sm md:w-auto hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-[#c9c5b1] md:p-0 transition-colors duration-300"
                      >
                        Services 
                        <svg className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-300 ${showMobileServices ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                      </button>
                  </li>
                  <li className={`${showMobileServices ? 'hidden md:block' : 'block'}`}>
                      <Link 
                        href={navLinks.about} 
                        className="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:hover:text-[#c9c5b1] md:p-0 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        About Us
                      </Link>
                  </li>
                  <li className={`${showMobileServices ? 'hidden md:block' : 'block'}`}>
                      <Link 
                        href={navLinks.contact} 
                        className="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:hover:text-[#c9c5b1] md:p-0 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        Contact
                      </Link>
                  </li>
              </ul>
              {/* Mobile Services Menu */}
              {showMobileServices && (
                <div className="bg-white text-black p-4 rounded-md shadow-md mt-2 mb-4 md:hidden">
                  <ul className="flex flex-col">
                    <li>
                      <Link 
                        href={navLinks.services.kitchens} 
                        className="block py-3 px-2 hover:bg-gray-100 rounded transition-colors duration-300 font-medium leading-relaxed border-b border-gray-100"
                        onClick={closeAllMenus}
                      >
                        Kitchens
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href={navLinks.services.wardrobes} 
                        className="block py-3 px-2 hover:bg-gray-100 rounded transition-colors duration-300 font-medium leading-relaxed border-b border-gray-100"
                        onClick={closeAllMenus}
                      >
                        Wardrobes
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href={navLinks.services.slidingDoors} 
                        className="block py-3 px-2 hover:bg-gray-100 rounded transition-colors duration-300 font-medium leading-relaxed border-b border-gray-100"
                        onClick={closeAllMenus}
                      >
                        Sliding Doors
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href={navLinks.services.vanities} 
                        className="block py-3 px-2 hover:bg-gray-100 rounded transition-colors duration-300 font-medium leading-relaxed border-b border-gray-100"
                        onClick={closeAllMenus}
                      >
                        Vanities
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href={navLinks.services.laundries} 
                        className="block py-3 px-2 hover:bg-gray-100 rounded transition-colors duration-300 font-medium leading-relaxed border-b border-gray-100"
                        onClick={closeAllMenus}
                      >
                        Laundries
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href={navLinks.services.showerScreens} 
                        className="block py-3 px-2 hover:bg-gray-100 rounded transition-colors duration-300 font-medium leading-relaxed"
                        onClick={closeAllMenus}
                      >
                        Shower Screens
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
          </div>
      </div>
      {/* Services Dropdown for Desktop */}
      <div 
        id="mega-menu-full-dropdown" 
        className={`${isServicesOpen ? 'opacity-100 h-[45vh] visible' : 'opacity-0 max-h-0 invisible transform translate-y-2'} mt-1 shadow-lg bg-gray-100 border-y border-gray-200 transition-all duration-300 ease-in-out overflow-hidden hidden md:block`}
      >
          <div className="grid max-w-screen-xl px-4 py-6 mx-auto text-black sm:grid-cols-2 md:px-6 h-full items-center">
              <ul className="space-y-4">
                  <li>
                      <Link 
                        href={navLinks.services.kitchens} 
                        className="block p-3 rounded-lg hover:bg-[#c9c5b1] transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                          <div className="font-semibold text-lg mb-1">Kitchens</div>
                          <span className="text-sm text-gray-600">{serviceDescriptions.kitchens}</span>
                      </Link>
                  </li>
                  <li>
                      <Link 
                        href={navLinks.services.wardrobes} 
                        className="block p-3 rounded-lg hover:bg-[#c9c5b1] transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                          <div className="font-semibold text-lg mb-1">Wardrobes</div>
                          <span className="text-sm text-gray-600">{serviceDescriptions.wardrobes}</span>
                      </Link>
                  </li>
                  <li>
                      <Link 
                        href={navLinks.services.slidingDoors} 
                        className="block p-3 rounded-lg hover:bg-[#c9c5b1] transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                          <div className="font-semibold text-lg mb-1">Sliding Doors</div>
                          <span className="text-sm text-gray-600">{serviceDescriptions.slidingDoors}</span>
                      </Link>
                  </li>
              </ul>
              <ul className="space-y-4">
                  <li>
                      <Link 
                        href={navLinks.services.vanities} 
                        className="block p-3 rounded-lg hover:bg-[#c9c5b1] transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                          <div className="font-semibold text-lg mb-1">Vanities</div>
                          <span className="text-sm text-gray-600">{serviceDescriptions.vanities}</span>
                      </Link>
                  </li>
                  <li>
                      <Link 
                        href={navLinks.services.laundries} 
                        className="block p-3 rounded-lg hover:bg-[#c9c5b1] transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                          <div className="font-semibold text-lg mb-1">Laundries</div>
                          <span className="text-sm text-gray-600">{serviceDescriptions.laundries}</span>
                      </Link>
                  </li>
                  <li>
                      <Link 
                        href={navLinks.services.showerScreens} 
                        className="block p-3 rounded-lg hover:bg-[#c9c5b1] transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                          <div className="font-semibold text-lg mb-1">Shower Screens</div>
                          <span className="text-sm text-gray-600">{serviceDescriptions.showerScreens}</span>
                      </Link>
                  </li>
              </ul>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;