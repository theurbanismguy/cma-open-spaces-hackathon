
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // GitHub Pages SPA redirect handling
    // Check if we need to redirect from GitHub Pages SPA redirect
    if (window.location.search.includes('/?/')) {
      const redirect = window.location.search.slice(1);
      if (redirect && redirect !== null && redirect !== undefined && redirect !== '') {
        window.history.replaceState(null, '', 
          window.location.pathname.slice(0, -1) + redirect.slice(2).replace(/&/g, '?').replace(/~and~/g, '&') + window.location.hash
        );
      }
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/cma-open-spaces-hackathon">
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
