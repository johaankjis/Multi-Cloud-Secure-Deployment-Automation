import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingDown, TrendingUp, Shield, Clock, CheckCircle2 } from "lucide-react"

const kpis = [
  {
    title: "Misconfigurations Reduced",
    value: "42%",
    change: "+12%",
    trend: "up",
    icon: Shield,
    description: "vs. last quarter",
  },
  {
    title: "Certificate Incidents",
    value: "0",
    change: "100%",
    trend: "up",
    icon: CheckCircle2,
    description: "Zero expired certs",
  },
  {
    title: "Mean Time to Detect",
    value: "8.2m",
    change: "-35%",
    trend: "down",
    icon: Clock,
    description: "Faster detection",
  },
  {
    title: "Policy Compliance",
    value: "100%",
    change: "0%",
    trend: "neutral",
    icon: Shield,
    description: "All merges blocked",
  },
]

export function KpiCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => {
        const Icon = kpi.icon
        return (
          <Card key={kpi.title} className="border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-balance">{kpi.value}</div>
              <div className="flex items-center gap-1 mt-1">
                {kpi.trend === "up" && <TrendingUp className="h-3 w-3 text-accent" />}
                {kpi.trend === "down" && <TrendingDown className="h-3 w-3 text-accent" />}
                <span className={`text-xs ${kpi.trend === "neutral" ? "text-muted-foreground" : "text-accent"}`}>
                  {kpi.change}
                </span>
                <span className="text-xs text-muted-foreground ml-1">{kpi.description}</span>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
