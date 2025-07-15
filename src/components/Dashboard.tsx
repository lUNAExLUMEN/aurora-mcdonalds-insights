import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, AlertTriangle, Users, BarChart3, Star, Search, Plus, Bell, Target, Brain, Eye, Zap } from "lucide-react";
import { CampaignOverview } from "./CampaignOverview";
import { CelebrityRisk } from "./CelebrityRisk";
import { TrendsExplorer } from "./TrendsExplorer";
import { AlertsSidebar } from "./AlertsSidebar";
export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  return <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-card sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 bg-transparent">
                
                <div>
                  
                  
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Alerts
              </Button>
              <Button className="bg-gradient-aurora hover:opacity-90 transition-opacity">
                <Plus className="w-4 h-4 mr-2" />
                New Campaign
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
                <TabsTrigger value="overview" className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="celebrity" className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Celebrity Risk
                </TabsTrigger>
                <TabsTrigger value="trends" className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Trends
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <CampaignOverview />
              </TabsContent>

              <TabsContent value="celebrity" className="space-y-6">
                <CelebrityRisk />
              </TabsContent>

              <TabsContent value="trends" className="space-y-6">
                <TrendsExplorer />
              </TabsContent>
            </Tabs>
          </div>

          {/* Alerts Sidebar */}
          <div className="w-80">
            <AlertsSidebar />
          </div>
        </div>
      </div>
    </div>;
};