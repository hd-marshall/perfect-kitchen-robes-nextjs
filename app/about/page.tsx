// app/about/page.tsx
import { Metadata } from 'next';
import HalfHorizontalHero from '@/components/HalfHorizontalHero';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "About Us | Perfect Kitchen Robes",
  description: "Meet the team behind Perfect Kitchen Robes, providing custom kitchen and wardrobe solutions in Melbourne.",
};

// Team member interface
interface TeamMember {
  name: string;
  role: string;
  imageSrc: string;
}

export default function AboutPage() {
  // Team member data
  const teamMembers: TeamMember[] = [
    {
      name: "Tim Grech",
      role: "Owner",
      imageSrc: "/assets/images/team/placeholder-1.jpg" // Replace with actual image path later
    },
    {
      name: "Steve Grech",
      role: "Owner",
      imageSrc: "/assets/images/team/placeholder-2.jpg" // Replace with actual image path later
    },
    {
      name: "Matt Grech",
      role: "Owner",
      imageSrc: "/assets/images/team/placeholder-3.jpg" // Replace with actual image path later
    }
  ];

  return (
    <section>
      <HalfHorizontalHero
        imagePath="/assets/images/about-us/about-hero.webp"
        text="About Us"
      />
      
      {/* Company Introduction */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Our Story</h2>
          <p className="text-lg mb-8 text-black">
            Perfect Kitchen & Robes is a family-owned business with 35+ years of experience in designing and installing custom kitchen and wardrobe solutions throughout Melbourne.
          </p>
          <p className="text-lg mb-8 text-black">
            We take pride in our craftsmanship, attention to detail, and commitment to customer satisfaction. Every project is handled with care, from initial design consultation to final installation.
          </p>
          <p className="text-lg text-black">
            Our team of skilled professionals works closely with each client to understand their needs and deliver exceptional results that enhance both the functionality and aesthetic appeal of their homes.
          </p>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-800">
              The Talented People<br />
              Behind the Scenes
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Square image with border radius */}
                <div className="w-64 h-64 rounded-2xl overflow-hidden mb-6 bg-gray-200 border border-gray-300 shadow-md">
                  {/* When you have actual images, uncomment this and remove the placeholder div below */}
                  {/* 
                  <Image
                    src={member.imageSrc}
                    alt={`Photo of ${member.name}`}
                    width={256}
                    height={256}
                    objectFit="cover"
                    className="w-full h-full"
                  />
                  */}
                  
                  {/* Placeholder for now */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16 text-gray-400">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-zinc-800 mb-1">{member.name}</h3>
                <p className="text-gray-600 uppercase tracking-wider text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}