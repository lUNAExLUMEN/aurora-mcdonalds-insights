import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Star, TrendingUp, TrendingDown, Users, MessageSquare, Heart, Share, AlertTriangle, Shield, Target } from "lucide-react";

const CelebrityProfile = () => {
  const { celebrityId } = useParams();
  const navigate = useNavigate();
  const [showProposal, setShowProposal] = useState(false);

  // Mock celebrity data
  const celebrity = {
    name: "Kartik Aaryan",
    image: "/placeholder.svg",
    sentiment: "Positive",
    brandFit: 92,
    riskLevel: "Low",
    followers: "15.2M",
    engagement: "4.8%",
    recentActivity: "Active",
    demographics: {
      age: "18-35",
      gender: "60% Female, 40% Male",
      regions: "North India (45%), West India (30%)"
    }
  };

  const sentimentHistory = [
    { month: "Jan", score: 85 },
    { month: "Feb", score: 88 },
    { month: "Mar", score: 92 },
    { month: "Apr", score: 89 },
    { month: "May", score: 91 },
    { month: "Jun", score: 94 },
  ];

  const controversies = [
    {
      date: "2024-01-15",
      type: "Minor",
      description: "Social media comment misinterpretation",
      impact: "Low",
      resolved: true
    },
    {
      date: "2023-11-22",
      type: "Media",
      description: "Film review controversy",
      impact: "Medium",
      resolved: true
    }
  ];

  const pastEndorsements = [
    {
      brand: "Fashion Brand A",
      year: "2023",
      result: "Successful",
      roi: "+23%",
      engagement: "High"
    },
    {
      brand: "Tech Brand B",
      year: "2023",
      result: "Successful",
      roi: "+18%",
      engagement: "Medium"
    },
    {
      brand: "Food Chain C",
      year: "2022",
      result: "Mixed",
      roi: "+5%",
      engagement: "Low"
    }
  ];

  const matchingCampaigns = [
    { name: "Gen Z Food Launch", match: "95%", reason: "Perfect demographic alignment" },
    { name: "Youth Engagement Drive", match: "88%", reason: "High social media presence" },
    { name: "Regional Expansion", match: "76%", reason: "Strong North India influence" }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "High": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

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
              <div className="flex items-center space-x-4">
                <img 
                  src={celebrity.image} 
                  alt={celebrity.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-2xl font-bold text-foreground">{celebrity.name}</h1>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge className={getRiskColor(celebrity.riskLevel)}>{celebrity.riskLevel} Risk</Badge>
                    <span className="text-2xl">😊</span>
                    <span className="text-sm text-muted-foreground">{celebrity.brandFit}% Brand Fit</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline">
                <Share className="w-4 h-4 mr-2" />
                Share Profile
              </Button>
              <Button 
                className="bg-gradient-aurora hover:opacity-90 transition-opacity"
                onClick={() => setShowProposal(true)}
              >
                <Target className="w-4 h-4 mr-2" />
                Propose for Campaign
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card border-border shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Followers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{celebrity.followers}</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12% this month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Engagement Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{celebrity.engagement}</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <Heart className="w-3 h-3 mr-1" />
                Above industry avg
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Brand Fit Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{celebrity.brandFit}%</div>
              <Progress value={celebrity.brandFit} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{celebrity.recentActivity}</div>
              <div className="flex items-center text-xs text-blue-600 mt-1">
                <MessageSquare className="w-3 h-3 mr-1" />
                Daily posting
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="sentiment" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
            <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
            <TabsTrigger value="controversies">Risk Analysis</TabsTrigger>
            <TabsTrigger value="endorsements">Past Work</TabsTrigger>
            <TabsTrigger value="campaigns">Best Fit</TabsTrigger>
          </TabsList>

          <TabsContent value="sentiment" className="space-y-6">
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle>Sentiment Timeline</CardTitle>
                <CardDescription>Public sentiment over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sentimentHistory.map((data, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="font-medium">{data.month} 2024</div>
                      <div className="flex items-center space-x-4">
                        <Progress value={data.score} className="w-32" />
                        <span className="font-medium">{data.score}%</span>
                        {data.score >= 90 ? (
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-yellow-600" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle>Demographics</CardTitle>
                <CardDescription>Audience breakdown and reach</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Age Group</h4>
                    <p className="text-muted-foreground">{celebrity.demographics.age}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Gender Split</h4>
                    <p className="text-muted-foreground">{celebrity.demographics.gender}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Geographic Reach</h4>
                    <p className="text-muted-foreground">{celebrity.demographics.regions}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="controversies" className="space-y-6">
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Risk Assessment
                </CardTitle>
                <CardDescription>Historical controversies and their impact</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {controversies.map((controversy, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-600" />
                          <span className="font-medium">{controversy.date}</span>
                          <Badge variant={controversy.resolved ? "default" : "destructive"}>
                            {controversy.resolved ? "Resolved" : "Active"}
                          </Badge>
                        </div>
                        <Badge variant="outline">{controversy.impact} Impact</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{controversy.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="endorsements" className="space-y-6">
            <div className="grid gap-4">
              {pastEndorsements.map((endorsement, index) => (
                <Card key={index} className="bg-card border-border shadow-card">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{endorsement.brand}</div>
                        <div className="text-sm text-muted-foreground">{endorsement.year}</div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-sm font-medium text-green-600">{endorsement.roi}</div>
                          <div className="text-xs text-muted-foreground">ROI</div>
                        </div>
                        <Badge variant={endorsement.result === "Successful" ? "default" : "secondary"}>
                          {endorsement.result}
                        </Badge>
                        <Badge variant="outline">{endorsement.engagement} Engagement</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle>Best Campaign Matches</CardTitle>
                <CardDescription>AI-recommended campaigns based on audience and brand alignment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {matchingCampaigns.map((campaign, index) => (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">{campaign.name}</div>
                        <div className="text-green-600 font-medium">{campaign.match} Match</div>
                      </div>
                      <p className="text-sm text-muted-foreground">{campaign.reason}</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-2"
                        onClick={() => navigate("/campaign-builder")}
                      >
                        Use for Campaign
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Proposal Modal */}
      {showProposal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Propose for Campaign
                <Button variant="ghost" size="sm" onClick={() => setShowProposal(false)}>✕</Button>
              </CardTitle>
              <CardDescription>Add {celebrity.name} to your campaign</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{celebrity.brandFit}%</div>
                  <div className="text-sm text-muted-foreground">Brand Fit</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">₹2.5L</div>
                  <div className="text-sm text-muted-foreground">Est. Cost</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">+28%</div>
                  <div className="text-sm text-muted-foreground">Proj. Engagement</div>
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <Button 
                  className="flex-1 bg-gradient-aurora hover:opacity-90 transition-opacity"
                  onClick={() => navigate("/campaign-builder")}
                >
                  Add to New Campaign
                </Button>
                <Button variant="outline" className="flex-1">
                  Add to Existing
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CelebrityProfile;