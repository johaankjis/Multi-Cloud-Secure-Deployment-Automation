import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Cloud, MoreVertical, Play, Square, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const deployments = [
  {
    id: "dep-001",
    name: "production-api-gateway",
    provider: "AWS",
    region: "us-east-1",
    status: "running",
    instances: 12,
    lastDeployed: "2 hours ago",
    securityScore: 98,
  },
  {
    id: "dep-002",
    name: "analytics-pipeline",
    provider: "GCP",
    region: "us-central1",
    status: "running",
    instances: 8,
    lastDeployed: "5 hours ago",
    securityScore: 100,
  },
  {
    id: "dep-003",
    name: "ml-training-cluster",
    provider: "Azure",
    region: "eastus",
    status: "deploying",
    instances: 24,
    lastDeployed: "Just now",
    securityScore: 95,
  },
  {
    id: "dep-004",
    name: "data-warehouse",
    provider: "AWS",
    region: "eu-west-1",
    status: "running",
    instances: 6,
    lastDeployed: "1 day ago",
    securityScore: 100,
  },
  {
    id: "dep-005",
    name: "web-frontend",
    provider: "GCP",
    region: "asia-southeast1",
    status: "stopped",
    instances: 4,
    lastDeployed: "3 days ago",
    securityScore: 92,
  },
  {
    id: "dep-006",
    name: "backup-storage",
    provider: "Azure",
    region: "westus2",
    status: "running",
    instances: 2,
    lastDeployed: "12 hours ago",
    securityScore: 100,
  },
]

const statusConfig = {
  running: { variant: "default" as const, color: "text-accent" },
  stopped: { variant: "secondary" as const, color: "text-muted-foreground" },
  deploying: { variant: "outline" as const, color: "text-chart-1" },
  failed: { variant: "destructive" as const, color: "text-destructive" },
}

const providerColors = {
  AWS: "bg-chart-1/10 text-chart-1",
  GCP: "bg-chart-2/10 text-chart-2",
  Azure: "bg-chart-3/10 text-chart-3",
}

export function DeploymentList() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>All Deployments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {deployments.map((deployment) => (
            <div
              key={deployment.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Cloud className="h-5 w-5 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-balance">{deployment.name}</span>
                    <Badge variant={statusConfig[deployment.status as keyof typeof statusConfig].variant}>
                      {deployment.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span
                      className={`px-2 py-0.5 rounded-md font-medium ${providerColors[deployment.provider as keyof typeof providerColors]}`}
                    >
                      {deployment.provider}
                    </span>
                    <span>{deployment.region}</span>
                    <span>•</span>
                    <span>{deployment.instances} instances</span>
                    <span>•</span>
                    <span>Score: {deployment.securityScore}%</span>
                  </div>
                </div>

                <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Deployed {deployment.lastDeployed}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 ml-4">
                {deployment.status === "running" && (
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Square className="h-4 w-4" />
                  </Button>
                )}
                {deployment.status === "stopped" && (
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Play className="h-4 w-4" />
                  </Button>
                )}

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Configuration</DropdownMenuItem>
                    <DropdownMenuItem>View Logs</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
