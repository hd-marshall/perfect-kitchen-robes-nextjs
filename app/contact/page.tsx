// app/contact/page.tsx
import { Metadata } from 'next';
import HalfHorizontalHero from '@/components/HalfHorizontalHero';
import ContactInfoBox from '@/components/ContactInfoBox';
import SocialMediaSection from '@/components/SocialMediaSection';

export const metadata: Metadata = {
  title: "Contact Us | Perfect Kitchen Robes",
  description: "Get in touch with our team for custom kitchen and wardrobe solutions across Melbourne.",
};

export default function ContactPage() {
  return (
    <section>
        <HalfHorizontalHero
            imagePath="/assets/images/kitchens/kitchens-hero-page.webp"
            text="Contact Us"
        />
        
        <section className="flex flex-wrap justify-center gap-8 mx-auto max-w-6xl px-4 mb-16">
            <ContactInfoBox 
                icon="fa-solid fa-house" 
                title="VISIT US" 
                content={<>57 Capital Link Drive,<br/>CAMPBELLFIELD VIC 3061</>} 
            />
            
            <ContactInfoBox 
            icon="fa-solid fa-phone" 
            title="CALL US" 
            content={
                <a href="tel:0433537057" className="block">
                0433 537 057
                </a>
            } 
            />
            
            <ContactInfoBox 
            icon="fa-solid fa-envelope" 
            title="EMAIL US" 
            content={
                <a href="mailto:perfectkitchenrobes@gmail.com" className="block">
                perfectkitchenrobes@gmail.com
                </a>
            } 
            />
        </section>
        
        <div className="max-w-6xl mx-auto px-4">
            <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Office Opening Hours</h2>
            <div className="bg-gray-50 rounded-lg shadow-md p-8 max-w-xl mx-auto">
                <table className="w-full mb-4">
                <tbody>
                    <tr className="border-b border-gray-200">
                    <td className="py-3">Monday - Thursday</td>
                    <td className="py-3 text-right font-semibold">9:00 AM - 3:30 PM</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                    <td className="py-3">Friday</td>
                    <td className="py-3 text-right font-semibold">9:00 AM - 1:30 PM</td>
                    </tr>
                    <tr>
                    <td className="py-3">Saturday - Sunday</td>
                    <td className="py-3 text-right font-semibold">Closed</td>
                    </tr>
                </tbody>
                </table>
                <p className="text-gray-600 italic text-sm">
                Please note: We are closed on public holidays. Contact us for special arrangements.
                </p>
            </div>
            </section>
        </div>
        
        <SocialMediaSection />
        
        <div className="w-full mt-16" id="map">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.1752690791244!2d144.9465683!3d-37.6741667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64f4b8b23c5e9%3A0x7d3f9c4e0c3c9b0!2s57%20Capital%20Link%20Dr%2C%20Campbellfield%20VIC%203061!5e0!3m2!1sen!2sau!4v1635000000000!5m2!1sen!2sau"
            width="100%"
            height="550"
            style={{border: 0}}
            loading="lazy"
            />
        </div>
    </section>
  );
}