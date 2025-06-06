import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";
import { useToast } from '../hooks/use-toast';
import config from "@/config";
import { SocketContext } from "./SocketContext";

interface Project {
  _id: string;
  title: string;
  slug: string;
  category: string;
  description?: string;
  image?: string;
  additionalImages?: string[];
  mapUrl?: string;
  createdBy?: any;
  [key: string]: any;
}

interface ProjectContextType {
  projects: Project[];
  loading: boolean;
  getProjectById: (id: string) => Promise<Project | null>;
  getProjectBySlug: (slug: string) => Promise<Project | null>;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

interface ProjectProviderProps {
  children: ReactNode;
}

export const ProjectProvider: React.FC<ProjectProviderProps> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const socket = useContext(SocketContext);
    const { toast } = useToast();

  const fetchAllProjects = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${config.apiUrl}/api/projects/all`);
      setProjects(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch projects",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };


  const getProjectById = async (id: string): Promise<Project | null> => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${config.apiUrl}/api/projects/id/${id}`);
      return data;
    } catch (error) {
       toast({
        title: "Error",
        description: "Failed to fetch project by ID",
        variant: "destructive"
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getProjectBySlug = async (slug: string): Promise<Project | null> => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${config.apiUrl}/api/projects/slug/${slug}`);
      return data;
    } catch (error) {
       toast({
        title: "Error",
        description: "Failed to fetch project by slug",
        variant: "destructive"
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

    // Real-time updates
    useEffect(() => {
      if (!socket) return;
  
      const syncBlogs = () => {
        fetchAllProjects();
      };
  
      socket.on("projectCreated", syncBlogs);
      socket.on("projectUpdated", syncBlogs);
      socket.on("projectDeleted", syncBlogs);
  
      return () => {
        socket.off("projectCreated", syncBlogs);
        socket.off("projectUpdated", syncBlogs);
        socket.off("projectDeleted", syncBlogs);
      };
    }, [socket]);

  useEffect(() => {
      fetchAllProjects();
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        projects,
        loading,
        getProjectById,
        getProjectBySlug,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = (): ProjectContextType => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
};
