
// import React, { useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowLeft } from 'lucide-react';
// import { blogs } from '@/data/blogData';
// import { useBlog } from '@/context/BlogProvider';

// const BlogDetail = () => {
//   const { id } = useParams<{ id: string }>();
//   const blog = blogs.find(b => b.id === Number(id));
  
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [id]);

//   if (!blog) {
//     return (
//       <div className="pt-32 pb-20">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-3xl font-bold text-builder-navy mb-6">Blog Post Not Found</h1>
//           <p className="mb-6">The blog post you are looking for does not exist.</p>
//           <Link 
//             to="/blog" 
//             className="inline-flex items-center text-builder-amber font-medium hover:text-builder-amber/80 transition-colors"
//           >
//             <ArrowLeft size={16} className="mr-2" /> Back to Blog
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="pt-32 pb-20">
//       <div className="container mx-auto px-4 max-w-4xl">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <Link 
//             to="/blog" 
//             className="inline-flex items-center text-builder-amber font-medium hover:text-builder-amber/80 transition-colors mb-8 block"
//           >
//             <ArrowLeft size={16} className="mr-2" /> Back to Blog
//           </Link>

//           <div className="bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="h-96 relative">
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute top-6 left-6 bg-builder-amber text-white px-3 py-1 rounded-full text-sm font-medium">
//                 {blog.category}
//               </div>
//             </div>
            
//             <div className="p-8">
//               <div className="flex items-center text-sm text-gray-500 mb-3">
//                 <span>{blog.date}</span>
//                 <span className="mx-2">•</span>
//                 <span>{blog.readTime}</span>
//               </div>
              
//               <h1 className="text-3xl md:text-4xl font-bold text-builder-navy mb-6">{blog.title}</h1>
              
//               <div className="prose prose-lg max-w-none">
//                 <p className="text-gray-700 mb-6">{blog.content}</p>
//                 <p className="text-gray-700 mb-6">
//                   At BuildPro, we're committed to staying at the forefront of industry developments. Our team regularly 
//                   researches and implements the latest innovations to ensure we deliver the highest quality projects.
//                 </p>
//                 <p className="text-gray-700 mb-6">
//                   We believe that knowledge sharing and transparency are key to successful client relationships. 
//                   Follow our blog for more insights into the construction industry and our approach to building excellence.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;





import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useBlog } from '@/context/BlogProvider';
import { format } from 'date-fns';
import config from '@/config';

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getBlogById } = useBlog();
  const [blog, setBlog] = useState<any>(null);
  console.log(blog);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchBlog = async () => {
      if (slug) {
        const blogData = await getBlogById(slug);
        console.log("BlogData" ,blogData);
        setBlog(blogData);
      }
      setLoading(false);
    };
    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-32 pb-20 text-center text-lg text-gray-600">
        Loading blog post...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-builder-navy mb-6">Blog Post Not Found</h1>
          <p className="mb-6">The blog post you are looking for does not exist.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-builder-amber font-medium hover:text-builder-amber/80 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center text-builder-amber font-medium hover:text-builder-amber/80 transition-colors mb-8 block"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Link>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-96 relative">
              <img
                src={`${config.apiUrl}/${blog.photo}`}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-builder-amber text-white px-3 py-1 rounded-full text-sm font-medium">
                {blog.category}
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 mb-3 gap-1 sm:gap-3">
                <span>{format(new Date(blog.createdAt), 'dd MMM, yyyy')}</span>
                <span className="hidden sm:inline">•</span>
                {/* <span>{blog.readTime || '3 min read'}</span> */}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-builder-navy mb-6">{blog.title}</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">{blog.content}</p>
                {/* Optional extra sections if your backend doesn’t return full content */}
                <p className="text-gray-700 mb-6">
                  At BuildPro, we're committed to staying at the forefront of industry developments. Our team regularly 
                  researches and implements the latest innovations to ensure we deliver the highest quality projects.
                </p>
                <p className="text-gray-700 mb-6">
                  We believe that knowledge sharing and transparency are key to successful client relationships. 
                  Follow our blog for more insights into the construction industry and our approach to building excellence.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetail;
