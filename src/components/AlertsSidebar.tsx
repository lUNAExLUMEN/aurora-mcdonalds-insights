import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  AlertTriangle, 
  TrendingDown, 
  TrendingUp, 
  Bell, 
  Clock, 
  Eye, 
  X,
  CheckCircle,
  ExternalLink
} from "lucide-react";

const alerts = [
  {
    id: 1,
    type: "critical",
    title: "Sentiment Drop Alert",
    description: "Chicken Maharaja Mac campaign sentiment dropped 15% in last 2 hours",
    time: "2 min ago",
    campaign: "Chicken Maharaja Mac",
    severity: "high",
    action: "Review campaign messaging",
    resolved: false
  },
  {
    id: 2,
    type: "warning",
    title: "Budget Threshold Reached",
    description: "Late Night Delivery campaign has spent 85% of allocated budget",
    time: "15 min ago",
    campaign: "Late Night Delivery",
    severity: "medium",
    action: "Adjust budget or pause campaign",
    resolved: false
  },
  {
    id: 3,
    type: "positive",
    title: "Viral Moment Detected",
    description: "Kartik Aaryan Meal hashtag trending #3 on Twitter",
    time: "1 hour ago",
    campaign: "Kartik Aaryan Meal",
    severity: "low",
    action: "Amplify trending content",
    resolved: false
  },
  {
    id: 4,
    type: "warning",
    title: "Engagement Rate Decline",
    description: "McAloo Tikki Heritage showing 12% decrease in engagement",
    time: "2 hours ago",
    campaign: "McAloo Tikki Heritage",
    severity: "medium",
    action: "Update creative assets",
    resolved: false
  },
  {
    id: 5,
    type: "info",
    title: "Celebrity Risk Update",
    description: "Ranveer Singh controversy score increased to 72/100",
    time: "3 hours ago",
    campaign: "All Campaigns",
    severity: "low",
    action: "Monitor celebrity activities",
    resolved: true
  },
  {
    id: 6,
    type: "positive",
    title: "ROI Target Exceeded",
    description: "Kartik Aaryan Meal campaign ROI reached 145% (target: 120%)",
    time: "4 hours ago",
    campaign: "Kartik Aaryan Meal",
    severity: "low",
    action: "Consider scaling up",
    resolved: true
  }
];

const getAlertIcon = (type: string) => {
  switch (type) {
    case "critical": return <AlertTriangle className="w-4 h-4 text-negative" />;
    case "warning": return <TrendingDown className="w-4 h-4 text-neutral" />;
    case "positive": return <TrendingUp className="w-4 h-4 text-positive" />;
    case "info": return <Bell className="w-4 h-4 text-primary" />;
    default: return <Bell className="w-4 h-4 text-muted-foreground" />;
  }
};

const getAlertColor = (type: string, resolved: boolean) => {
  if (resolved) return "bg-muted text-muted-foreground";
  
  switch (type) {
    case "critical": return "bg-negative/10 border-negative/20 text-negative";
    case "warning": return "bg-neutral/10 border-neutral/20 text-neutral";
    case "positive": return "bg-positive/10 border-positive/20 text-positive";
    case "info": return "bg-primary/10 border-primary/20 text-primary";
    default: return "bg-muted text-muted-foreground";
  }
};

const getSeverityBadge = (severity: string) => {
  switch (severity) {
    case "high": return <Badge className="bg-negative text-negative-foreground">High</Badge>;
    case "medium": return <Badge className="bg-neutral text-neutral-foreground">Medium</Badge>;
    case "low": return <Badge className="bg-positive text-positive-foreground">Low</Badge>;
    default: return <Badge variant="outline">Unknown</Badge>;
  }
};

export const AlertsSidebar = () => {
  const [dismissedAlerts, setDismissedAlerts] = useState<number[]>([]);

  const dismissAlert = (alertId: number) => {
    setDismissedAlerts(prev => [...prev, alertId]);
  };

  const activeAlerts = alerts.filter(alert => !dismissedAlerts.includes(alert.id));
  const unreadCount = activeAlerts.filter(alert => !alert.resolved).length;

  return (
    <Card className="bg-gradient-card shadow-card h-fit sticky top-24">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Alerts & Notifications
          </CardTitle>
          {unreadCount > 0 && (
            <Badge className="bg-negative text-negative-foreground animate-pulse-aurora">
              {unreadCount}
            </Badge>
          )}
        </div>
        <CardDescription>
          Real-time campaign monitoring and alerts
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-0">
        <ScrollArea className="h-[600px]">
          <div className="space-y-3 p-6 pt-0">
            {activeAlerts.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <CheckCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>All caught up!</p>
                <p className="text-sm">No active alerts at the moment.</p>
              </div>
            ) : (
              activeAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-3 rounded-lg border transition-all duration-300 hover:shadow-md ${getAlertColor(alert.type, alert.resolved)} ${
                    alert.resolved ? 'opacity-60' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {getAlertIcon(alert.type)}
                      <h4 className="font-medium text-sm">{alert.title}</h4>
                    </div>
                    <div className="flex items-center space-x-1">
                      {getSeverityBadge(alert.severity)}
                      {!alert.resolved && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0 hover:bg-background/20"
                          onClick={() => dismissAlert(alert.id)}
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-xs mb-2 opacity-90">
                    {alert.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-1 opacity-75">
                      <Clock className="w-3 h-3" />
                      <span>{alert.time}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {alert.campaign}
                    </Badge>
                  </div>
                  
                  {!alert.resolved && (
                    <div className="mt-3 pt-2 border-t border-border/50">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium opacity-75">Suggested Action:</span>
                        <Button variant="ghost" size="sm" className="h-6 text-xs">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      </div>
                      <p className="text-xs mt-1 opacity-90">{alert.action}</p>
                    </div>
                  )}
                  
                  {alert.resolved && (
                    <div className="mt-2 flex items-center space-x-1 text-xs opacity-60">
                      <CheckCircle className="w-3 h-3" />
                      <span>Resolved</span>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </ScrollArea>
        
        {/* Quick Actions */}
        <div className="p-4 border-t border-border bg-muted/30">
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Eye className="w-4 h-4 mr-2" />
              View All Alerts
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Bell className="w-4 h-4 mr-2" />
              Configure Notifications
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};