
import React from "react";

interface MobileFrameProps {
  children: React.ReactNode;
}

const MobileFrame = ({ children }: MobileFrameProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="relative w-full max-w-[414px] h-[896px] bg-white rounded-[40px] overflow-hidden shadow-2xl border-8 border-gray-800">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-800 rounded-b-xl z-50"></div>
        
        {/* Content area with scrolling */}
        <div className="h-full w-full overflow-y-auto pt-8 pb-6">
          {children}
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-800 rounded-full"></div>
      </div>
    </div>
  );
};

export default MobileFrame;
