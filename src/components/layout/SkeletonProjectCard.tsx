const SkeletonProjectCard = () => (
  <div className="border-b border-gray-700 py-6 animate-pulse">
    <div className="flex items-center space-x-6">
      <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
      <div className="h-4 bg-gray-700 rounded w-1/3"></div>
    </div>
    <div className="mt-4 grid md:grid-cols-2 gap-4">
      <div className="aspect-video bg-gray-700 rounded-lg"></div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-700 rounded w-5/6"></div>
        <div className="h-3 bg-gray-700 rounded w-2/3"></div>
        <div className="h-4 bg-gray-700 rounded w-1/3 mt-4"></div>
      </div>
    </div>
  </div>
);

export default SkeletonProjectCard;
