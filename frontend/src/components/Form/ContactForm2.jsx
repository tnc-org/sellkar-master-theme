"use client"

import React, { useState } from 'react';
import AnimatedButton from '../Button/Button';

const ContactForm2 = ({
  title = "Contact Form",
  onSubmit
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
    }
   
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    // <div className="w-full max-w-4xl mx-auto px-4 py-12 md:py-16">
    <div className="w-full px-4 py-12 md:py-16">

     
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-5xl font-normal text-gray-900 mb-3">
          {title}
        </h2>
        <div className="w-20 h-0.25 bg-gray-800 mt-8 mx-auto"></div>
      </div>

      
      <div className="space-y-6">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          
          <div>
            <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-md px-4 py-3 border border-gray-300 focus:outline-none transition-colors"
            />
          </div>

          
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-md border-gray-300 focus:outline-none  transition-colors"
            />
          </div>
        </div>

      
        <div>
          <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="11"
            className="w-full px-4 py-4 border rounded-md border-gray-300 focus:outline-none  transition-colors resize-none"
          />
        </div>

        
        <div className="flex justify-center pt-4">
     

          <AnimatedButton
          text='SUBMIT'
          bgColor='bg-black'
          padding='px-12'
          textColor='text-white'
          rounded='rounded-md'
          onClick={handleSubmit}
          />
        </div>

      </div>
    </div>
  );
};

export default ContactForm2;