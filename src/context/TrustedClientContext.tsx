import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";
import config from "@/config";
import { useToast } from "../hooks/use-toast";
import { SocketContext } from "./SocketContext";

interface TrustedClient {
  _id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  [key: string]: any;
}

interface TrustedClientContextType {
  trustedClients: TrustedClient[];
  loading: boolean;
  fetchTrustedClients: () => Promise<void>;
  fetchTrustedClientById: (id: string) => Promise<TrustedClient | null>; // add this
}

export const TrustedClientContext = createContext<TrustedClientContextType | undefined>(undefined);

interface TrustedClientProviderProps {
  children: ReactNode;
}

export const TrustedClientProvider: React.FC<TrustedClientProviderProps> = ({ children }) => {
  const [trustedClients, setTrustedClients] = useState<TrustedClient[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const socket = useContext(SocketContext);

  const fetchTrustedClients = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${config.apiUrl}/api/trustedClient/all`);
      setTrustedClients(data);
    } catch {
      // toast({
      //   title: "Error",
      //   description: "Failed to load trusted clients.",
      // });
      return null;
    } finally {
      setLoading(false);
    }
  };

  const fetchTrustedClientById = async (id: string): Promise<TrustedClient | null> => {
  try {
    setLoading(true);
    const { data } = await axios.get(`${config.apiUrl}/api/trustedClient/${id}`);
    return data;
  } catch (error: any) {
    toast({
      title: "Error",
      description: error.response?.data?.message || "Failed to load trusted client.",
    });
    return null;
  } finally {
    setLoading(false);
  }
};


    // Real-time updates
    useEffect(() => {
      if (!socket) return;
  
      const syncClients = () => {
        fetchTrustedClients();
      };
  
      socket.on("trustedClient:created", syncClients);
      socket.on("trustedClient:updated", syncClients);
      socket.on("trustedClient:deleted", syncClients);
  
      return () => {
        socket.off("trustedClient:created", syncClients);
        socket.off("trustedClient:updated", syncClients);
        socket.off("trustedClient:deleted", syncClients);
      };
    }, [socket]);


  useEffect(() => {
      fetchTrustedClients();
  }, []);

  return (
    <TrustedClientContext.Provider
      value={{
        trustedClients,
        loading,
        fetchTrustedClients,
        fetchTrustedClientById
      }}
    >
      {children}
    </TrustedClientContext.Provider>
  );
};

export const useTrustedClient = (): TrustedClientContextType => {
  const context = useContext(TrustedClientContext);
  if (!context) {
    throw new Error("useTrustedClient must be used within a TrustedClientProvider");
  }
  return context;
};
