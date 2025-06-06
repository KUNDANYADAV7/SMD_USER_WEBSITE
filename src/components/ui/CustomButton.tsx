
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CustomButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  // Base classes
  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none',
    {
      // Variants
      'bg-builder-amber text-white hover:bg-builder-amber/90': variant === 'primary',
      'bg-white text-builder-navy border border-builder-navy hover:bg-gray-50': variant === 'secondary',
      'bg-transparent border border-builder-amber text-builder-amber hover:bg-builder-amber/10': variant === 'outline',
      
      // Sizes
      'text-sm px-4 py-2': size === 'sm',
      'text-base px-6 py-3': size === 'md',
      'text-lg px-8 py-4': size === 'lg',
      
      // Disabled state
      'opacity-50 cursor-not-allowed': disabled,
    },
    className
  );

  // Motion variants
  const buttonVariants = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  // Render link if "to" prop exists (internal link)
  if (to) {
    return (
      <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
        <Link to={to} className={baseClasses}>
          {children}
        </Link>
      </motion.div>
    );
  }

  // Render anchor if "href" prop exists (external link)
  if (href) {
    return (
      <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
        <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </motion.div>
    );
  }

  // Render button
  return (
    <motion.button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : "hover"}
      whileTap={disabled ? undefined : "tap"}
      variants={buttonVariants}
    >
      {children}
    </motion.button>
  );
};

export default CustomButton;
