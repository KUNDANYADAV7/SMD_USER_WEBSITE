import React, { createContext, useEffect, useState, ReactNode } from "react";
import { io, Socket } from "socket.io-client";
import config from "@/config";

// Define the socket type (you can customize the events type if needed)
type SocketContextType = Socket | null;

// Create Context
export const SocketContext = createContext<SocketContextType>(null);

// Define the props for the provider
interface SocketProviderProps {
  children: ReactNode;
}

// Socket Provider component
export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<SocketContextType>(null);

  useEffect(() => {
    const newSocket = io(config.apiUrl); // Adjust the URL as needed
    setSocket(newSocket);

    return () => {
      newSocket.disconnect(); // Clean up on unmount
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};
