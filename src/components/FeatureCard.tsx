import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  hoverEffect?: boolean;
  link?: string;
  isSelected?: boolean;
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  hoverEffect = false, 
  link, 
  isSelected = false 
}: FeatureCardProps) => {
  const baseClasses = "rounded-lg p-6 shadow-md border transition-all duration-300 h-full flex flex-col";
  const regularClasses = "bg-black text-white border-gray-600";           // Dark border here
  const selectedClasses = "bg-construction-white text-white border-gray-800";  // Dark border here too
  const hoverClasses = hoverEffect ? 'hover:shadow-xl hover:-translate-y-2 hover:bg-[#ffc107] hover:text-black group' : '';
  
  const content = (
    <>
      <div className={`${isSelected ? 'bg-white/20' : 'bg-construction-yellow/10'} rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
        <div className={`${isSelected ? 'text-white' : 'text-[#ffc107]'} group-hover:text-black`} >
          {icon}
        </div>
      </div>
      <h3 className={`${isSelected ? 'text-white' : 'text-white' } group-hover:text-black text-xl font-semi bold mb-3 `}>{title}</h3>
      <p className={`${isSelected ? 'text-white' : 'text-white'} group-hover:text-black flex-grow line-clamp-4`}>{description}</p>
      
      {link && (
        <div className="mt-6">
          <Link 
            to={link} 
            className={`inline-flex items-center font-medium ${isSelected ? 'text-construction-yellow' : 'text-white'} group-hover:text-black`}
          >
            READ MORE <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      )}
    </>
  );

  return (
    <div className={`${baseClasses} ${isSelected ? selectedClasses : regularClasses} ${hoverClasses}`}>
      {content}
    </div>
  );
};


export default FeatureCard;