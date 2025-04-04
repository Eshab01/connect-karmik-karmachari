
import React from "react";
import { useIsSmallMobile } from "@/hooks/use-mobile";

interface CategoryCardProps {
  name: string;
  icon: string;
  onClick?: () => void;
}

const CategoryCard = ({ name, icon, onClick }: CategoryCardProps) => {
  const isSmallMobile = useIsSmallMobile();
  
  return (
    <div 
      className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <img src={icon} alt={name} className="h-12 mx-auto mb-2" />
      <p className={`font-medium ${isSmallMobile ? "text-sm" : "text-base"}`}>{name}</p>
    </div>
  );
};

export default CategoryCard;
