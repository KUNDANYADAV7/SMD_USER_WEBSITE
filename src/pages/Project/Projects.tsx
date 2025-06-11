import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useProject } from "@/context/ProjectProvider";
import config from "@/config";

const Projects = () => {
  const navigate = useNavigate();
  const { projects } = useProject();

  const getImageUrl = (url: string) =>
    url?.startsWith("http") ? url : `${config.apiUrl}/${url}`;

const groupedProjects = {
  all: projects,
  ongoing: projects.filter((p) => p.status?.toLowerCase() === "ongoing"),
  completed: projects.filter((p) => p.status?.toLowerCase() === "completed"),
  upcoming: projects.filter((p) => p.status?.toLowerCase() === "upcoming"),
};


  const TAB_LABELS: Record<keyof typeof groupedProjects, string> = {
    all: "All",
    ongoing: "Ongoing",
    completed: "Completed",
    upcoming: "Upcoming",
  };

  const renderProjectCard = (project: any, type: keyof typeof groupedProjects) => {
    const tag =
      type === "ongoing"
        ? project.progress
        : type === "completed"
        ? project.completedDate
        : type === "upcoming"
        ? project.startDate
        : null;

    const tagColor =
      type === "ongoing"
        ? "text-green-400"
        : type === "completed"
        ? "text-blue-400"
        : type === "upcoming"
        ? "text-yellow-400"
        : "";

    return (
      <div
        key={project._id}
        className="bg-gray-100 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group cursor-pointer"
        onClick={() => navigate(`/project/${project.slug}`)}
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={getImageUrl(project.image)}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="px-3 py-1 bg-[#f0a04b] text-white text-sm font-semibold rounded-full">
              {project.category}
            </span>
            {tag && (
              <span className={`${tagColor} text-sm font-medium`}>
                {type === "ongoing"
                  ? `${project.progress} Complete`
                  : type === "upcoming"
                  ? `Starts ${tag}`
                  : tag}
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">{project.description}</p>

          {type === "ongoing" && project.progress && (
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Progress</span>
                <span>{project.progress}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-[ffc107] h-2 rounded-full transition-all duration-300"
                  style={{ width: project.progress }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-18">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10" />
          <div className="absolute inset-0 bg-[url('/photos/22.png')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 relative z-20 md:mt-14">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Projects</h1>
            <p className="text-white/90 text-lg mb-6">
              Explore our diverse portfolio of construction projects, showcasing our commitment to quality and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <Tabs defaultValue="all" className="w-full">
         

          {/* <TabsList className="flex justify-center gap-6 mb-12 bg-transparent border-none shadow-none">
  {Object.entries(TAB_LABELS).map(([key, label]) => (
    <TabsTrigger
      key={key}
      value={key}
      className={`
        relative px-1 py-2 text-lg font-semibold text-gray-400 transition-colors duration-300
        hover:text-[#ffc107]
        data-[state=active]:text-black
        after:content-['']
        after:absolute after:left-0 after:-bottom-1 after:h-1 after:rounded-full
        after:bg-[#ffc107] after:transition-all after:duration-300
        after:scale-x-0 data-[state=active]:after:scale-x-100
        after:w-full origin-center
      `}
    >
      {label} Projects
    </TabsTrigger>
  ))}
</TabsList> */}

{/* <TabsList className="flex justify-center gap-6 mb-12 bg-transparent border-none shadow-none">
  {Object.entries(TAB_LABELS).map(([key, label]) => (
    <motion.div
      whileHover={{ rotate: 5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative"
      key={key}
    >
      <TabsTrigger
        value={key}
        className={`
          relative px-3 py-2 text-lg font-semibold text-gray-400
          transition-colors duration-300 ease-in-out
          hover:text-[#ffc107]
          data-[state=active]:text-black
          after:content-['']
          after:absolute after:left-0 after:-bottom-1 after:h-1 after:rounded-full
          after:bg-[#ffc107] after:transition-all after:duration-300
          after:scale-x-0 data-[state=active]:after:scale-x-100
          after:w-full origin-center
        `}
      >
        {label} Projects
      </TabsTrigger>
    </motion.div>
  ))}
</TabsList> */}


<TabsList className="flex justify-center gap-6 mb-12 bg-transparent border-none shadow-none">
  {Object.entries(TAB_LABELS).map(([key, label]) => (
    <TabsTrigger
      asChild
      key={key}
      value={key}
    >
      <motion.button
        whileHover={{
          rotate: 5,
          scale: 1.05,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className={`
          relative px-5 py-2 text-lg font-semibold text-gray-400
          transition-all duration-300 ease-in-out
          hover:text-[#ffc107] data-[state=active]:text-black

          after:content-['']
          after:absolute after:left-0 after:bottom-0
          after:h-[3px] after:w-full
          after:bg-[#ffc107] after:scale-x-0
          after:origin-center
          after:transition-transform after:duration-300
          hover:after:scale-x-100
          data-[state=active]:after:scale-x-100
        `}
      >
        {label} Projects
      </motion.button>
    </TabsTrigger>
  ))}
</TabsList>

          {Object.entries(groupedProjects).map(([key, projectList]) => (
            <TabsContent key={key} value={key} className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectList.map((project) =>
                  renderProjectCard(project, key as keyof typeof groupedProjects)
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Projects;




