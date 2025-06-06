import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; // You can use your own SVG if preferred

const CustomButton = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="w-fit group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffc107] text-black transition-colors duration-300"
    >
      <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#eab342]">
        {children}
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#eab342] group-hover:bg-[#eab342] transition-all duration-300 transform group-hover:translate-x-2 group-active:translate-x-1">
          <ArrowRight className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-black group-hover:text-white" />
        </span>
      </span>
      <span className="absolute inset-0 bg-[#0b3954] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
    </Link>
  );
};

export default CustomButton;
