import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  Heart, 
  MessageCircle, 
  Share2,
  MoreHorizontal,
  Calendar,
  Target,
  Zap
} from "lucide-react";

const campaigns = [
  {
    id: 1,
    name: "Kartik Aaryan Meal",
    status: "active",
    sentiment: "positive",
    sentimentScore: 85,
    emoji: "🔥",
    ctr: 3.2,
    engagement: 8.7,
    reach: "2.3M",
    budget: 50000,
    spent: 32000,
    startDate: "2024-01-15",
    endDate: "2024-02-15"
  },
  {
    id: 2,
    name: "McAloo Tikki Heritage",
    status: "active", 
    sentiment: "positive",
    sentimentScore: 72,
    emoji: "😊",
    ctr: 2.8,
    engagement: 6.4,
    reach: "1.8M",
    budget: 35000,
    spent: 28000,
    startDate: "2024-01-20",
    endDate: "2024-02-20"
  },
  {
    id: 3,
    name: "Late Night Delivery",
    status: "review",
    sentiment: "neutral",
    sentimentScore: 58,
    emoji: "😐",
    ctr: 1.9,
    engagement: 4.2,
    reach: "950K",
    budget: 25000,
    spent: 15000,
    startDate: "2024-01-10",
    endDate: "2024-02-10"
  },
  {
    id: 4,
    name: "Chicken Maharaja Mac",
    status: "paused",
    sentiment: "warning",
    sentimentScore: 42,
    emoji: "🚨",
    ctr: 1.4,
    engagement: 3.1,
    reach: "720K",
    budget: 40000,
    spent: 35000,
    startDate: "2024-01-05",
    endDate: "2024-02-05"
  }
];

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case "positive": return "bg-positive text-positive-foreground";
    case "neutral": return "bg-neutral text-neutral-foreground";
    case "warning": return "bg-negative text-negative-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "active": return "bg-positive text-positive-foreground";
    case "review": return "bg-neutral text-neutral-foreground";
    case "paused": return "bg-muted text-muted-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

export const CampaignOverview = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +2 from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
            <Eye className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.2M</div>
            <p className="text-xs text-muted-foreground">
              +12% from last week
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Engagement</CardTitle>
            <Heart className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.8%</div>
            <p className="text-xs text-muted-foreground">
              +0.3% from yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Budget Utilized</CardTitle>
            <Zap className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">
              ₹1.2M of ₹1.8M
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Campaign Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Active Campaigns</h2>
          <Button className="bg-gradient-aurora hover:opacity-90">
            <span className="text-2xl mr-2">+</span>
            New Campaign
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {campaigns.map((campaign) => (
            <Card 
              key={campaign.id}
              className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer animate-fade-in"
              onClick={() => setSelectedCampaign(campaign.id)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{campaign.emoji}</span>
                      <CardTitle className="text-lg">{campaign.name}</CardTitle>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(campaign.status)}>
                        {campaign.status}
                      </Badge>
                      <Badge variant="outline" className={getSentimentColor(campaign.sentiment)}>
                        {campaign.sentimentScore}% sentiment
                      </Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* KPIs Row */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-sm text-muted-foreground">CTR</div>
                    <div className="text-lg font-semibold flex items-center justify-center">
                      {campaign.ctr}%
                      {campaign.ctr > 2.5 ? (
                        <TrendingUp className="w-4 h-4 ml-1 text-positive" />
                      ) : (
                        <TrendingDown className="w-4 h-4 ml-1 text-negative" />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Engagement</div>
                    <div className="text-lg font-semibold flex items-center justify-center">
                      {campaign.engagement}%
                      {campaign.engagement > 5 ? (
                        <TrendingUp className="w-4 h-4 ml-1 text-positive" />
                      ) : (
                        <TrendingDown className="w-4 h-4 ml-1 text-negative" />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Reach</div>
                    <div className="text-lg font-semibold">{campaign.reach}</div>
                  </div>
                </div>

                {/* Budget Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Budget Progress</span>
                    <span className="font-medium">
                      ₹{(campaign.spent / 1000).toFixed(0)}K / ₹{(campaign.budget / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <Progress 
                    value={(campaign.spent / campaign.budget) * 100} 
                    className="h-2"
                  />
                </div>

                {/* Campaign Duration */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{campaign.startDate}</span>
                  </div>
                  <span>→</span>
                  <span>{campaign.endDate}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};