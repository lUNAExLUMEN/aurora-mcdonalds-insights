import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Target, Users, Calendar, DollarSign, Sparkles, Brain } from "lucide-react";

const CampaignBuilder = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    goal: "",
    targetAudience: "",
    budget: "",
    duration: "",
    region: "",
    celebrity: "",
    message: "",
    channels: []
  });

  const totalSteps = 5;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const trendingSuggestions = [
    { tag: "#McSpicy", sentiment: "🔥", growth: "+145%" },
    { tag: "#ComboMeal", sentiment: "😊", growth: "+98%" },
    { tag: "#LimitedTime", sentiment: "⚡", growth: "+67%" },
  ];

  const celebritySuggestions = [
    { name: "Kartik Aaryan", fit: "92%", risk: "Low", audience: "Gen Z, Millennials" },
    { name: "Kiara Advani", fit: "88%", risk: "Low", audience: "Young Adults" },
    { name: "Rohit Sharma", fit: "85%", risk: "Medium", audience: "Sports Fans" },
  ];

  const messageDrafts = [
    "Experience the bold flavors that define your taste! 🔥 #McSpicy",
    "When flavor meets fun - that's the McDonald's way! 😊 #ComboMeal",
    "Limited time, unlimited taste. Don't miss out! ⚡ #LimitedTime",
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    // In real app, this would save the campaign
    navigate("/");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="name">Campaign Name</Label>
              <Input
                id="name"
                placeholder="e.g., Summer Spicy Delight"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div>
              <Label htmlFor="goal">Campaign Goal</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, goal: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select primary goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="awareness">Brand Awareness</SelectItem>
                  <SelectItem value="engagement">Engagement</SelectItem>
                  <SelectItem value="sales">Drive Sales</SelectItem>
                  <SelectItem value="launch">Product Launch</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="region">Target Region</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, region: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="national">National (India)</SelectItem>
                  <SelectItem value="north">North India</SelectItem>
                  <SelectItem value="south">South India</SelectItem>
                  <SelectItem value="west">West India</SelectItem>
                  <SelectItem value="east">East India</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="audience">Target Audience</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, targetAudience: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select target audience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="genz">Gen Z (18-25)</SelectItem>
                  <SelectItem value="millennials">Millennials (26-35)</SelectItem>
                  <SelectItem value="families">Families</SelectItem>
                  <SelectItem value="working">Working Professionals</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label>Trending Hashtags</Label>
              <div className="grid gap-3 mt-2">
                {trendingSuggestions.map((trend, index) => (
                  <Card key={index} className="p-4 cursor-pointer hover:shadow-md transition-shadow border border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{trend.sentiment}</span>
                        <div>
                          <div className="font-medium">{trend.tag}</div>
                          <div className="text-sm text-green-600">{trend.growth} growth</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Add to Campaign</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="budget">Campaign Budget (₹)</Label>
              <Input
                id="budget"
                type="number"
                placeholder="500000"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="duration">Campaign Duration</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, duration: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1week">1 Week</SelectItem>
                  <SelectItem value="2weeks">2 Weeks</SelectItem>
                  <SelectItem value="1month">1 Month</SelectItem>
                  <SelectItem value="3months">3 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label>Celebrity Endorsement</Label>
              <div className="grid gap-3 mt-2">
                {celebritySuggestions.map((celebrity, index) => (
                  <Card key={index} className="p-4 cursor-pointer hover:shadow-md transition-shadow border border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{celebrity.name}</div>
                        <div className="text-sm text-muted-foreground">{celebrity.audience}</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={celebrity.risk === "Low" ? "default" : "secondary"}>
                          {celebrity.risk} Risk
                        </Badge>
                        <div className="text-sm font-medium text-green-600">{celebrity.fit} Match</div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => navigate(`/celebrity/${celebrity.name.toLowerCase().replace(" ", "-")}`)}
                        >
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <Label>AI-Generated Message Drafts</Label>
              <div className="grid gap-3 mt-2">
                {messageDrafts.map((message, index) => (
                  <Card key={index} className="p-4 cursor-pointer hover:shadow-md transition-shadow border border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm">{message}</p>
                      </div>
                      <Button variant="outline" size="sm">Use This</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="custom-message">Custom Message</Label>
              <Textarea
                id="custom-message"
                placeholder="Write your own campaign message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Campaign Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name:</span>
                  <span>{formData.name || "Summer Spicy Delight"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Goal:</span>
                  <span>{formData.goal || "Brand Awareness"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Target:</span>
                  <span>{formData.targetAudience || "Gen Z"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Budget:</span>
                  <span>₹{formData.budget || "500,000"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span>{formData.duration || "1 Month"}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <div className="flex items-center space-x-2 mb-3">
                <Brain className="w-5 h-5 text-blue-600" />
                <h4 className="font-medium text-blue-900 dark:text-blue-100">AI Prediction</h4>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">4.8%</div>
                  <div className="text-sm text-blue-800 dark:text-blue-200">Expected CTR</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">15.2%</div>
                  <div className="text-sm text-blue-800 dark:text-blue-200">Engagement Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">2.8M</div>
                  <div className="text-sm text-blue-800 dark:text-blue-200">Projected Reach</div>
                </div>
              </div>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return "Campaign Basics";
      case 2: return "Budget & Trends";
      case 3: return "Celebrity Selection";
      case 4: return "Message Creation";
      case 5: return "Final Review";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-card sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate("/")} className="p-2">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Campaign Builder</h1>
                <p className="text-sm text-muted-foreground">Step {currentStep} of {totalSteps}: {getStepTitle()}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-aurora-primary" />
              <span className="text-sm font-medium text-aurora-primary">AI-Powered</span>
            </div>
          </div>
          
          <div className="mt-4">
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <Card className="bg-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              {getStepTitle()}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Define your campaign objectives and target market"}
              {currentStep === 2 && "Set budget and leverage trending content"}
              {currentStep === 3 && "Choose the perfect celebrity ambassador"}
              {currentStep === 4 && "Craft compelling campaign messages"}
              {currentStep === 5 && "Review and launch your campaign"}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {renderStep()}
            
            <div className="flex justify-between pt-6 border-t border-border">
              <Button 
                variant="outline" 
                onClick={handlePrev} 
                disabled={currentStep === 1}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              
              {currentStep < totalSteps ? (
                <Button onClick={handleNext} className="bg-gradient-aurora hover:opacity-90 transition-opacity">
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button onClick={handleFinish} className="bg-gradient-aurora hover:opacity-90 transition-opacity">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Launch Campaign
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CampaignBuilder;