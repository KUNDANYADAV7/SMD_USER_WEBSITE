const SkeletonServiceSidebar = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 h-full animate-pulse">
      <div className="h-6 w-1/2 bg-gray-300 rounded mb-4"></div>
      <div className="space-y-3 overflow-hidden max-h-[370px]">
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <div className="h-4 bg-gray-300 rounded w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonServiceSidebar;
