import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBlog } from '@/context/BlogProvider';
import config from '@/config';
import { format } from 'date-fns';
import SkeletonBlogCard from '@/components/layout/SkeletonBlogCard';

const Blog = () => {
  const { allblogs, loading } = useBlog();

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative py-20 bg-builder-navy">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-builder-navy/0 z-10" />
          <div className="absolute inset-0 bg-[url('/photos/25.png')] bg-cover bg-center" />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-10">Our Blog</h1>
            <p className="text-white/90 text-lg mb-6">
              Insights, trends, and news from the construction industry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {loading
              ? Array.from({ length: 6 }).map((_, idx) => <SkeletonBlogCard key={idx} />)
              : allblogs.map((blog, index) => (
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
                      <div className="text-sm text-gray-500 mb-3">
                        <div className="mb-1">
                          <span>{format(new Date(blog.createdAt), 'dd MMM, yyyy')}</span>
                        </div>
                        <div className="flex items-start sm:space-x-2 flex-col sm:flex-row">
                          <span className="hidden sm:inline">•</span>
                          <span className="line-clamp-1 sm:line-clamp-2 max-w-full overflow-hidden text-ellipsis">
                            {blog.about}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-builder-navy mb-3 line-clamp-2">{blog.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>

                      <Link
                        to={`/blog/${blog.slug}/`}
                        className="inline-flex items-center text-builder-amber font-medium hover:text-builder-amber/80 transition-colors"
                      >
                        Read More <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
