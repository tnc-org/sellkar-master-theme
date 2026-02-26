import SocialIcons from '@/components/SocialIcons/SocialIcons';
import React from 'react';


const Footer3 = () => {
  const footerLinks = [
    { label: 'Delivery Information', path: '/delivery-information' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'About', path: '/aboutus' },
    { label: 'Term & Condition', path: '/terms-conditions' }
  ];

    const socialLinks = {
    instagram: 'x',
    twitter: 'x',
    youtube: 'x',
    facebook: 'x',
    linkedin: 'x'
  };

  return (
    <footer className="w-full  border-t border-gray-200 py-7 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="text-sm text-gray-600">
            © Copyright 2025 | Powered by <span className="font-medium">Sellkar</span>
           
          </div>

          {/* Center - Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="text-sm text-black hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

        
          <div>
            <SocialIcons socials={socialLinks}/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;