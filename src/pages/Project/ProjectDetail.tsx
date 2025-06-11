
// import { useParams, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/Button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
// import { MapPin, Calendar, User, Clock } from "lucide-react";
// import { useProject } from '@/context/ProjectProvider';
// import { useEffect, useState } from "react";
// import { Link } from "lucide-react";
// import config from "@/config";

// const ProjectDetail = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const { getProjectBySlug } = useProject();

//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProject = async () => {
//       setLoading(true);
//       const result = await getProjectBySlug(slug);
//       setProject(result);
//       setLoading(false);
//     };

//     fetchProject();
//   }, [slug, getProjectBySlug]);

//   if (loading) {
//   return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//       <h1 className="text-white text-2xl">Loading...</h1>
//     </div>
//   );
// }

//   if (!project) {
//     return (
//       <div className="min-h-screen bg-gray-900">
//         <div className="max-w-7xl mx-auto px-6 py-20 text-center">
//           <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
//           <Button onClick={() => navigate('/projects')} className="bg-orange-500 hover:bg-orange-600">
//             Back to Projects
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//     });
//   };

//   const imagePath = (img) =>
//     img?.startsWith("http") ? img : `${config.apiUrl}/${img}`;

//   return (
// <div className="min-h-screen bg-white">
//   <div className="max-w-7xl mx-auto px-6 py-20">
    
  
//  <div className="mb-10 md:mt-12">
//   <button 
//     onClick={() => navigate('/projects')} 
//     className="inline-flex items-center font-medium !text-orange-500 bg-transparent hover:bg-transparent transition-none border-none shadow-none focus:outline-none"
//   >
//     <span className="text-gray-500 mr-2">←</span> Back to Projects
//   </button>
// </div>


//         {/* Hero Section */}
//         <div className="grid lg:grid-cols-2 gap-12 mb-16">
//           <div>
//             <span className="px-4 py-2 bg-[#ffc107] text-white text-sm font-semibold rounded-full mb-4 inline-block">
//               {project.category}
//             </span>
//             <h1 className="text-4xl font-semibold  font-builder-amber hover:text-builder-amber/80 mb-4">{project.title}</h1>
//             <p className="text-xl text-gray-300 mb-8 leading-relaxed">
//               {project.description}
//             </p>
//           </div>

//           <div className="relative">
//             <img
//               src={imagePath(`${config.apiUrl}/${project.image}`)}
//               alt={project.title}
//               className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
//             />
//           </div>
//         </div>

//         {/* Project Details Grid */}
//         <div className="grid lg:grid-cols-3 gap-8 mb-16">
//           <Card className="bg-gray-100 border-gray-700 lg:col-span-2">
//             <CardHeader>
//               <CardTitle className="text-2xl text-white">Project Information</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="flex items-start space-x-3">
//                   <MapPin stroke="#f0a04b" />
//                   <div>
//      <h4 className="font-semibold mb-2 custom-title">Address</h4>
//                     <p className="text-gray-300">{project.address}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <User stroke="#f0a04b"/>
//                   <div>
//                     <h4 className="text-orange-500 font-bold mb-2">Architect</h4>
//                     <p className="text-gray-300">{project.architect}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                  <Calendar stroke="#f0a04b" />
//                   <div>
//                     <h4 className="text-orange-500 font-bold mb-2">Created Date</h4>
//                     <p className="text-gray-300">{formatDate(project.createdAt)}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <Clock stroke="#f0a04b" />
//                   <div>
//                     <h4 className="text-orange-500 font-bold mb-2">Last Updated</h4>
//                     <p className="text-gray-300">{formatDate(project.updatedAt)}</p>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="bg-gray-100 border-gray-700">
//             <CardHeader>
//               <CardTitle className="text-xl text-white">Quick Actions</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <Button 
//                 className="w-full bg-orange-500 hover:bg-orange-600 text-white"
//                 onClick={() => window.open(project.mapUrl, '_blank')}
//               >
//                 <MapPin className="h-4 w-4 mr-2" />
//                 View Location
//               </Button>
//               <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
//                 Contact Team
//               </Button>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Image Gallery */}
//         <Card className="bg-gray-100 border-gray-700">
//           <CardHeader>
//             <CardTitle className="text-2xl text-white">Project Gallery</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            

//               {/* Additional Images */}
//               {project.additionalImages?.map((img, idx) => (
//                 <div key={idx} className="aspect-video overflow-hidden rounded-lg group">
//                   <img
//                     src={imagePath(`${config.apiUrl}/${img}`)}
//                     alt={`Additional ${idx + 1}`}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
//                   />
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetail;






import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { MapPin, Calendar, User, Clock } from "lucide-react";
import { useProject } from "@/context/ProjectProvider";
import { useEffect, useState } from "react";
import config from "@/config";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { getProjectBySlug } = useProject();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchProject = async () => {
      setLoading(true);
      try {
        const result = await getProjectBySlug(slug);
        if (isMounted) {
          setProject(result);
        }
      } catch (error) {
        console.error("Error fetching project:", error);
        if (isMounted) {
          setProject(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProject();

    return () => {
      isMounted = false;
    };
  }, [slug]); // ✅ Only depend on slug

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const imagePath = (img) =>
    img?.startsWith("http") ? img : `${config.apiUrl}/${img}`;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <h1 className="text-white text-2xl">Loading...</h1>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Button
            onClick={() => navigate("/projects")}
            className="bg-orange-500 hover:bg-orange-600"
          >
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10 md:mt-12">
          <button
            onClick={() => navigate("/projects")}
            className="inline-flex items-center font-medium !text-[#ffc107] bg-transparent hover:bg-transparent transition-none border-none shadow-none focus:outline-none"
          >
            <span className="text-gray-500 mr-2">←</span> Back to Projects
          </button>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <span className="px-4 py-2 bg-[#ffc107] text-white text-sm font-semibold rounded-full mb-4 inline-block">
              {project.category}
            </span>
            <h1 className="text-4xl font-semibold font-builder-amber hover:text-builder-amber/80 mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-black mb-8 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="relative">
            <img
              src={imagePath(project.image)}
              alt={project.title}
              className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-[#fffce9] border-gray-700 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl text-black">Project Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <MapPin stroke="#ffc107" />
                  <div>
                    <h4 className="font-semibold mb-2 custom-title">Address</h4>
                    <p className="text-gray-500">{project.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <User stroke="#ffc107" />
                  <div>
                    <h4 className="font-semibold mb-2 custom-title">Architect</h4>
                    <p className="text-gray-500">{project.architect}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar stroke="#ffc107" />
                  <div>
                    <h4 className="font-semibold mb-2 custom-title">Created Date</h4>
                    <p className="text-gray-500">{formatDate(project.createdAt)}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock stroke="#ffc107" />
                  <div>
                    <h4 className="font-semibold mb-2 custom-title">Last Updated</h4>
                    <p className="text-gray-500">{formatDate(project.updatedAt)}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#fffce9] border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl text-black">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className="w-full bg-[#ffc107] hover:bg-[#f0a04b] text-black"
                onClick={() => window.open(project.mapUrl, "_blank")}
              >
                <MapPin className="h-4 w-4 mr-2" />
                View Location
              </Button>
              <Button
                variant="outline"
                className="w-full border-gray-600 text-black hover:bg-gray-200"
              >
                Contact Team
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Image Gallery */}
        <Card className="bg-[#fffce9] border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-black">Project Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.additionalImages?.map((img, idx) => (
                <div key={idx} className="aspect-video overflow-hidden rounded-lg group">
                  <img
                    src={imagePath(img)}
                    alt={`Additional ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetail;
