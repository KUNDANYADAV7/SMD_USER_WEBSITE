
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = 'md', className }) => {
  // Size mappings
  const sizeClasses = {
    sm: 'w-5 h-5 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-3',
  };

  const containerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1.2,
        ease: "linear",
        repeat: Infinity,
      }
    }
  };

  return (
    <div className={cn('flex justify-center items-center', className)}>
      <motion.div
        className={cn(
          'rounded-full border-t-transparent border-builder-amber',
          sizeClasses[size]
        )}
        variants={containerVariants}
        animate="animate"
      />
    </div>
  );
};

export default Loader;
