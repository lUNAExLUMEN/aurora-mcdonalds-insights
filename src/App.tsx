import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CampaignDetail from "./pages/CampaignDetail";
import CampaignBuilder from "./pages/CampaignBuilder";
import CelebrityProfile from "./pages/CelebrityProfile";
import TrendContext from "./pages/TrendContext";
import SentimentDiagnostic from "./pages/SentimentDiagnostic";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/campaign/:campaignId" element={<CampaignDetail />} />
          <Route path="/campaign-builder" element={<CampaignBuilder />} />
          <Route path="/celebrity/:celebrityId" element={<CelebrityProfile />} />
          <Route path="/trend/:trendId" element={<TrendContext />} />
          <Route path="/alert/:alertId" element={<SentimentDiagnostic />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
