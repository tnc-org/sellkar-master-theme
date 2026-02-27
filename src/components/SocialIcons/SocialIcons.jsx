import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../Shadcn/Tooltip/tooltip'
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon, YoutubeIcon } from '@/lib/icons'

const SocialIcons = ({ socials = {}, className = "" }) => {
  const socialConfig = [
    { key: 'instagram', Icon: InstagramIcon, label: 'Instagram' },
    { key: 'twitter', Icon: XIcon, label: 'X' },
    { key: 'youtube', Icon: YoutubeIcon, label: 'YouTube' },
    { key: 'facebook', Icon: FacebookIcon, label: 'Facebook' },
    {key: 'linkedin', Icon: LinkedinIcon, label: 'Linked In'}
  ];


  const activeSocials = socialConfig.filter(({ key }) => socials[key]);

  if (activeSocials.length === 0) return null;

  return (
    <div className={`flex gap-3 ${className}`}>
      {activeSocials.map(({ key, Icon, label }) => (
        <TooltipProvider key={key}>
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={socials[key]}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-white border border-gray-400 hover:border-black rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-black"
              >
                <Icon className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
              </a>
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  )
}

export default SocialIcons
