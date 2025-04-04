
import { useState, useEffect } from "react";

// Breakpoints for different device types
const MOBILE_BREAKPOINT = 768;
const SMALL_MOBILE_BREAKPOINT = 360;

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
