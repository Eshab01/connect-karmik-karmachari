
import React from "react";
import { Button } from "@/components/ui/button";
import { useIsSmallMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import CategoryCard from "@/components/CategoryCard";

const Index = () => {
  const isSmallMobile = useIsSmallMobile();

  return (
    <div className="flex flex-col">
      {/* Header - Simplified for mobile */}
      <header className="bg-white shadow-sm">
        <div className="px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-primary font-bold text-lg">ConnectLabour</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">Login</Button>
            <Button size="sm">Register</Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Mobile optimized */}
      <section className="flex-grow flex items-center bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="px-4 py-8">
          <div className="flex flex-col">
            <div className="mb-6">
              <h1 className={`font-bold ${isSmallMobile ? "text-xl" : "text-2xl"} mb-3 text-gray-900`}>
                Connect with Workers & Jobs Instantly
              </h1>
              <p className={`${isSmallMobile ? "text-xs" : "text-sm"} mb-4 text-gray-700`}>
                A simple platform that connects employers with daily wage workers across various skill categories.
              </p>
              <div className="flex flex-col gap-2">
                <Button className="w-full" size="sm">Find Workers</Button>
                <Button variant="outline" className="w-full" size="sm">Find Jobs</Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/src/assets/hero-image.svg" 
                alt="Connect Labour Platform" 
                className="max-w-full h-auto max-h-48"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-6">
        <div className="px-4">
          <h2 className={`text-center font-bold ${isSmallMobile ? "text-lg" : "text-xl"} mb-4`}>Popular Categories</h2>
          <div className="grid grid-cols-3 gap-2">
            {categories.map((category) => (
              <CategoryCard 
                key={category.name} 
                name={category.name} 
                icon={category.icon} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Simplified for mobile */}
      <section className="bg-gray-50 py-6">
        <div className="px-4">
          <h2 className={`text-center font-bold ${isSmallMobile ? "text-lg" : "text-xl"} mb-4`}>How It Works</h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.title} className="flex items-start">
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                  {step.number}
                </div>
                <div>
                  <h3 className={`font-semibold mb-1 ${isSmallMobile ? "text-sm" : "text-base"}`}>{step.title}</h3>
                  <p className={`text-gray-600 ${isSmallMobile ? "text-xs" : "text-sm"}`}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Simplified for mobile */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="px-4">
          <div className="flex flex-col">
            <div className="mb-3">
              <p className={`font-bold ${isSmallMobile ? "text-sm" : "text-base"}`}>ConnectLabour</p>
              <p className={`${isSmallMobile ? "text-xs" : "text-sm"} text-gray-400`}>© 2025 ConnectLabour. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="#" className={`text-gray-300 hover:text-white ${isSmallMobile ? "text-xs" : "text-sm"}`}>About</Link>
              <Link to="#" className={`text-gray-300 hover:text-white ${isSmallMobile ? "text-xs" : "text-sm"}`}>Contact</Link>
              <Link to="#" className={`text-gray-300 hover:text-white ${isSmallMobile ? "text-xs" : "text-sm"}`}>Privacy</Link>
              <Link to="#" className={`text-gray-300 hover:text-white ${isSmallMobile ? "text-xs" : "text-sm"}`}>Terms</Link>
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
  { name: "Domestic", icon: "/src/assets/category-domestic.svg" },
  { name: "Driving", icon: "/src/assets/category-driving.svg" },
  { name: "Factory", icon: "/src/assets/category-factory.svg" },
  { name: "Technicians", icon: "/src/assets/category-technicians.svg" },
  { name: "More", icon: "/src/assets/category-more.svg" },
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
