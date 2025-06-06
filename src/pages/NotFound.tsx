import React from 'react';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import CustomButton from '@/components/ui/CustomButton';

const NotFound = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Animation for the building blocks
  const blockVariants = {
    initial: (i: number) => ({
      opacity: 0,
      y: -50 + Math.random() * 20,
      rotate: Math.random() * 10 - 5,
    }),
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: Math.random() * 6 - 3,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  // Create building blocks for animation
  const buildingBlocks = Array.from({ length: 5 }).map((_, i) => (
    <motion.div
      key={i}
      className="w-16 h-16 md:w-20 md:h-20 rounded-md bg-builder-amber mx-1 md:mx-2"
      custom={i}
      initial="initial"
      animate="animate"
      variants={blockVariants}
    />
  ));

  return (
    <div className="min-h-screen pt-16 flex flex-col items-center justify-center bg-gray-50 px-4">
      <motion.div
        className="text-center max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="flex items-end">{buildingBlocks}</div>
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-builder-navy text-white text-xl md:text-3xl font-bold py-2 px-4 md:py-3 md:px-6 rounded-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              404
            </motion.div>
          </div>
        </div>

        <motion.h1
          className="text-3xl md:text-4xl font-bold text-builder-navy mb-4"
          variants={itemVariants}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          className="text-gray-600 mb-8 text-lg"
          variants={itemVariants}
        >
          Oops! It looks like the blueprint for this page is missing. The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div variants={itemVariants}>
          <CustomButton to="/" size="lg">
            Return to Homepage
          </CustomButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
