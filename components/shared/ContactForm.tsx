"use client";
import React, { useEffect, useRef, useState } from 'react';

// Define form status type
type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// Define form data interface
interface FormData {
  name: string;
  suburb: string;
  email: string;
  phone: string;
  service: string;
  source: string;
  notes: string;
}

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  useEffect(() => {
    const handleSubmit = (e: React.FormEvent | Event) => {
      // Prevent both default form submission and page jump
      e.preventDefault();
      e.stopPropagation();
      
      // Show loading message
      setFormStatus('loading');
      setStatusMessage('Sending your request...');
      
      const formData: FormData = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        suburb: (document.getElementById('suburb') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        phone: (document.getElementById('phone') as HTMLInputElement).value,
        service: (document.getElementById('service') as HTMLSelectElement).value,
        source: (document.getElementById('source') as HTMLSelectElement).value,
        notes: (document.getElementById('notes') as HTMLTextAreaElement).value
      };
      
      // Remove the form action and method attributes if they exist
      const form = formRef.current;
      if (form) {
        form.removeAttribute('action');
        form.removeAttribute('method');
      }
      
      fetch("https://formsubmit.co/ajax/info@perfectkitchenrobes.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Clear form
        if (form) {
          form.reset();
        }
        // Show success message
        setFormStatus('success');
        setStatusMessage('Thank you! Your message has been sent.');
        // Optional: Hide success message after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
          setStatusMessage('');
        }, 5000);
      })
      .catch(error => {
        console.log(error);
        // Show error message
        setFormStatus('error');
        setStatusMessage('Sorry, there was an error sending your message.');
      });
      
      // Return false to ensure no jumping
      return false;
    };
    
    const form = formRef.current;
    if (form) {
      form.addEventListener('submit', handleSubmit);
    }
    
    // Cleanup event listener
    return () => {
      if (form) {
        form.removeEventListener('submit', handleSubmit);
      }
    };
  }, []);
  
  return (
    <div id="contact-form" className="container flex justify-center items-center min-h-[80vh] py-4 bg-white" style={{minWidth: "100%"}}>
      <div className="flex flex-col md:flex-row gap-6 max-w-5xl w-full">
        {/* Form Section */}
        <div className="w-full md:w-3/5 p-8 rounded-2xl shadow-2xl bg-white text-center">
          <div className="flex justify-center mb-6">
            <span className="font-bold uppercase text-4xl md:text-5xl text-black">Make An Enquiry</span>
          </div>
          
          {/* Form with message display */}
          <form id="contactForm" ref={formRef} className="w-full">
            {/* Form Status Message */}
            {formStatus !== 'idle' && (
              <div className={`my-4 p-4 rounded-lg transition-all duration-300 ${
                formStatus === 'loading' ? 'bg-gray-100 text-gray-700 border border-gray-300' :
                formStatus === 'success' ? 'bg-green-100 text-green-700 border border-green-300' :
                'bg-red-100 text-red-700 border border-red-300'
              }`}>
                {statusMessage}
              </div>
            )}
            
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              {/* Full Name */}
              <input 
                id="name"
                name="name"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                type="text" 
                placeholder="Full Name*" 
                required
              />
              
              {/* Suburb */}
              <input 
                id="suburb"
                name="suburb"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                type="text" 
                placeholder="Suburb*" 
                required
              />
              
              {/* Email */}
              <input 
                id="email"
                name="email"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                type="email" 
                placeholder="Email*" 
                required
              />
              
              {/* Phone */}
              <input 
                id="phone"
                name="phone"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                type="tel" 
                placeholder="Phone*" 
                required
              />
              
              {/* Service Type Dropdown */}
              <select
                id="service"
                name="service"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
                defaultValue=""
              >
                <option value="" disabled>Select Service*</option>
                <option value="Kitchens">Kitchens</option>
                <option value="Wardrobes">Wardrobes</option>
                <option value="Sliding Doors">Sliding Doors</option>
                <option value="Vanities">Vanities</option>
                <option value="Laundries">Laundries</option>
                <option value="Shower Screens">Shower Screens</option>
                <option value="Other">Other</option>
              </select>
              
              {/* How did you find us */}
              <select
                id="source"
                name="source"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
                defaultValue=""
              >
                <option value="" disabled>How did you find us?*</option>
                <option value="Google">Google Search</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Friend/Family Referral</option>
                <option value="Repeat Customer">I'm a Repeat Customer</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            {/* Message/Notes */}
            <div className="my-4">
              <textarea 
                id="notes"
                name="notes"
                placeholder="Project Details/Notes*" 
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <div className="my-2 flex justify-center">
              <button 
                type="submit"
                className="text-md font-bold tracking-wide bg-black text-white p-3 rounded-lg w-full md:w-1/3
                          hover:bg-[#c9c5b1] hover:text-white transition-colors duration-300 
                          focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        {/* Info Panel */}
        <div className="w-full md:w-2/5 p-8 bg-black rounded-2xl text-white">
          <div className="flex flex-col h-full justify-center">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 pt-1 mr-2 text-[#c9c5b1]" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                  </svg>
                </div>
                <div className="flex flex-col ml-2">
                  <h2 className="text-2xl font-semibold">Office Location</h2>
                  <p className="text-gray-400">57 Capital Link Drive, CAMPBELLFIELD VIC 3061</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <a href="tel:0433537057" className="group">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 pt-1 mr-2 text-[#c9c5b1] group-hover:text-white transition-colors duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                      />
                    </svg>
                  </a>
                </div>
                <div className="flex flex-col ml-2">
                  <h2 className="text-2xl font-semibold">Contact Us</h2>
                  <a href="tel:0433537057" className="text-gray-400 hover:text-[#c9c5b1] transition-colors duration-300">
                    Phone: 0433 537 057
                  </a>
                  <a href="mailto:info@perfectkitchenrobes.com" className="text-gray-400 hover:text-[#c9c5b1] transition-colors duration-300">
                    Email: info@perfectkitchenrobes.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 pt-1 mr-2 text-[#c9c5b1]" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </div>
                <div className="flex flex-col ml-2">
                  <h2 className="text-2xl font-semibold">Opening Hours</h2>
                  <p className="text-gray-400">Monday - Thursday: 9:00AM - 3:30PM</p>
                  <p className="text-gray-400">Friday: 9:00AM - 1:30PM</p>
                  <p className="text-gray-400">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;