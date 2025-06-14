import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/ui/SectionHeading';
import { useBlog } from '@/context/BlogProvider';
import { format } from 'date-fns';
import config from '@/config';
import SkeletonBlogCard from '../layout/SkeletonBlogCard';

const BlogsSection = () => {
  const { allblogs, loading } = useBlog(); // Ensure "loading" is returned from context

  return (
    <section className="py-15 mt-10 bg-gray-50">
      <div className="container mx-auto px-4">

        <SectionHeading title="Update News & Blogs" center />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {loading
            ? Array.from({ length: 3 }).map((_, idx) => <SkeletonBlogCard key={idx} />)
            : allblogs.slice(0, 3).map((blog, index) => (
                <motion.div
                  key={blog._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={`${config.apiUrl}/${blog.photo}`}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-builder-amber text-white px-3 py-1 rounded-full text-sm font-medium">
                      {blog.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{format(new Date(blog.createdAt), 'dd MMM, yyyy')}</span>
                      <span className="mx-2">•</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-builder-navy mb-3 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>

                    <Link
                      to={`/blog/${blog.slug}`}
                      className="inline-flex items-center text-builder-amber font-medium hover:text-builder-amber/80 transition-colors"
                    >
                      Read More <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/blog"
            className="w-fit group relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffc107] text-black transition-colors duration-300 mx-auto"
          >
            <span className="relative z-10 flex items-center gap-2 text-black group-hover:!text-white transition-colors duration-300">
              See All Blogs
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#eab342] group-hover:bg-[#eab342] transition-all duration-300 transform group-hover:translate-x-2 group-active:translate-x-1">
                <svg
                  className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-black group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </span>
            <span className="absolute inset-0 bg-[#0b3954] scale-x-0 group-hover:scale-x-100 origin-right transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
