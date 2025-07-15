import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, AlertTriangle, TrendingDown, MapPin, Clock, Users, MessageSquare, Share, Settings, Zap } from "lucide-react";

const SentimentDiagnostic = () => {
  const { alertId } = useParams();
  const navigate = useNavigate();
  const [showEscalation, setShowEscalation] = useState(false);

  // Mock alert data
  const alert = {
    id: alertId,
    type: "Sentiment Drop",
    severity: "High",
    campaign: "Kartik Aaryan Meal",
    description: "15% drop in positive sentiment in last 4 hours",
    timestamp: "2024-01-20 14:30:00",
    currentSentiment: 67,
    previousSentiment: 82
  };

  const rootCauses = [
    {
      factor: "Pricing Concerns",
      impact: "High",
      mentions: "2.3K",
      description: "Users complaining about increased combo prices",
      evidence: "💰 Too expensive for a combo meal! #McSpicy prices are getting out of hand"
    },
    {
      factor: "Service Issues",
      impact: "Medium",
      mentions: "1.8K",
      description: "Long wait times reported at multiple outlets",
      evidence: "Waited 20 mins for #McSpicy at Phoenix Mall. This is ridiculous!"
    },
    {
      factor: "Taste Inconsistency",
      impact: "Low",
      mentions: "890",
      description: "Some users reporting bland taste",
      evidence: "My #McSpicy today was not spicy at all. Where's the fire? 😔"
    }
  ];

  const regionalBreakdown = [
    { region: "Mumbai", sentiment: 52, change: "-18%", volume: "12.3K" },
    { region: "Delhi", sentiment: 71, change: "-8%", volume: "15.7K" },
    { region: "Bangalore", sentiment: 69, change: "-12%", volume: "9.8K" },
    { region: "Chennai", sentiment: 78, change: "-5%", volume: "7.2K" },
    { region: "Kolkata", sentiment: 74, change: "-9%", volume: "6.1K" }
  ];

  const timeline = [
    { time: "14:30", sentiment: 67, event: "Alert triggered" },
    { time: "13:00", sentiment: 72, event: "Pricing complaints increase" },
    { time: "11:30", sentiment: 78, event: "Service issues reported" },
    { time: "10:00", sentiment: 82, event: "Normal levels" },
    { time: "08:00", sentiment: 81, event: "Campaign start" }
  ];

  const aiSuggestions = [
    {
      type: "Immediate",
      title: "Address Pricing Concerns",
      description: "Release a statement clarifying value proposition and limited-time offers",
      impact: "High",
      timeline: "1-2 hours"
    },
    {
      type: "Short-term",
      title: "Service Quality Focus",
      description: "Coordinate with outlet management to reduce wait times",
      impact: "Medium",
      timeline: "24 hours"
    },
    {
      type: "Content",
      title: "Value-Focused Messaging",
      description: "Shift campaign messaging to emphasize quality and experience",
      impact: "Medium",
      timeline: "4-6 hours"
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "Medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Low": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High": return "bg-red-500";
      case "Medium": return "bg-yellow-500";
      case "Low": return "bg-green-500";
      default: return "bg-gray-500";
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
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full ${getSeverityColor(alert.severity)}`}></div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">{alert.type}</h1>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-muted-foreground">{alert.campaign}</span>
                    <Badge variant="destructive">{alert.severity} Priority</Badge>
                    <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline">
                <Share className="w-4 h-4 mr-2" />
                Share Report
              </Button>
              <Button variant="outline" onClick={() => setShowEscalation(true)}>
                Escalate to CX
              </Button>
              <Button className="bg-gradient-aurora hover:opacity-90 transition-opacity">
                <Zap className="w-4 h-4 mr-2" />
                Apply AI Fix
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Alert Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card border-border shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Current Sentiment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{alert.currentSentiment}%</div>
              <div className="flex items-center text-xs text-red-600 mt-1">
                <TrendingDown className="w-3 h-3 mr-1" />
                -{alert.previousSentiment - alert.currentSentiment}% from 4h ago
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Affected Mentions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">5.1K</div>
              <div className="flex items-center text-xs text-blue-600 mt-1">
                <MessageSquare className="w-3 h-3 mr-1" />
                Last 4 hours
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Worst Region</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">Mumbai</div>
              <div className="flex items-center text-xs text-red-600 mt-1">
                <MapPin className="w-3 h-3 mr-1" />
                52% sentiment (-18%)
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Time to Resolve</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">6-12h</div>
              <div className="flex items-center text-xs text-purple-600 mt-1">
                <Clock className="w-3 h-3 mr-1" />
                AI estimate
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="causes" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
            <TabsTrigger value="causes">Root Causes</TabsTrigger>
            <TabsTrigger value="regional">Regional Impact</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="actions">AI Actions</TabsTrigger>
          </TabsList>

          <TabsContent value="causes" className="space-y-6">
            <div className="space-y-4">
              {rootCauses.map((cause, index) => (
                <Card key={index} className="bg-card border-border shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-lg">{cause.factor}</h3>
                          <Badge className={getImpactColor(cause.impact)}>{cause.impact} Impact</Badge>
                          <Badge variant="outline">{cause.mentions} mentions</Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{cause.description}</p>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-3 rounded-lg border-l-4 border-orange-500">
                      <p className="text-sm italic">"{cause.evidence}"</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="regional" className="space-y-6">
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle>Regional Sentiment Breakdown</CardTitle>
                <CardDescription>Sentiment levels across major markets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {regionalBreakdown.map((region, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{region.region}</span>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <Progress value={region.sentiment} className="w-24" />
                          <span className="font-medium">{region.sentiment}%</span>
                        </div>
                        <div className="text-sm text-red-600 font-medium">{region.change}</div>
                        <div className="text-sm text-muted-foreground">{region.volume} posts</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-6">
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle>Sentiment Timeline</CardTitle>
                <CardDescription>How sentiment changed over the last 6 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timeline.map((point, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{point.time}</span>
                        <span className="text-sm text-muted-foreground">{point.event}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Progress value={point.sentiment} className="w-24" />
                        <span className="font-medium">{point.sentiment}%</span>
                        {index < timeline.length - 1 && (
                          <TrendingDown className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="actions" className="space-y-6">
            <div className="space-y-4">
              {aiSuggestions.map((suggestion, index) => (
                <Card key={index} className="bg-card border-border shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="outline">{suggestion.type}</Badge>
                          <Badge className={getImpactColor(suggestion.impact)}>{suggestion.impact} Impact</Badge>
                          <span className="text-sm text-muted-foreground">{suggestion.timeline}</span>
                        </div>
                        <h4 className="font-semibold mb-2">{suggestion.title}</h4>
                        <p className="text-sm text-muted-foreground">{suggestion.description}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Apply Action
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Escalation Modal */}
      {showEscalation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Escalate to Customer Experience Team
                <Button variant="ghost" size="sm" onClick={() => setShowEscalation(false)}>✕</Button>
              </CardTitle>
              <CardDescription>Forward this alert to CX team for immediate response</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="font-medium text-red-900 dark:text-red-100 mb-2">Alert Summary</h4>
                <p className="text-sm text-red-800 dark:text-red-200">
                  {alert.description} - Primary cause: Pricing concerns (2.3K mentions)
                </p>
              </div>

              <div className="flex space-x-3 pt-4">
                <Button className="flex-1 bg-gradient-aurora hover:opacity-90 transition-opacity">
                  Send to CX Team
                </Button>
                <Button variant="outline" className="flex-1">
                  Schedule Follow-up
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SentimentDiagnostic;