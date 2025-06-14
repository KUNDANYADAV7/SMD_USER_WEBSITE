const SkeletonServiceDetail = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 animate-pulse">
      <div className="flex items-center mb-6 space-x-4">
        <div className="bg-gray-300 p-4 rounded-full w-12 h-12" />
        <div className="h-6 w-1/2 bg-gray-300 rounded" />
      </div>

      <div className="mb-8 w-full h-64 bg-gray-300 rounded-lg"></div>

      <div className="space-y-4">
        <div className="h-4 w-3/4 bg-gray-300 rounded" />
        <div className="h-4 w-full bg-gray-300 rounded" />
        <div className="h-4 w-5/6 bg-gray-300 rounded" />
      </div>
    </div>
  );
};

export default SkeletonServiceDetail;
