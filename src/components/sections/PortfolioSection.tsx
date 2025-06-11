import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import { useProject } from "@/context/ProjectProvider";
import config from "@/config";

const PortfolioSection = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const { projects } = useProject();

  return (
    <div id="portfolio" className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <SectionHeading
          title="Our Projects"
          subtitle="Explore our diverse range of construction projects across various sectors"
          center
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <span className="px-4 py-2 rounded-full border border-gray-600 text-sm font-medium text-gray-300 uppercase tracking-wide inline-block">
              Our Project
            </span>

            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
                We Ready to<br />
                Provide Services
              </h1>

              <div className="text-center mt-12">
          <Link
            to="/projects"
            className="w-fit group right-10 relative overflow-hidden flex items-center gap-2 px-6 py-3 rounded-full bg-[#ffc107] text-black transition-colors duration-300 mx-auto"
          >
            <span className="relative  z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#eab342]">
              View All Project
              <span className="flex  items-center justify-center w-6 h-6 rounded-full bg-[#eab342] group-hover:bg-[#eab342] transition-all duration-300 transform group-hover:translate-x-2 group-active:translate-x-1">
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
          </div>

          {/* Right Column - Projects List */}
          <div className="space-y-1">
            {projects.slice(0, 5).map((project, index) => (
              <>
              <div
                key={project._id}
                className="relative border-b border-gray-700 transition-all duration-500 ease-in-out"
                onMouseEnter={() => setHoveredProject(project._id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Header */}
                <div className="flex items-center justify-between py-6 ">
                  <div className="flex items-center space-x-6">
                    <span className="text-yellow-400 text-xl font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Expandable Project Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out cursor-pointer ${
                    hoveredProject === project._id
                      ? "max-h-96 opacity-100 pb-8"
                      : "max-h-0 opacity-0"
                  }`}
                >

                   <Link to={`/project/${project.slug}`}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <img
                        src={`${config.apiUrl}/${project.image}`}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center">
                      <p className="text-gray-300 text-base leading-relaxed line-clamp-5">
                        {project.description}
                      </p>
                    </div>
                  </div>
                 </Link>

                </div>
              </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
