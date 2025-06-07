import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Users, ClipboardCheck, TrendingUp, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RecentActivities } from "@/components/recent-activities"
import { UpcomingTasks } from "@/components/upcoming-tasks"

export function MainDashboard() {
  return (
    <div className="grid gap-4 md:gap-6 lg:grid-cols-2 xl:grid-cols-3">
      <Card className="xl:col-span-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">Dashboard Overview</CardTitle>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            March 2025
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <DashboardCard
              title="Total Properties"
              value="248"
              description="+12% from last month"
              icon={<Building className="h-4 w-4 text-navy-900" />}
              color="bg-yellow-400"
            />
            <DashboardCard
              title="Active Agents"
              value="36"
              description="4 new this week"
              icon={<Users className="h-4 w-4 text-navy-900" />}
              color="bg-blue-400"
            />
            <DashboardCard
              title="Completed Tasks"
              value="182"
              description="92% completion rate"
              icon={<ClipboardCheck className="h-4 w-4 text-navy-900" />}
              color="bg-green-400"
            />
            <DashboardCard
              title="Revenue"
              value="$1.2M"
              description="+8% from last quarter"
              icon={<TrendingUp className="h-4 w-4 text-navy-900" />}
              color="bg-purple-400"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="xl:col-span-2">
        <CardHeader>
          <CardTitle>Team Performance</CardTitle>
          <CardDescription>Task completion rates by department</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Sales Team</div>
                <div className="text-sm text-muted-foreground">92%</div>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Property Management</div>
                <div className="text-sm text-muted-foreground">78%</div>
              </div>
              <Progress value={78} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Marketing</div>
                <div className="text-sm text-muted-foreground">85%</div>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Administrative</div>
                <div className="text-sm text-muted-foreground">96%</div>
              </div>
              <Progress value={96} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Tasks</CardTitle>
          <CardDescription>Tasks due in the next 7 days</CardDescription>
        </CardHeader>
        <CardContent>
          <UpcomingTasks />
        </CardContent>
      </Card>

      <Card className="xl:col-span-3">
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>Latest actions across the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <RecentActivities />
        </CardContent>
      </Card>
    </div>
  )
}

interface DashboardCardProps {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  color: string
}

function DashboardCard({ title, value, description, icon, color }: DashboardCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow">
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="tracking-tight text-sm font-medium">{title}</h3>
        <div className={`${color} p-2 rounded-full`}>{icon}</div>
      </div>
      <div className="p-6 pt-0">
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
