import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

const SkeletonProjectDetail = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 animate-pulse">
      {/* Back Button */}
      <div className="mb-10 w-40 h-6 bg-gray-300 rounded" />

      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-4">
          <div className="w-24 h-6 bg-gray-300 rounded" />
          <div className="w-3/4 h-10 bg-gray-300 rounded" />
          <div className="h-24 bg-gray-300 rounded" />
        </div>
        <div className="h-[500px] bg-gray-300 rounded-lg" />
      </div>

      {/* Project Info Section */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <Card className="bg-[#fffce9] border-gray-700 lg:col-span-2">
          <CardHeader>
            <CardTitle className="w-1/3 h-6 bg-gray-300 rounded" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="w-24 h-4 bg-gray-300 rounded" />
                  <div className="w-3/4 h-5 bg-gray-200 rounded" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#fffce9] border-gray-700">
          <CardHeader>
            <CardTitle className="w-1/2 h-6 bg-gray-300 rounded" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="w-full h-10 bg-gray-300 rounded" />
            <div className="w-full h-10 bg-gray-200 rounded" />
          </CardContent>
        </Card>
      </div>

      {/* Gallery */}
      <Card className="bg-[#fffce9] border-gray-700">
        <CardHeader>
          <CardTitle className="w-1/3 h-6 bg-gray-300 rounded" />
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="aspect-video bg-gray-300 rounded-lg" />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkeletonProjectDetail;






// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
// import { Skeleton } from "@/components/ui/skeleton";

// const SkeletonProjectDetail = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-6 py-20">
//       {/* Back Button */}
//       <Skeleton className="mb-10 w-40 h-6 rounded" />

//       {/* Hero Section */}
//       <div className="grid lg:grid-cols-2 gap-12 mb-16">
//         <div className="space-y-4">
//           <Skeleton className="w-24 h-6 rounded" />
//           <Skeleton className="w-3/4 h-10 rounded" />
//           <Skeleton className="h-24 rounded" />
//         </div>
//         <Skeleton className="h-[500px] w-full rounded-lg" />
//       </div>

//       {/* Project Info Section */}
//       <div className="grid lg:grid-cols-3 gap-8 mb-16">
//         <Card className="bg-[#fffce9] border-gray-700 lg:col-span-2">
//           <CardHeader>
//             <CardTitle>
//               <Skeleton className="w-1/3 h-6 rounded" />
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-6">
//             <div className="grid md:grid-cols-2 gap-6">
//               {Array.from({ length: 4 }).map((_, i) => (
//                 <div key={i} className="space-y-2">
//                   <Skeleton className="w-24 h-4 rounded" />
//                   <Skeleton className="w-3/4 h-5 rounded" />
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="bg-[#fffce9] border-gray-700">
//           <CardHeader>
//             <CardTitle>
//               <Skeleton className="w-1/2 h-6 rounded" />
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <Skeleton className="w-full h-10 rounded" />
//             <Skeleton className="w-full h-10 rounded" />
//           </CardContent>
//         </Card>
//       </div>

//       {/* Gallery */}
//       <Card className="bg-[#fffce9] border-gray-700">
//         <CardHeader>
//           <CardTitle>
//             <Skeleton className="w-1/3 h-6 rounded" />
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {Array.from({ length: 6 }).map((_, i) => (
//               <Skeleton key={i} className="aspect-video w-full rounded-lg" />
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default SkeletonProjectDetail;
