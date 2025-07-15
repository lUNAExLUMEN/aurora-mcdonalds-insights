import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Target, TrendingUp, Users, MessageSquare, BarChart3, Eye, Share, Calendar, MapPin, Zap } from "lucide-react";

const CampaignDetail = () => {
  const { campaignId } = useParams();
  const navigate = useNavigate();
  const [showSimulation, setShowSimulation] = useState(false);

  // Mock campaign data - in real app this would come from API
  const campaign = {
    id: campaignId,
    name: "Kartik Aaryan Meal",
    status: "Active",
    sentiment: "Positive",
    ctr: 4.2,
    engagement: 12.8,
    reach: "2.3M",
    budget: 500000,
    spent: 320000,
    startDate: "2024-01-15",
    endDate: "2024-02-15"
  };

  const sentimentData = [
    { date: "Jan 15", positive: 78, neutral: 18, negative: 4 },
    { date: "Jan 22", positive: 82, neutral: 15, negative: 3 },
    { date: "Jan 29", positive: 85, neutral: 12, negative: 3 },
    { date: "Feb 5", positive: 88, neutral: 10, negative: 2 },
  ];

  const topContent = [
    { type: "Video", engagement: "45.2K", sentiment: "🔥", content: "Kartik trying the new meal combo" },
    { type: "Image", engagement: "32.1K", sentiment: "😊", content: "Behind-the-scenes photoshoot" },
    { type: "Story", engagement: "28.7K", sentiment: "😊", content: "Fan reactions compilation" },
  ];

  const channelPerformance = [
    { channel: "Instagram", reach: "1.2M", engagement: "15.2%", ctr: "4.8%" },
    { channel: "Twitter", reach: "680K", engagement: "8.9%", ctr: "3.2%" },
    { channel: "YouTube", reach: "420K", engagement: "22.1%", ctr: "6.1%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-card sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate("/")} className="p-2">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">{campaign.name}</h1>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="default">{campaign.status}</Badge>
                  <span className="text-2xl">😊</span>
                  <span className="text-sm text-muted-foreground">85% Positive Sentiment</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline" onClick={() => navigate("/campaign-builder")}>
                Compare Campaign
              </Button>
              <Button variant="outline">
                <Share className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button 
                className="bg-gradient-aurora hover:opacity-90 transition-opacity"
                onClick={() => setShowSimulation(true)}
              >
                <Zap className="w-4 h-4 mr-2" />
                Simulate Rollout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* KPI Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card border-border shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Click-Through Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{campaign.ctr}%</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +0.8% from last week
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Engagement Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{campaign.engagement}%</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +2.1% from last week
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Reach</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{campaign.reach}</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <Users className="w-3 h-3 mr-1" />
                +15% from target
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Budget Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">₹{(campaign.spent / 1000).toFixed(0)}K</div>
              <Progress value={(campaign.spent / campaign.budget) * 100} className="mt-2" />
              <div className="text-xs text-muted-foreground mt-1">
                {((campaign.spent / campaign.budget) * 100).toFixed(1)}% of ₹{(campaign.budget / 1000).toFixed(0)}K
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="timeline" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[500px]">
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="content">Top Content</TabsTrigger>
            <TabsTrigger value="channels">Channels</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="timeline" className="space-y-6">
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Sentiment Timeline
                </CardTitle>
                <CardDescription>Track sentiment changes over campaign duration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sentimentData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="font-medium">{data.date}</div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-sm">{data.positive}% Positive</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="text-sm">{data.neutral}% Neutral</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-sm">{data.negative}% Negative</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <div className="grid gap-4">
              {topContent.map((content, index) => (
                <Card key={index} className="bg-card border-border shadow-card">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline">{content.type}</Badge>
                        <span className="text-2xl">{content.sentiment}</span>
                        <span className="font-medium">{content.content}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{content.engagement}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="channels" className="space-y-6">
            <div className="grid gap-4">
              {channelPerformance.map((channel, index) => (
                <Card key={index} className="bg-card border-border shadow-card">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-lg">{channel.channel}</div>
                      <div className="flex items-center space-x-6 text-sm">
                        <div>
                          <span className="text-muted-foreground">Reach: </span>
                          <span className="font-medium">{channel.reach}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Engagement: </span>
                          <span className="font-medium">{channel.engagement}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">CTR: </span>
                          <span className="font-medium">{channel.ctr}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle>AI Recommendations</CardTitle>
                <CardDescription>Powered by Infosys Aurora Intelligence</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Optimize Posting Time</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Peak engagement occurs between 7-9 PM IST. Consider scheduling more content during this window for 23% higher engagement.
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Expand to YouTube Shorts</h4>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    YouTube shows 22% higher engagement. Create 15-second behind-the-scenes clips for potential 31% reach increase.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Celebrity Collaboration</h4>
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    Add food blogger collaborations. Similar campaigns saw 18% CTR improvement with micro-influencer partnerships.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Simulation Modal */}
      {showSimulation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Rollout Simulation
                <Button variant="ghost" size="sm" onClick={() => setShowSimulation(false)}>✕</Button>
              </CardTitle>
              <CardDescription>Preview projected performance with proposed changes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">+18%</div>
                  <div className="text-sm text-muted-foreground">Projected CTR</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">+23%</div>
                  <div className="text-sm text-muted-foreground">Engagement</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">+31%</div>
                  <div className="text-sm text-muted-foreground">Reach</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Recommended Changes:</h4>
                <div className="text-sm space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span>Shift 60% of budget to YouTube Shorts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span>Schedule posts for 7-9 PM IST peak hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span>Add micro-influencer collaborations</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <Button className="flex-1 bg-gradient-aurora hover:opacity-90 transition-opacity">
                  Apply Changes
                </Button>
                <Button variant="outline" className="flex-1">
                  Save Scenario
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CampaignDetail;