import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ServiceItemProps {
  title: string;
  isActive: boolean;
  icon?: ReactNode;
  onClick: () => void;
}

const ServiceItem = ({ title, isActive, icon, onClick }: ServiceItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 mb-2 rounded flex items-center transition-colors ${
        isActive 
          ? 'bg-construction-yellow/20 border-l-4 border-construction-yellow' 
          : 'bg-white hover:bg-gray-100'
      }`}
      aria-selected={isActive}
    >
      {icon && <span className="mr-3">{icon}</span>}
      <span className="font-medium">{title}</span>
      {isActive && (
        <span className="ml-auto text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </span>
      )}
    </button>
  );
};

export default ServiceItem;