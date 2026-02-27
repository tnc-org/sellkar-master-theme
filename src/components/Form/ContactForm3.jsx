"use client"
import { useState } from 'react';
import AnimatedButton from '../Button/Button';

export default function ContactForm3() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          
          <p className="text-gray-600 text-sm mb-8 leading-relaxed">
            If you would like to know more about our policies, you can consult our terms and Conditions.
            You will also be able to follow your order (tracking number will be provided in an e-mail after
            ordering). You wish to return some items? <a href="#" className="text-blue-600 underline">Click here.</a>
          </p>

          {/* Contact Details */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 flex-shrink-0 mt-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-gray-600 text-sm">
                  Click the icon in the button right of the page to talk to our agents during business hours. At other times we will respond as soon as possible.
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 flex-shrink-0 mt-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600 text-sm">(+84) 1800 68 68</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 flex-shrink-0 mt-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600 text-sm">hello@domain.com</p>
              </div>
            </div>

            {/* Open Hours */}
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 flex-shrink-0 mt-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Open Hours</h3>
                <p className="text-gray-600 text-sm">Monday to Friday 09:30 - 17:30</p>
                <p className="text-gray-600 text-sm">Saturday & Sunday 10:00 - 15:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div>
          <h2 className="text-4xl font-bold mb-8">Send Us An Message</h2>
          
          <div className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your name..."
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your email..."
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your message..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm resize-none"
              ></textarea>
            </div>

           <AnimatedButton 
           text='Submit'
           className='w-full'
           padding='px-4'
           bgColor='bg-black'
           textColor='text-white'
           rounded='rounded-md'

           />
          </div>
        </div>
      </div>
    </div>
  );
}