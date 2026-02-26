import React, { useState } from "react";
import { Mail, ChevronUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon, YoutubeIcon } from "@/lib/icons";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "../Tooltip/tooltip";
import SocialIcons from "@/components/SocialIcons/SocialIcons";

const Footer2 = ({
  logo = {
    text: "netro",
  },
  tagline = "Praesent nec nisl a purus blandit viverra. Pellentesque habitant morbi tristique senectuse.",
  contactInfo = {
    address: "Address: 1234 Heaven Stress,USA.",
    phone: "(+84) 1800 68 68",
    email: "sellkar@domain.com"
  },

    socials = {
    facebook: "https://facebook.com/yourpage",
    instagram: "https://instagram.com/yourpage",
    twitter: "https://twitter.com/yourpage",
    youtube: "https://youtube.com/yourchannel"
  },
  copyright = "© Copyright 2025 | Netro By ShopiLaunch. Powered by Shopify.",
  menuSections = [
    {
      title: "ABOUT US",
      links: [
        { text: "About Us", url: "http://localhost:3000/aboutus" },
        { text: "Delivery Information", url: "#" },
        { text: "Privacy Policy", url: "#" },
        { text: "Discount", url: "#" },
        { text: "Custom Service", url: "#" },
        { text: "Term & Condition", url: "#" },
      ],
    },
    
    {
      title: "DISCOVER MORE",
      links: [
        { text: "Custom Service", url: "#" },
        { text: "F.A.Q.'s", url: "http://localhost:3000/faqs" },
        { text: "Ordering Tracking", url: "#" },
        { text: "Contact Us", url: "http://localhost:3000/contactus" },
        { text: "Events", url: "#" },
        { text: "Popular", url: "#" },
      ],
    },
  ],
 
}) => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-gray-50 relative">
      <div className="mx-auto px-4 pt-15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">

          {/* Left Column - Logo and Contact */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-black mb-4">{logo.text}</h2>
              <p className="text-gray-400  text-md leading-relaxed mb-6">{tagline}</p>
            </div>
            <div className="text-gray-400 text-md space-y-2">
              <p>{contactInfo.address}</p>
              <p>Email: <a href={`mailto:${contactInfo.email}`} className="hover:text-black transition-colors">{contactInfo.email}</a></p>
              <p>Phone: <a href={`tel:${contactInfo.phone}`} className="hover:text-black transition-colors">{contactInfo.phone}</a></p>
            </div>
          </div>

          {/* Middle Columns - Navigation Links */}
          <div className="lg:col-span-6  grid grid-cols-1 sm:grid-cols-2">
            {menuSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className=" text-black font-bold text-sm mb-6 tracking-wide">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.url}
                        className="text-gray-400 hover:text-black transition-colors text-md"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column - Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-black text-sm mb-6 tracking-wide">NEWSLETTERS</h3>
            <p className="text-gray-400 text-md mb-6 leading-relaxed">
              Enter your email below to be the first to know about new collections and product launches.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-400 text-sm text-gray-800 placeholder-gray-400"
              />
              <button
                onClick={handleSubscribe}
                className="bg-black text-white p-3 cursor-pointer  transition-colors"
              >
                <Mail size={20} />
              </button>


            </div>

            <div className="flex  mt-7  text-white">
          <SocialIcons socials={socials}/>
            </div>


          </div>
        </div>

        {/* Bottom Section - Copyright and Payment Icons */}
        <Separator />
        <div className=" py-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-sm">{copyright}</p>
          <img src="/ThemePictures/cards.webp" alt="" />

        </div>
      </div>


      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  );
};

export default Footer2;







