import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Star, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  Users,
  Heart,
  MessageCircle,
  ExternalLink
} from "lucide-react";

const celebrities = [
  {
    id: 1,
    name: "Kartik Aaryan",
    image: "🎭",
    sentiment: 87,
    brandFit: 92,
    riskLevel: "low",
    followers: "12.5M",
    engagement: "4.2%",
    recentActivity: "Promoting upcoming film release",
    controversies: 0,
    campaigns: 3,
    roi: 145
  },
  {
    id: 2,
    name: "Deepika Padukone",
    image: "🌟",
    sentiment: 91,
    brandFit: 88,
    riskLevel: "low",
    followers: "68.7M",
    engagement: "3.8%",
    recentActivity: "Mental health advocacy",
    controversies: 0,
    campaigns: 5,
    roi: 167
  },
  {
    id: 3,
    name: "Virat Kohli",
    image: "🏏",
    sentiment: 85,
    brandFit: 85,
    riskLevel: "medium",
    followers: "251M",
    engagement: "2.9%",
    recentActivity: "Sports brand endorsements",
    controversies: 1,
    campaigns: 8,
    roi: 201
  },
  {
    id: 4,
    name: "Priyanka Chopra",
    image: "🎬",
    sentiment: 79,
    brandFit: 82,
    riskLevel: "medium",
    followers: "89.2M",
    engagement: "3.1%",
    recentActivity: "International projects",
    controversies: 1,
    campaigns: 4,
    roi: 156
  },
  {
    id: 5,
    name: "Ranveer Singh",
    image: "🎪",
    sentiment: 74,
    brandFit: 76,
    riskLevel: "high",
    followers: "44.1M",
    engagement: "5.2%",
    recentActivity: "Controversial fashion choices",
    controversies: 2,
    campaigns: 6,
    roi: 134
  }
];

const getRiskColor = (risk: string) => {
  switch (risk) {
    case "low": return "bg-positive text-positive-foreground";
    case "medium": return "bg-neutral text-neutral-foreground";
    case "high": return "bg-negative text-negative-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

const getRiskIcon = (risk: string) => {
  switch (risk) {
    case "low": return <CheckCircle className="w-4 h-4" />;
    case "medium": return <AlertTriangle className="w-4 h-4" />;
    case "high": return <AlertTriangle className="w-4 h-4" />;
    default: return <AlertTriangle className="w-4 h-4" />;
  }
};

export const CelebrityRisk = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCelebrity, setSelectedCelebrity] = useState<number | null>(null);

  const filteredCelebrities = celebrities.filter(celebrity =>
    celebrity.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Celebrity Risk Calculator</h2>
          <p className="text-muted-foreground">Assess brand alignment and risk factors for potential endorsements</p>
        </div>
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search celebrities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Risk Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Risk</CardTitle>
            <CheckCircle className="h-4 w-4 text-positive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-positive">8</div>
            <p className="text-xs text-muted-foreground">
              Ready for campaigns
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Medium Risk</CardTitle>
            <AlertTriangle className="h-4 w-4 text-neutral" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-neutral">4</div>
            <p className="text-xs text-muted-foreground">
              Proceed with caution
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Risk</CardTitle>
            <AlertTriangle className="h-4 w-4 text-negative" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-negative">2</div>
            <p className="text-xs text-muted-foreground">
              Monitor closely
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Celebrity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCelebrities.map((celebrity) => (
          <Card 
            key={celebrity.id}
            className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer animate-fade-in"
            onClick={() => setSelectedCelebrity(celebrity.id)}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{celebrity.image}</div>
                  <div>
                    <CardTitle className="text-lg">{celebrity.name}</CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge className={getRiskColor(celebrity.riskLevel)}>
                        {getRiskIcon(celebrity.riskLevel)}
                        <span className="ml-1">{celebrity.riskLevel} risk</span>
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Brand Fit</div>
                  <div className="text-xl font-bold text-primary">{celebrity.brandFit}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Sentiment</div>
                  <div className="text-xl font-bold text-positive">{celebrity.sentiment}%</div>
                </div>
              </div>

              {/* Social Stats */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    Followers
                  </span>
                  <span className="font-medium">{celebrity.followers}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    Engagement
                  </span>
                  <span className="font-medium">{celebrity.engagement}</span>
                </div>
              </div>

              {/* Performance Indicators */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Brand Alignment</span>
                    <span className="font-medium">{celebrity.brandFit}%</span>
                  </div>
                  <Progress value={celebrity.brandFit} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Public Sentiment</span>
                    <span className="font-medium">{celebrity.sentiment}%</span>
                  </div>
                  <Progress value={celebrity.sentiment} className="h-2" />
                </div>
              </div>

              {/* Recent Activity */}
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-xs text-muted-foreground mb-1">Recent Activity</div>
                <div className="text-sm">{celebrity.recentActivity}</div>
              </div>

              {/* ROI & Risk Info */}
              <div className="flex items-center justify-between pt-2">
                <div className="text-sm">
                  <span className="text-muted-foreground">Predicted ROI: </span>
                  <span className="font-bold text-positive">{celebrity.roi}%</span>
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Campaigns: </span>
                  <span className="font-medium">{celebrity.campaigns}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Profile
                </Button>
                <Button className="flex-1 bg-gradient-aurora hover:opacity-90" size="sm">
                  Add to Campaign
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};