
import React from 'react';
import { cn } from "@/lib/utils";

interface ProfileImageProps {
  src?: string;
  alt: string;
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ 
  src = 'https://res.cloudinary.com/dv8e9h3o7/image/upload/v1742657168/7fe4feca-264c-4bee-a854-ed4023fe0461_xgvch8.jpg', 
  alt, 
  className 
}) => {
  return (
    <div className={cn("relative rounded-full overflow-hidden border-4 border-cv-primary p-1 bg-white", className)}>
      <div className="rounded-full overflow-hidden bg-gray-200 aspect-square">
        {src ? (
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover transition-all duration-500 ease-in-out" 
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-cv-secondary">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-1/2 h-1/2 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileImage;
