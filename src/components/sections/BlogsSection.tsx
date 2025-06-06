
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/ui/SectionHeading';
import CustomButton from '@/components/ui/CustomButton';
import { blogs } from '@/data/blogData';

const BlogsSection = () => {
  // Only show first 3 blogs in the section
  const featuredBlogs = blogs.slice(0, 3);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Latest from Our Blog"
          subtitle="Insights, trends, and news from the construction industry"
          center
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-builder-amber text-white px-3 py-1 rounded-full text-sm font-medium">
                  {blog.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-builder-navy mb-3 line-clamp-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                
                <Link 
                  to={`/blog/${blog.id}`} 
                  className="inline-flex items-center text-builder-amber font-medium hover:text-builder-amber/80 transition-colors"
                >
                  Read More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CustomButton to="/blog" variant="outline">
            View All Articles
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
