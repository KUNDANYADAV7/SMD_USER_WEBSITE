
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CustomCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const CustomCard: React.FC<CustomCardProps> = ({ children, className, hover = true }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5 
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      className={cn(
        'bg-white rounded-lg overflow-hidden',
        hover ? 'shadow-md transition-all duration-300' : '',
        className
      )}
      initial="hidden"
      whileInView="visible"
      whileHover={hover ? "hover" : undefined}
      viewport={{ once: true, amount: 0.1 }}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
};

export default CustomCard;
