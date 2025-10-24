import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Key, AlertTriangle, CheckCircle2, Lock } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "policy",
    title: "Terraform merge blocked",
    description: "Insecure S3 bucket configuration detected in PR #1247",
    time: "5 minutes ago",
    status: "blocked",
    icon: Shield,
  },
  {
    id: 2,
    type: "certificate",
    title: "TLS certificate renewed",
    description: "api.production.example.com certificate auto-renewed",
    time: "12 minutes ago",
    status: "success",
    icon: Key,
  },
  {
    id: 3,
    type: "anomaly",
    title: "Anomaly detected",
    description: "Unusual IAM role access pattern in AWS us-east-1",
    time: "28 minutes ago",
    status: "warning",
    icon: AlertTriangle,
  },
  {
    id: 4,
    type: "deployment",
    title: "Secure deployment completed",
    description: "GCP workload deployed with least-privilege IAM",
    time: "1 hour ago",
    status: "success",
    icon: CheckCircle2,
  },
  {
    id: 5,
    type: "encryption",
    title: "KMS key rotated",
    description: "Azure Key Vault keys rotated successfully",
    time: "2 hours ago",
    status: "success",
    icon: Lock,
  },
]

const statusColors = {
  success: "text-accent",
  warning: "text-destructive",
  blocked: "text-muted-foreground",
}

const statusBadges = {
  success: "default",
  warning: "destructive",
  blocked: "secondary",
} as const

export function RecentActivity() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest security events and automated actions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <div
                  className={`h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 ${statusColors[activity.status as keyof typeof statusColors]}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-balance">{activity.title}</span>
                    <Badge variant={statusBadges[activity.status as keyof typeof statusBadges]} className="text-xs">
                      {activity.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty">{activity.description}</p>
                  <span className="text-xs text-muted-foreground mt-1 inline-block">{activity.time}</span>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
