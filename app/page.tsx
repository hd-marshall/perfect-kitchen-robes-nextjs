import React from 'react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import GridGallery from '@/components/GridGallery';
import OurProcess from '@/components/OurProcess';
import ImageCarousel from '@/components/ImageCarousel';
import SocialMediaSection from '@/components/SocialMediaSection';
import HalfHero from '@/components/HalfVerticalHero';
import TestimonialSlider from '@/components/TestimonialSlider';

// Define image paths as constants
const heroImage = "/assets/images/hero-home.jpeg";

// Service images
const kitchenImage = "/assets/images/kitchens/services-kitchen.webp";
const wardrobeImage = "/assets/images/wardrobes/services-wardrobes.webp";
const slidingDoorImage = "/assets/images/sliding-doors/services-sliding-door.webp";
const vanityImage = "/assets/images/vanities/services-vanity.webp";
const laundryImage = "/assets/images/laundries/services-laundry.webp";
const showerScreenImage = "/assets/images/shower-screens/services-shower.webp";

// About us images
const aboutUsWorking = "/assets/images/about-us/about-hero.webp";

// Metadata for the page
export const metadata = {
  title: 'Perfect Kitchen & Robes | Home',
  description: 'With over 35+ years of delivering dream kitchens and robes.',
};

export default function Home() {
  // Set up service images with direct paths
  const servicesImages = [
    {
      src: kitchenImage,
      alt: "Kitchens",
      type: "Kitchens",
      description: "Custom kitchen designs tailored to your space and style preferences.",
      link: "/services/kitchens"
    },
    {
      src: wardrobeImage,
      alt: "Wardrobes",
      type: "Wardrobes",
      description: "Stylish storage solutions maximising space and organization.",
      link: "/services/wardrobes"
    },
    {
      src: slidingDoorImage,
      alt: "Sliding Doors",
      type: "Sliding Doors",
      description: "Space-saving door solutions with contemporary designs.",
      link: "/services/sliding-doors"
    },
    {
      src: vanityImage,
      alt: "Vanities",
      type: "Vanities",
      description: "Elegant bathroom vanities combining functionality and style.",
      link: "/services/vanities"
    },
    {
      src: laundryImage,
      alt: "Laundries",
      type: "Laundries",
      description: "Efficient laundry designs to simplify your washing routine.",
      link: "/services/laundries"
    },
    {
      src: showerScreenImage,
      alt: "Shower Screens",
      type: "Shower Screens",
      description: "Modern shower screens adding sophistication to your bathroom.",
      link: "/services/shower-screens"
    }
  ];

  const galleryImages = [
    {
      src: "/assets/images/kitchens/kitchen-home-our-work.webp",
      alt: "Modern kitchen design",
      description: "The client transformed their dated kitchen with sleek stone counter tops and custom cabinetry. The open-concept design increased their home's value while creating the perfect family gathering space.",
      buttonText: "Discover Kitchens",
      buttonLink: "/services/kitchens"
    },
    {
      src: "/assets/images/wardrobes/wardrobes-home-page-gallery.webp",
      alt: "Custom wardrobe design",
      description: "Our floor-to-ceiling wardrobe solution solved the client's storage challenges with specialised compartments and mirrored sliding doors. Their bedroom is now clutter-free with everything perfectly organised.",
      buttonText: "Discover Wardrobes",
      buttonLink: "/services/wardrobes"
    },
    {
      src: "/assets/images/laundries/laundry-home-our-work.webp",
      alt: "Modern laundry renovation",
      description: "The customer's cramped laundry was re-imagined with integrated storage, a folding counter, and efficient layout. Moisture-resistant materials ensure durability while stylish finishes complement their home.",
      buttonText: "Discover Laundries",
      buttonLink: "/services/laundries"
    },
    {
      src: "/assets/images/shower-screens/shower-screen-home-our-work.webp",
      alt: "Frameless shower screen",
      description: "The client's family modernised their bathroom with our frame-less shower screen. The clear glass creates an open feel while quality installation ensures water-tight performance with minimal maintenance.",
      buttonText: "Discover Shower Screens",
      buttonLink: "/services/shower-screens"
    },
    {
      src: "/assets/images/sliding-doors/sliding-home-our-work.webp",
      alt: "Custom sliding door installation",
      description: "The customer separated their open-plan living area without losing natural light. Our glass sliding doors create distinct zones while maintaining visual flow with smooth operation and noise reduction.",
      buttonText: "Discover Sliding Doors",
      buttonLink: "/services/sliding-doors"
    },
    {
      src: "/assets/images/vanities/vanity-home-our-work.webp",
      alt: "Modern bathroom vanity",
      description: "The client's bathroom transformation features our floating vanity with integrated lighting and ample storage. The wall-mounted design creates floor space while waterproof materials ensure longevity.",
      buttonText: "Discover Vanities",
      buttonLink: "/services/vanities"
    }
  ];
  
  // About us images for the HalfHero component
  const aboutUs = [
    aboutUsWorking,
  ];
  
  return (
    <div>
      <Hero
        imagePath={heroImage}
        title="Designed for You, Built to Last"
        text="With over 35+ years of delivering dream kitchens and robes."
        buttonText="Make an Enquiry"
        buttonLink="/contact"
      />
      
      <h2 className="text-white md:text-5xl text-4xl text-center mt-8 font-bold"
        style={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
        }}>
        Our Services
      </h2>
      <GridGallery images={servicesImages}/>

      <OurProcess/>

      <h2 className="text-white md:text-5xl text-4xl text-center mt-8 font-bold"
        style={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
        }}>
        Our Work
      </h2>
      <ImageCarousel images={galleryImages}/>

      <SocialMediaSection/>

      <HalfHero images={aboutUs}/>
      
      <h2 className="text-black md:text-5xl text-4xl text-center py-8 font-bold bg-white"
        style={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
        }}>
        Don't just take our word for it...
      </h2>
      
      <TestimonialSlider/>
    </div>
  );
}