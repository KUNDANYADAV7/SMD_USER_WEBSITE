import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";
import { useToast } from '../hooks/use-toast';
import config from "@/config";
import { SocketContext } from "./SocketContext";


interface Blog {
  _id: string;
  title: string;
  content: string;
  slug: string;
  [key: string]: any; // Optional additional properties
}

interface BlogContextType {
  allblogs: Blog[];
  loading: boolean;
  getBlogById: (slug: string) => Promise<Blog | null>;
}

export const BlogContext = createContext<BlogContextType | undefined>(undefined);

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [allblogs, setAllBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const socket = useContext(SocketContext);
   const { toast } = useToast();

  const fetchAllBlogs = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${config.apiUrl}/api/blogs/all-blogs`, {
        withCredentials: true,
      });
      setAllBlogs(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load all blogs",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getBlogById = async (slug: string): Promise<Blog | null> => {
    setLoading(true);
    try {
      const response = await axios.get(`${config.apiUrl}/api/blogs/single-blogs/slug/${slug}`, {
        withCredentials: true,
      });

      if (response.status !== 200) throw new Error("Failed to fetch blog");
      return response.data;
    } catch {
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Real-time updates
  useEffect(() => {
    if (!socket) return;

    const syncBlogs = () => {
      fetchAllBlogs();
    };

    socket.on("blogCreated", syncBlogs);
    socket.on("blogUpdated", syncBlogs);
    socket.on("blogDeleted", syncBlogs);

    return () => {
      socket.off("blogCreated", syncBlogs);
      socket.off("blogUpdated", syncBlogs);
      socket.off("blogDeleted", syncBlogs);
    };
  }, [socket]);

  useEffect(() => {
      fetchAllBlogs();
  }, []);

  return (
    <BlogContext.Provider
      value={{
        allblogs,
        loading,
        getBlogById,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = (): BlogContextType => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};
