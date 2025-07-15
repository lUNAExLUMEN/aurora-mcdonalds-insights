import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, TrendingUp, MessageSquare, Heart, Share, Users, Plus, Eye, Copy } from "lucide-react";

const TrendContext = () => {
  const { trendId } = useParams();
  const navigate = useNavigate();
  const [copiedContent, setCopiedContent] = useState<string | null>(null);

  // Mock trend data
  const trend = {
    tag: "#McSpicy",
    sentiment: "🔥",
    growth: "+145%",
    volume: "47.2K",
    reach: "2.8M",
    engagement: "8.9%"
  };

  const relatedPosts = [
    {
      platform: "Twitter",
      author: "@foodie_rahul",
      content: "Just tried the new #McSpicy combo and I'm officially addicted! 🔥 McDonald's really knows how to spice things up!",
      engagement: "2.3K",
      sentiment: "🔥",
      time: "2h ago"
    },
    {
      platform: "Instagram",
      author: "@delhifoodblogger",
      content: "The #McSpicy challenge is real! Can you handle the heat? 🌶️ Tag someone who needs to try this!",
      engagement: "5.7K",
      sentiment: "🔥",
      time: "4h ago"
    },
    {
      platform: "Twitter",
      author: "@mumbai_eats",
      content: "Unpopular opinion: #McSpicy is overrated 🤷‍♂️ Give me classic fries any day",
      engagement: "892",
      sentiment: "😐",
      time: "6h ago"
    },
    {
      platform: "Instagram",
      author: "@spicefood_lover",
      content: "Finally found my match! #McSpicy + extra sauce = perfection 😍 McDonald's got this one right",
      engagement: "3.1K",
      sentiment: "😊",
      time: "8h ago"
    }
  ];

  const topInfluencers = [
    {
      name: "Food Blogger Priya",
      handle: "@foodiepriya",
      followers: "125K",
      engagement: "4.2%",
      posts: 3,
      reach: "89K"
    },
    {
      name: "Delhi Food Guide",
      handle: "@delhieats",
      followers: "89K",
      engagement: "6.1%",
      posts: 2,
      reach: "67K"
    },
    {
      name: "Spice Master",
      handle: "@spicemaster",
      followers: "67K",
      engagement: "8.3%",
      posts: 4,
      reach: "78K"
    }
  ];

  const suggestedHashtags = [
    { tag: "#McSpicyChallenge", volume: "12.3K", trend: "+89%" },
    { tag: "#SpicyCombo", volume: "8.7K", trend: "+67%" },
    { tag: "#McSpicyLove", volume: "6.2K", trend: "+45%" },
    { tag: "#TooHotToHandle", volume: "4.1K", trend: "+34%" }
  ];

  const contentSuggestions = [
    {
      type: "Video Idea",
      title: "Behind-the-scenes: Making McSpicy",
      description: "Show the kitchen process, spice blend, chef reactions",
      engagement: "High"
    },
    {
      type: "Challenge",
      title: "McSpicy Heat Challenge",
      description: "User-generated content of people trying different spice levels",
      engagement: "Very High"
    },
    {
      type: "Educational",
      title: "Spice Scale Comparison",
      description: "Compare McSpicy heat level to popular Indian dishes",
      engagement: "Medium"
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedContent(text);
    setTimeout(() => setCopiedContent(null), 2000);
  };

  const getSentimentEmoji = (sentiment: string) => {
    switch (sentiment) {
      case "🔥": return "🔥";
      case "😊": return "😊";
      case "😐": return "😐";
      case "🚨": return "🚨";
      default: return "😊";
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
                <span className="text-3xl">{trend.sentiment}</span>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">{trend.tag}</h1>
                  <div className="flex items-center space-x-4 mt-1">
                    <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      {trend.growth} growth
                    </Badge>
                    <span className="text-sm text-muted-foreground">{trend.volume} posts today</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline">
                <Share className="w-4 h-4 mr-2" />
                Share Trend
              </Button>
              <Button 
                className="bg-gradient-aurora hover:opacity-90 transition-opacity"
                onClick={() => navigate("/campaign-builder")}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add to Campaign
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card border-border shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{trend.volume}</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                {trend.growth} from yesterday
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Reach</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{trend.reach}</div>
              <div className="flex items-center text-xs text-blue-600 mt-1">
                <Users className="w-3 h-3 mr-1" />
                Unique impressions
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Engagement Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{trend.engagement}</div>
              <div className="flex items-center text-xs text-purple-600 mt-1">
                <Heart className="w-3 h-3 mr-1" />
                Above average
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Sentiment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">82% Positive</div>
              <div className="flex items-center text-xs text-green-600 mt-1">
                <span className="text-lg mr-1">😊</span>
                Mostly positive
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="posts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
            <TabsTrigger value="posts">Recent Posts</TabsTrigger>
            <TabsTrigger value="influencers">Top Influencers</TabsTrigger>
            <TabsTrigger value="hashtags">Related Tags</TabsTrigger>
            <TabsTrigger value="ideas">Content Ideas</TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-6">
            <div className="space-y-4">
              {relatedPosts.map((post, index) => (
                <Card key={index} className="bg-card border-border shadow-card hover:shadow-card-hover transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Badge variant="outline">{post.platform}</Badge>
                        <span className="font-medium">{post.author}</span>
                        <span className="text-2xl">{getSentimentEmoji(post.sentiment)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(post.content)}
                          className="p-2"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                        <span className="text-sm text-muted-foreground">{post.time}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm mb-3">{post.content}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{post.engagement} engagement</span>
                      </div>
                      {copiedContent === post.content && (
                        <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                          Copied!
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="influencers" className="space-y-6">
            <div className="grid gap-4">
              {topInfluencers.map((influencer, index) => (
                <Card key={index} className="bg-card border-border shadow-card hover:shadow-card-hover transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{influencer.name}</div>
                        <div className="text-sm text-muted-foreground">{influencer.handle}</div>
                      </div>
                      <div className="flex items-center space-x-6 text-sm">
                        <div className="text-center">
                          <div className="font-medium">{influencer.followers}</div>
                          <div className="text-muted-foreground">Followers</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium">{influencer.engagement}</div>
                          <div className="text-muted-foreground">Engagement</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium">{influencer.posts}</div>
                          <div className="text-muted-foreground">Posts</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium">{influencer.reach}</div>
                          <div className="text-muted-foreground">Reach</div>
                        </div>
                        <Button variant="outline" size="sm">
                          Contact
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hashtags" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suggestedHashtags.map((hashtag, index) => (
                <Card key={index} className="bg-card border-border shadow-card hover:shadow-card-hover transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-lg">{hashtag.tag}</div>
                        <div className="text-sm text-muted-foreground">{hashtag.volume} posts</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant="default" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                          {hashtag.trend}
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(hashtag.tag)}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ideas" className="space-y-6">
            <div className="space-y-4">
              {contentSuggestions.map((idea, index) => (
                <Card key={index} className="bg-card border-border shadow-card hover:shadow-card-hover transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline">{idea.type}</Badge>
                          <Badge variant={idea.engagement === "Very High" ? "default" : idea.engagement === "High" ? "secondary" : "outline"}>
                            {idea.engagement} Engagement
                          </Badge>
                        </div>
                        <h4 className="font-medium mb-2">{idea.title}</h4>
                        <p className="text-sm text-muted-foreground">{idea.description}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate("/campaign-builder")}
                      >
                        Use Idea
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TrendContext;