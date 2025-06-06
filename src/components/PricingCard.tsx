import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
}

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  isPopular = false,
  buttonText = "Get Started"
}: PricingCardProps) => {

  const navigate = useNavigate();
  return (
    <div 
      className={`bg-white rounded-xl overflow-hidden transition-all duration-300
                  border ${isPopular ? 'border-construction-yellow shadow-xl scale-105' : 'border-gray-200 shadow-md hover:shadow-xl hover:scale-105'}
                  flex flex-col h-full`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="bg-construction-yellow text-construction-black text-center py-2 font-medium">
          Most Popular
        </div>
      )}
      
      {/* Card Content */}
      <div className="p-8 flex flex-col h-full">
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        
        <div className="mb-6">
          <div className="flex items-end">
            <span className="text-4xl font-bold">{price}</span>
            {price !== 'Custom' && <span className="text-gray-500 ml-2">/project</span>}
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mb-6">
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-3 text-construction-yellow mt-1">
                  <Check size={18} />
                </div>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto">
          <button onClick={()=>navigate('/contact')}
            className={`w-full py-3 px-6 rounded-md font-medium transition-all duration-300 ${
              isPopular 
                ? 'bg-construction-yellow text-construction-black hover:bg-construction-blue hover:text-white' 
                : 'bg-construction-blue text-white hover:bg-construction-yellow hover:text-construction-black'
            } shadow-md hover:shadow-lg`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;