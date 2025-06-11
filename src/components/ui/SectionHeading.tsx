
// import React from 'react';
// import { motion } from 'framer-motion';
// import { cn } from '@/lib/utils';

// interface SectionHeadingProps {
//   title: string;
//   subtitle?: string;
//   center?: boolean;
//   light?: boolean;
//   className?: string;
// }

// const SectionHeading: React.FC<SectionHeadingProps> = ({
//   title,
//   subtitle,
//   center = false,
//   light = false,
//   className,
// }) => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const childVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <motion.div
//       className={cn(
//         'mb-12',
//         center && 'text-center',
//         className
//       )}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={containerVariants}
//     >
//       <motion.h2
//         className={cn(
//           'text-3xl md:text-4xl font-bold relative pb-4 mb-4 inline-block',
//           light ? 'text-builder-navy' : 'text-builder-navy',
//           center && 'after:left-1/2 after:-translate-x-1/2'
//         )}
//         variants={childVariants}
//       >
//         {title}
//         <span className="absolute bottom-0 left-0 h-1 w-16 bg-builder-amber rounded-full"></span>
//       </motion.h2>
      
//       {subtitle && (
//         <motion.p
//           className={cn(
//             'text-lg max-w-2xl',
//             light ? 'text-gray-300' : 'text-white',
//             center && 'mx-auto'
//           )}
//           variants={childVariants}
//         >
//           {subtitle}
//         </motion.p>
//       )}
//     </motion.div>
//   );
// };

// export default SectionHeading;



import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
  titleColor?: string; // NEW
  descriptionColor?: string; // NEW
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  center = false,
  light = false,
  className,
  titleColor,
  descriptionColor,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className={cn(
        'mb-12',
        center && 'text-center',
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        className={cn(
          'text-3xl md:text-4xl font-bold relative pb-4 mb-4 inline-block',
          titleColor || (light ? 'text-builder-navy' : 'text-builder-navy'),
          center && 'after:left-1/2 after:-translate-x-1/2'
        )}
        variants={childVariants}
      >
        {title}
        <span className="absolute bottom-0 left-0 h-1 w-16 bg-builder-amber rounded-full"></span>
      </motion.h2>

      {subtitle && (
        <motion.p
          className={cn(
            'text-lg max-w-2xl',
            descriptionColor || (light ? 'text-gray-300' : 'text-builder-navy'),
            center && 'mx-auto'
          )}
          variants={childVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
