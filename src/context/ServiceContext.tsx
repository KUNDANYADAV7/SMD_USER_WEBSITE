import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { useToast } from '../hooks/use-toast';
import config from "@/config";
import { SocketContext } from "./SocketContext";

interface Service {
  _id: string;
  name: string;
  slug: string;
  description: string;
  iconImage?: string;
  serviceImage?: string;
  [key: string]: any; // For other optional properties
}

interface ServiceContextType {
  services: Service[];
  loading: boolean;
  getServiceById: (id: string) => Promise<Service | null>;
  getServiceBySlug: (slug: string) => Promise<Service | null>;
}

export const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

interface ServiceProviderProps {
  children: ReactNode;
}

export const ServiceProvider: React.FC<ServiceProviderProps> = ({ children }) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
    const socket = useContext(SocketContext);
      const { toast } = useToast();

  const fetchAllServices = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${config.apiUrl}/api/services/all`);
      setServices(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch services",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getServiceById = async (id: string): Promise<Service | null> => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${config.apiUrl}/api/services/id/${id}`);
      return data;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch service",
        variant: "destructive"
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getServiceBySlug = async (slug: string): Promise<Service | null> => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${config.apiUrl}/api/services/slug/${slug}`);
      return data;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch service",
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
    
        const syncServices = () => {
          fetchAllServices();
        };
    
        socket.on("service:created", syncServices);
        socket.on("service:updated", syncServices);
        socket.on("service:deleted", syncServices);
    
        return () => {
          socket.off("service:created", syncServices);
          socket.off("service:updated", syncServices);
          socket.off("service:deleted", syncServices);
        };
      }, [socket]);

  useEffect(() => {
    fetchAllServices();
  }, []);

  return (
    <ServiceContext.Provider
      value={{
        services,
        loading,
        getServiceById,
        getServiceBySlug,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = (): ServiceContextType => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error("useService must be used within a ServiceProvider");
  }
  return context;
};
