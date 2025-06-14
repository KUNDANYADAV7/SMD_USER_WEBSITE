import React from 'react';
import clsx from 'clsx';

interface SkeletonCardProps {
  className?: string;
}

const SkeletonCard: React.FC<SkeletonCardProps> = ({ className }) => {
  return (
    <div className={clsx("bg-gray-800 animate-pulse rounded-lg p-4 space-y-4", className)}>
      <div className="w-12 h-12 bg-gray-700 rounded-full mx-auto"></div>
      <div className="h-4 bg-gray-700 rounded w-3/4 mx-auto"></div>
      <div className="h-3 bg-gray-700 rounded w-5/6 mx-auto"></div>
      <div className="h-3 bg-gray-700 rounded w-2/3 mx-auto"></div>
    </div>
  );
};

export default SkeletonCard;
