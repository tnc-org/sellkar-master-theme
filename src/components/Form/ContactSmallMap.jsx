import React from 'react';
import SocialIcons from '../SocialIcons/SocialIcons';


export const ContactSmallMap = ({
  title = "CONTACT INFORMATION",
  description = "We do not sell product from our corporate headquarters in New York City. If you want to visit, please reach out to our customer service team first.",
  address = {
    street: "1201 Broadway",
    suite: "Suite 600"
  },
  email = "hello@domain.com",
  mapImage = "https://netro-store-newdemo46.myshopify.com/cdn/shop/files/map.jpg?v=1744785321&width=1029",
  socials = {
    twitter: "https://twitter.com/yourcompany",
    instagram: "https://instagram.com/yourcompany",
    facebook: "https://facebook.com/yourcompany",
    youtube: "https://youtube.com/yourcompany"
  }
}) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
       
        <div className="bg-gray-100 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-xl">
            
       
            <div className="mb-8">
              <h2 className="text-sm font-semibold tracking-[0.5em] text-gray-800 mb-2">
                {title}
              </h2>
              <div className="w-20 h-0.25 bg-gray-800 mt-8 "></div>
            </div>

            
            <p className="text-gray-600 text-md leading-relaxed mb-8">
              {description}
            </p>

            <div className="mb-8">
              <p className="text-gray-800 text-md">{address.street}</p>
              <p className="text-gray-800 text-md">{address.suite}</p>
            </div>

           
            <div className="mb-20 mt-15 ">
              <a 
                href={`mailto:${email}`}
                className="text-2xl  md:text-4xl font-bold underline text-gray-900 hover:text-gray-600 transition-colors"
              >
                {email}
              </a>
            </div>

            
            <div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold tracking-[0.2em] text-gray-800 mb-2">
                  FOLLOW US
                </h3>
                 <div className="w-20 h-0.25 bg-gray-800 mt-8 "></div>
              </div>
              <SocialIcons socials={socials} />
            </div>

          </div>
        </div>

        {/* Right Side - Map */}
        <div className="relative h-[400px] lg:h-full min-h-[500px] bg-gray-200">
          <img 
            src={mapImage}
            alt="Location Map"
            className="w-full h-full object-cover"
          />
          
          
        </div>

      </div>
    </div>
  );
};

