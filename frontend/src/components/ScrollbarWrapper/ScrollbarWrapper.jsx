import React from "react";

const ScrollbarWrapper = ({ 
  children, 
  className = "",
  maxHeight = "60vh"
}) => {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .custom-scrollbar-slim {
            scrollbar-width: thin;
            scrollbar-color: #d1d5db transparent;
          }
          
          .custom-scrollbar-slim::-webkit-scrollbar {
            width: 8px;
          }
          
          .custom-scrollbar-slim::-webkit-scrollbar-track {
            background: transparent;
            margin: 4px 0;
          }
          
          .custom-scrollbar-slim::-webkit-scrollbar-thumb {
            background-color: #d1d5db;
            border-radius: 4px;
            border: 2px solid transparent;
            background-clip: padding-box;
          }
          
          .custom-scrollbar-slim::-webkit-scrollbar-thumb:hover {
            background-color: #9ca3af;
          }
        `
      }} />
      
      <div 
        className={`flex-1 overflow-y-auto custom-scrollbar-slim ${className}`}
        style={{ maxHeight, paddingRight: '8px' }}
      >
        {children}
      </div>
    </>
  );
};

export default ScrollbarWrapper;