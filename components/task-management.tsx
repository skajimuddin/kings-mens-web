"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Plus, Filter, Calendar, Clock, CheckCircle2 } from "lucide-react"

export function TaskManagement() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Task Management</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-navy-900 hover:bg-navy-800">
                <Plus className="mr-2 h-4 w-4" />
                New Task
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Create New Task</DialogTitle>
                <DialogDescription>Assign a new task to a team member</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="task-title">Task Title</Label>
                  <Input id="task-title" placeholder="Enter task title" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="task-description">Description</Label>
                  <Textarea id="task-description" placeholder="Enter task details" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="due-date">Due Date</Label>
                    <Input id="due-date" type="date" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select>
                      <SelectTrigger id="priority">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="assignee">Assign To</Label>
                  <Select>
                    <SelectTrigger id="assignee">
                      <SelectValue placeholder="Select team member" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john">John Doe</SelectItem>
                      <SelectItem value="sarah">Sarah Johnson</SelectItem>
                      <SelectItem value="michael">Michael Brown</SelectItem>
                      <SelectItem value="emily">Emily Davis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-navy-900 hover:bg-navy-800" onClick={() => setOpen(false)}>
                  Create Task
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Tasks</TabsTrigger>
          <TabsTrigger value="assigned">Assigned</TabsTrigger>
          <TabsTrigger value="inprogress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>All Tasks</CardTitle>
              <CardDescription>View and manage all tasks in the system</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <TaskItem
                  title="Schedule property viewing for 123 Main St"
                  assignee="John Doe"
                  avatarUrl="/placeholder.svg?height=32&width=32"
                  dueDate="Mar 10, 2025"
                  priority="high"
                  status="assigned"
                />
                <TaskItem
                  title="Update listing photos for 456 Oak Ave"
                  assignee="Sarah Johnson"
                  avatarUrl="/placeholder.svg?height=32&width=32"
                  dueDate="Mar 12, 2025"
                  priority="medium"
                  status="inprogress"
                />
                <TaskItem
                  title="Follow up with potential buyer for 789 Pine Rd"
                  assignee="Michael Brown"
                  avatarUrl="/placeholder.svg?height=32&width=32"
                  dueDate="Mar 9, 2025"
                  priority="urgent"
                  status="assigned"
                />
                <TaskItem
                  title="Complete property inspection report"
                  assignee="Emily Davis"
                  avatarUrl="/placeholder.svg?height=32&width=32"
                  dueDate="Mar 8, 2025"
                  priority="low"
                  status="completed"
                />
                <TaskItem
                  title="Prepare contract for 567 Maple Lane"
                  assignee="John Doe"
                  avatarUrl="/placeholder.svg?height=32&width=32"
                  dueDate="Mar 15, 2025"
                  priority="high"
                  status="inprogress"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="assigned" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Assigned Tasks</CardTitle>
              <CardDescription>Tasks that have been assigned but not started</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <TaskItem
                  title="Schedule property viewing for 123 Main St"
                  assignee="John Doe"
                  avatarUrl="/placeholder.svg?height=32&width=32"
                  dueDate="Mar 10, 2025"
                  priority="high"
                  status="assigned"
                />
                <TaskItem
                  title="Follow up with potential buyer for 789 Pine Rd"
                  assignee="Michael Brown"
                  avatarUrl="/placeholder.svg?height=32&width=32"
                  dueDate="Mar 9, 2025"
                  priority="urgent"
                  status="assigned"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="inprogress" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>In Progress</CardTitle>
              <CardDescription>Tasks currently being worked on</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <TaskItem
                  title="Update listing photos for 456 Oak Ave"
                  assignee="Sarah Johnson"
                  avatarUrl="/placeholder.svg?height=32&width=32"
                  dueDate="Mar 12, 2025"
                  priority="medium"
                  status="inprogress"
                />
                <TaskItem
                  title="Prepare contract for 567 Maple Lane"
                  assignee="John Doe"
                  avatarUrl="/placeholder.svg?height=32&width=32"
                  dueDate="Mar 15, 2025"
                  priority="high"
                  status="inprogress"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed</CardTitle>
              <CardDescription>Tasks that have been completed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <TaskItem
                  title="Complete property inspection report"
                  assignee="Emily Davis"
                  avatarUrl="/placeholder.svg?height=32&width=32"
                  dueDate="Mar 8, 2025"
                  priority="low"
                  status="completed"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface TaskItemProps {
  title: string
  assignee: string
  avatarUrl: string
  dueDate: string
  priority: "low" | "medium" | "high" | "urgent"
  status: "assigned" | "inprogress" | "completed"
}

function TaskItem({ title, assignee, avatarUrl, dueDate, priority, status }: TaskItemProps) {
  const priorityColors = {
    low: "bg-green-100 text-green-800",
    medium: "bg-blue-100 text-blue-800",
    high: "bg-orange-100 text-orange-800",
    urgent: "bg-red-100 text-red-800",
  }

  const statusColors = {
    assigned: "bg-slate-100 text-slate-800",
    inprogress: "bg-yellow-100 text-yellow-800",
    completed: "bg-green-100 text-green-800",
  }

  const statusIcons = {
    assigned: <Clock className="h-4 w-4 mr-1" />,
    inprogress: <Calendar className="h-4 w-4 mr-1" />,
    completed: <CheckCircle2 className="h-4 w-4 mr-1" />,
  }

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>
            {assignee
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-medium">{title}</h4>
          <div className="flex items-center text-sm text-muted-foreground">
            Assigned to: {assignee} • Due: {dueDate}
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Badge className={priorityColors[priority]}>{priority.charAt(0).toUpperCase() + priority.slice(1)}</Badge>
        <Badge className={statusColors[status]}>
          <div className="flex items-center">
            {statusIcons[status]}
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
        </Badge>
      </div>
    </div>
  )
}
