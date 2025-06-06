
import { createRoot } from 'react-dom/client'
import * as React from 'react'
import App from './App.tsx'
import './index.css'
import { TrustedClientProvider } from './context/TrustedClientContext.tsx';
import { BlogProvider } from './context/BlogProvider.tsx';
import { ServiceProvider } from './context/ServiceContext.tsx';
import { ProjectProvider } from './context/ProjectProvider.tsx';
import { SocketProvider } from './context/SocketContext.tsx';

createRoot(document.getElementById("root")!).render(
<SocketProvider>
    <TrustedClientProvider>
            <BlogProvider>
                <ServiceProvider>
                    <ProjectProvider>
<App />
</ProjectProvider>
</ServiceProvider>
</BlogProvider>
</TrustedClientProvider>
</SocketProvider>
);
