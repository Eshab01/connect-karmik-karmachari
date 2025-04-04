
import React from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile, useIsSmallMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const Index = () => {
  const isMobile = useIsMobile();
  const isSmallMobile = useIsSmallMobile();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-primary font-bold text-xl">ConnectLabour</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size={isSmallMobile ? "sm" : "default"}>Login</Button>
            <Button size={isSmallMobile ? "sm" : "default"}>Register</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-grow flex items-center bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 py-12">
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className={`font-bold text-4xl ${isSmallMobile ? "text-2xl" : isMobile ? "text-3xl" : "text-4xl"} mb-4 text-gray-900`}>
                Connect with Workers & Jobs Instantly
              </h1>
              <p className={`${isSmallMobile ? "text-sm" : "text-base"} mb-6 text-gray-700 max-w-lg`}>
                A simple platform that connects employers with daily wage workers across various skill categories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="w-full sm:w-auto" size={isSmallMobile ? "sm" : "default"}>Find Workers</Button>
                <Button variant="outline" className="w-full sm:w-auto" size={isSmallMobile ? "sm" : "default"}>Find Jobs</Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/src/assets/hero-image.svg" 
                alt="Connect Labour Platform" 
                className="max-w-full h-auto max-h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className={`text-center font-bold ${isSmallMobile ? "text-xl" : "text-2xl"} mb-8`}>Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div key={category.name} className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
                <img src={category.icon} alt={category.name} className="h-12 mx-auto mb-2" />
                <p className={`font-medium ${isSmallMobile ? "text-sm" : "text-base"}`}>{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className={`text-center font-bold ${isSmallMobile ? "text-xl" : "text-2xl"} mb-8`}>How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.title} className="text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className={`font-semibold mb-2 ${isSmallMobile ? "text-base" : "text-lg"}`}>{step.title}</h3>
                <p className={`text-gray-600 ${isSmallMobile ? "text-xs" : "text-sm"}`}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="md:flex justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className={`font-bold ${isSmallMobile ? "text-sm" : "text-base"}`}>ConnectLabour</p>
              <p className={`${isSmallMobile ? "text-xs" : "text-sm"} text-gray-400`}>© 2025 ConnectLabour. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="#" className={`text-gray-300 hover:text-white ${isSmallMobile ? "text-xs" : "text-sm"}`}>About</Link>
              <Link to="#" className={`text-gray-300 hover:text-white ${isSmallMobile ? "text-xs" : "text-sm"}`}>Contact</Link>
              <Link to="#" className={`text-gray-300 hover:text-white ${isSmallMobile ? "text-xs" : "text-sm"}`}>Privacy Policy</Link>
              <Link to="#" className={`text-gray-300 hover:text-white ${isSmallMobile ? "text-xs" : "text-sm"}`}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Data for categories section
const categories = [
  { name: "Construction", icon: "/src/assets/category-construction.svg" },
  { name: "Domestic Help", icon: "/src/assets/category-domestic.svg" },
  { name: "Driving", icon: "/src/assets/category-driving.svg" },
  { name: "Factory", icon: "/src/assets/category-factory.svg" },
  { name: "Technicians", icon: "/src/assets/category-technicians.svg" },
  { name: "More Categories", icon: "/src/assets/category-more.svg" },
];

// Data for how it works section
const steps = [
  { 
    number: 1, 
    title: "Create Account", 
    description: "Register as an employer or worker with basic details" 
  },
  { 
    number: 2, 
    title: "Find Matches", 
    description: "Browse workers or jobs based on skills and location" 
  },
  { 
    number: 3, 
    title: "Connect Directly", 
    description: "Communicate and hire without any middlemen" 
  }
];

export default Index;
