"use client"
import React, { useState } from "react";
import { Mail, ChevronUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SocialIcons from "@/components/SocialIcons/SocialIcons";
import { useRouter } from "next/navigation";

const Footer4 = ({
  logo = {
    text: "netro",
  },
  tagline = "True radiance starts with self-care nurturing your skin reflects the beauty within.",
  contactInfo = {
    address: "1234 Heaven Stress, USA.",
    phone: "(+84) 1800 68 68",
    email: "hello@domain.com",
    hours: "All Day: 9:00AM - 22:00PM"
  },
  socials = {
    twitter: "https://twitter.com/yourpage",
    facebook: "https://dribbble.com/yourpage",
    linkedin: "https://behance.com/yourpage",
    instagram: "https://instagram.com/yourpage"
  },
  categories = [
    { text: "Skincare Solutions", url: "#" },
    { text: "Complexion Perfection", url: "#" },
    { text: "Eye Enhancements", url: "#" },
    { text: "Radiant Lips", url: "#" }
  ],
  copyright = "© Copyright 2026 | Powered by Sellkar.",
  footerLinks = [
    
    { text: "Faqs", url: "/faqs" },
    { text: "Terms and conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
    { text: "Cookies", url: "#" }
  ]
}) => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail("");
    }
  };
const router = useRouter()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-gray-400 relative">
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1 - Logo and Tagline */}
          <div>
            <h2 className="text-5xl font-bold text-white mb-6">{logo.text}</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">{tagline}</p>
            <div className="flex text-white">
              <SocialIcons socials={socials} />
            </div>
          </div>

          {/* Column 2 - About Us */}
          <div>
            <h3 onClick={()=> router.push("aboutus")} className="text-white font-semibold text-base mb-6 cursor-pointer">About Us</h3>
            <div className="space-y-4 text-sm">
             
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                <span>{contactInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Column 3 - products */}
          <div>
            <h3 onClick={()=> router.push("/products")} className="text-white font-semibold text-base mb-6 cursor-pointer">Products</h3>
            <ul className="space-y-3 text-sm">
              {categories.map((category, idx) => (
                <li key={idx}>
                  <a href={category.url} className="hover:text-white transition-colors">
                    {category.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6">Newsletters</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-800 focus:outline-none focus:border-gray-600 text-sm text-white placeholder-gray-500"
              />
              <button
                onClick={handleSubscribe}
                className="bg-white text-black p-3 cursor-pointer transition-colors"
              >
                <Mail size={20} />
              </button>
            </div>
            <div className="mt-8">
              <img src="/ThemePictures/cards.webp" alt="Payment cards" className="h-8 object-contain opacity-70" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <Separator className="bg-gray-800" />
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500">
            {copyright}
          </p>
          <div className="flex gap-6">
            {footerLinks.map((link, idx) => (
              <a key={idx} href={link.url} className="text-gray-400 hover:text-white transition-colors">
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-white text-black w-12 h-12 flex items-center justify-center hover:bg-gray-200 transition-colors shadow-lg z-50"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  );
};

export default Footer4;