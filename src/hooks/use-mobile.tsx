
import { useState, useEffect } from "react";

// Mobile breakpoints for different device sizes
const MOBILE_BREAKPOINT = 768; // Standard mobile breakpoint
const SMALL_MOBILE_BREAKPOINT = 360; // Small mobile devices
const MOBILE_FRAME_WIDTH = 414; // iPhone 11 Pro Max / 6.5 inch equivalent

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Define the check function
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    // Run once on mount
    checkMobile();
    
    // Add event listener
    window.addEventListener("resize", checkMobile);
    
    // Clean up
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

export function useIsSmallMobile() {
  const [isSmallMobile, setIsSmallMobile] = useState<boolean>(false);

  useEffect(() => {
    // Define the check function
    const checkSmallMobile = () => {
      setIsSmallMobile(window.innerWidth < SMALL_MOBILE_BREAKPOINT);
    };
    
    // Run once on mount
    checkSmallMobile();
    
    // Add event listener
    window.addEventListener("resize", checkSmallMobile);
    
    // Clean up
    return () => window.removeEventListener("resize", checkSmallMobile);
  }, []);

  return isSmallMobile;
}

export function useMobileFrame() {
  const [isInMobileFrame, setIsInMobileFrame] = useState<boolean>(true);
  
  useEffect(() => {
    // Always true - we'll always show the mobile frame
    setIsInMobileFrame(true);
  }, []);
  
  return isInMobileFrame;
}
