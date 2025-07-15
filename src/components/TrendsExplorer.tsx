import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Hash, 
  Eye, 
  Heart, 
  MessageCircle, 
  Share2,
  Flame,
  Sparkles,
  Users,
  Clock,
  ArrowUpRight
} from "lucide-react";

const trendingHashtags = [
  {
    id: 1,
    hashtag: "#McFlurryChallenge",
    velocity: 89,
    sentiment: 92,
    mentions: "45.2K",
    growth: "+234%",
    category: "viral",
    size: 85
  },
  {
    id: 2,
    hashtag: "#LateNightMcD",
    velocity: 76,
    sentiment: 78,
    mentions: "32.1K",
    growth: "+156%",
    category: "trending",
    size: 72
  },
  {
    id: 3,
    hashtag: "#KartikAaryanMeal",
    velocity: 94,
    sentiment: 88,
    mentions: "67.8K",
    growth: "+312%",
    category: "campaign",
    size: 96
  },
  {
    id: 4,
    hashtag: "#McBreakfast",
    velocity: 45,
    sentiment: 65,
    mentions: "18.7K",
    growth: "+87%",
    category: "product",
    size: 48
  },
  {
    id: 5,
    hashtag: "#McDonaldsIndia",
    velocity: 67,
    sentiment: 82,
    mentions: "89.3K",
    growth: "+145%",
    category: "brand",
    size: 78
  }
];

const hotIdeas = [
  {
    id: 1,
    title: "Desi Flavor Fusion",
    description: "Regional McDonald's menu with local spices and flavors",
    inspiration: "Trending in South India markets",
    engagement: "High",
    difficulty: "Medium",
    timeframe: "2-3 months"
  },
  {
    id: 2,
    title: "Study Buddy Combo",
    description: "Late-night student meal deals with study materials",
    inspiration: "Exam season trending",
    engagement: "Very High",
    difficulty: "Low",
    timeframe: "2-4 weeks"
  },
  {
    id: 3,
    title: "Eco-Friendly Packaging",
    description: "Sustainable packaging campaign with plant-based materials",
    inspiration: "Environmental consciousness rising",
    engagement: "High",
    difficulty: "High",
    timeframe: "4-6 months"
  }
];

const memeFormats = [
  {
    id: 1,
    format: "Before/After McDonald's",
    usage: "1.2M posts",
    trend: "rising",
    potential: "High"
  },
  {
    id: 2,
    format: "McDonald's vs Homemade",
    usage: "890K posts",
    trend: "stable",
    potential: "Medium"
  },
  {
    id: 3,
    format: "McDonald's Employee Stories",
    usage: "2.1M posts",
    trend: "rising",
    potential: "Very High"
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "viral": return "bg-negative text-negative-foreground";
    case "trending": return "bg-neutral text-neutral-foreground";
    case "campaign": return "bg-primary text-primary-foreground";
    case "product": return "bg-positive text-positive-foreground";
    case "brand": return "bg-secondary text-secondary-foreground";
    default: return "bg-muted text-muted-foreground";
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Low": return "text-positive";
    case "Medium": return "text-neutral";
    case "High": return "text-negative";
    default: return "text-muted-foreground";
  }
};

export const TrendsExplorer = () => {
  const [selectedTrend, setSelectedTrend] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Trends Explorer</h2>
          <p className="text-muted-foreground">Discover emerging hashtags, viral formats, and campaign inspiration</p>
        </div>
        <Button className="bg-gradient-aurora hover:opacity-90">
          <Sparkles className="w-4 h-4 mr-2" />
          Generate Ideas
        </Button>
      </div>

      {/* Trend Metrics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Viral Hashtags</CardTitle>
            <Flame className="h-4 w-4 text-negative" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              +7 in last 24h
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Mentions</CardTitle>
            <MessageCircle className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2M</div>
            <p className="text-xs text-muted-foreground">
              +180% this week
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Sentiment</CardTitle>
            <TrendingUp className="h-4 w-4 text-positive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">84%</div>
            <p className="text-xs text-muted-foreground">
              +5% improvement
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Trends</CardTitle>
            <Hash className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              Across all platforms
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trending Hashtags Bubble Chart */}
        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Hash className="w-5 h-5" />
              Trending Hashtags
            </CardTitle>
            <CardDescription>
              Size = mentions volume, Color = sentiment score
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative h-80 p-4 bg-muted/20 rounded-lg overflow-hidden">
              {trendingHashtags.map((hashtag, index) => (
                <div
                  key={hashtag.id}
                  className={`absolute rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 ${getCategoryColor(hashtag.category)}`}
                  style={{
                    width: hashtag.size,
                    height: hashtag.size,
                    left: `${(index * 15 + 10) % 70}%`,
                    top: `${(index * 20 + 15) % 60}%`,
                  }}
                  onClick={() => setSelectedTrend(hashtag.id)}
                >
                  <span className="text-xs font-medium text-center px-1">
                    {hashtag.hashtag.split('#')[1]}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              {trendingHashtags.slice(0, 3).map((hashtag) => (
                <div key={hashtag.id} className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Badge className={getCategoryColor(hashtag.category)} variant="secondary">
                      {hashtag.hashtag}
                    </Badge>
                    <span className="text-muted-foreground">{hashtag.mentions}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-positive">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>{hashtag.growth}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Hot Ideas Carousel */}
        <Card className="bg-gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Hot Campaign Ideas
            </CardTitle>
            <CardDescription>
              AI-generated concepts based on trending patterns
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {hotIdeas.map((idea) => (
              <div key={idea.id} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold">{idea.title}</h4>
                  <Badge variant="outline" className={getDifficultyColor(idea.difficulty)}>
                    {idea.difficulty}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{idea.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{idea.inspiration}</span>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3" />
                    <span>{idea.timeframe}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Meme Formats */}
      <Card className="bg-gradient-card shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Popular Meme Formats
          </CardTitle>
          <CardDescription>
            Trending content formats and their marketing potential
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {memeFormats.map((format) => (
              <div key={format.id} className="p-4 border border-border rounded-lg">
                <h4 className="font-medium mb-2">{format.format}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Usage:</span>
                    <span className="font-medium">{format.usage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Trend:</span>
                    <Badge variant={format.trend === "rising" ? "default" : "secondary"}>
                      {format.trend}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Potential:</span>
                    <span className={`font-medium ${
                      format.potential === "Very High" ? "text-negative" :
                      format.potential === "High" ? "text-positive" : "text-neutral"
                    }`}>
                      {format.potential}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};