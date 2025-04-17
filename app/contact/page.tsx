// app/contact/page.tsx
import { Metadata } from 'next';

import HalfHorizontalHero from '@/components/HalfHorizontalHero';
import SocialMediaSection from '@/components/SocialMediaSection';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: "Contact Us | Perfect Kitchen Robes",
  description: "Ready to transform your home? Contact our Melbourne team for a free quote on kitchens, wardrobes, laundries, vanities, sliding doors, or shower screens.",
};

export default function ContactPage() {
  return (
    <section>
      <HalfHorizontalHero
        imagePath="/assets/images/contact/contact-hero.webp"
        text="Contact Us"
      />
      
      {/* Contact Information Section - Styled like the image */}
      <div className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-700 mb-12">Contact Information</h2>
          
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Details */}
            <div className="w-full md:w-1/2 space-y-10">
            {/* Address */}
            <div className="flex items-center">
                <div className="h-16 w-16 rounded-full border-2 border-zinc-800 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-zinc-800">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                </div>
                <div className="ml-6">
                <p className="text-xl font-medium text-gray-800">57 Capital Link Drive</p>
                <p className="text-gray-600 text-lg">CAMPBELLFIELD VIC 3061</p>
                </div>
            </div>
            
            {/* Phone - Now clickable */}
            <div className="flex items-center">
                <a href="tel:0433537057" className="flex items-center group">
                  <div className="h-16 w-16 rounded-full border-2 border-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:bg-zinc-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-zinc-800">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <p className="text-xl font-medium text-gray-800 group-hover:text-gray-600 transition-colors">0433 537 057</p>
                    <p className="text-gray-500 text-sm group-hover:underline">Click to call</p>
                  </div>
                </a>
            </div>
            
            {/* Email - Now clickable */}
            <div className="flex items-center">
                <a href="mailto:info@perfectkitchenrobes.com" className="flex items-center group">
                  <div className="h-16 w-16 rounded-full border-2 border-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:bg-zinc-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-zinc-800">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <p className="text-xl font-medium text-gray-800 group-hover:text-gray-600 transition-colors">info@perfectkitchenrobes.com</p>
                    <p className="text-gray-500 text-sm group-hover:underline">Click to send an email</p>
                  </div>
                </a>
            </div>
            </div>
            
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="h-full w-full rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/assets/images/contact/contact-img.webp" 
                  alt="Modern kitchen design by Perfect Kitchen Robes" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Social Media Section */}
      <SocialMediaSection />
      
      {/* Map */}
      <div className="w-full" id="map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.1752690791244!2d144.9465683!3d-37.6741667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64f4b8b23c5e9%3A0x7d3f9c4e0c3c9b0!2s57%20Capital%20Link%20Dr%2C%20Campbellfield%20VIC%203061!5e0!3m2!1sen!2sau!4v1635000000000!5m2!1sen!2sau"
          width="100%"
          height="550"
          style={{border: 0}}
          loading="lazy"
        />
      </div>
      <ContactForm />
    </section>
  );
}