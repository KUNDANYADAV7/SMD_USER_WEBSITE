const SkeletonBlogDetail = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl animate-pulse">
        <div className="h-96 bg-gray-300 rounded-lg mb-6" />
        
        <div className="space-y-4">
          <div className="h-4 w-1/3 bg-gray-300 rounded" />
          <div className="h-8 w-2/3 bg-gray-300 rounded" />
          <div className="h-4 w-full bg-gray-300 rounded" />
          <div className="h-4 w-full bg-gray-300 rounded" />
          <div className="h-4 w-5/6 bg-gray-300 rounded" />
          <div className="h-4 w-3/4 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonBlogDetail;
