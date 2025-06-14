const SkeletonBlogCard = () => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md animate-pulse">
    <div className="h-56 bg-gray-300 w-full"></div>

    <div className="p-6 space-y-4">
      <div className="h-3 w-24 bg-gray-300 rounded"></div>
      <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
      <div className="h-4 w-full bg-gray-300 rounded"></div>
      <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
      <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
      <div className="h-3 w-24 bg-gray-300 rounded mt-4"></div>
    </div>
  </div>
);

export default SkeletonBlogCard;
