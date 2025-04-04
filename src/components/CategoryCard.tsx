
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
      className="bg-gray-50 p-3 rounded-lg text-center hover:bg-gray-100 active:bg-gray-200 transition-all cursor-pointer touch-manipulation"
      onClick={onClick}
    >
      <img src={icon} alt={name} className="h-10 mx-auto mb-1" />
      <p className={`font-medium ${isSmallMobile ? "text-xs" : "text-sm"}`}>{name}</p>
    </div>
  );
};

export default CategoryCard;
