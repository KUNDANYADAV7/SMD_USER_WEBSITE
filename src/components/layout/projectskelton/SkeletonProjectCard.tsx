const SkeletonProjectCard = () => (
  <div className="bg-gray-800 rounded-2xl overflow-hidden animate-pulse">
    <div className="aspect-video bg-gray-700 w-full" />

    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center mb-3">
        <div className="h-6 w-24 bg-gray-600 rounded-full"></div>
        <div className="h-4 w-16 bg-gray-600 rounded"></div>
      </div>

      <div className="h-5 w-3/4 bg-gray-600 rounded"></div>
      <div className="h-4 w-full bg-gray-600 rounded"></div>
      <div className="h-4 w-5/6 bg-gray-600 rounded"></div>
      <div className="h-4 w-2/3 bg-gray-600 rounded"></div>

      <div className="mt-4 h-3 w-20 bg-gray-600 rounded"></div>

      {/* Optional: fake progress bar */}
      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-sm text-gray-500">
          <div className="h-4 w-20 bg-gray-700 rounded"></div>
          <div className="h-4 w-10 bg-gray-700 rounded"></div>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div className="bg-gray-500 h-2 rounded-full w-1/2"></div>
        </div>
      </div>
    </div>
  </div>
);


export default SkeletonProjectCard;