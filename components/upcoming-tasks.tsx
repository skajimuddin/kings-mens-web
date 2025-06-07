import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export function UpcomingTasks() {
  const tasks = [
    {
      id: 1,
      title: "Schedule property viewing for 123 Main St",
      dueDate: "Mar 10, 2025",
      assignee: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      priority: "high",
    },
    {
      id: 2,
      title: "Follow up with potential buyer for 789 Pine Rd",
      dueDate: "Mar 9, 2025",
      assignee: {
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      priority: "urgent",
    },
    {
      id: 3,
      title: "Update listing photos for 456 Oak Ave",
      dueDate: "Mar 12, 2025",
      assignee: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      priority: "medium",
    },
  ]

  const priorityColors = {
    low: "bg-green-100 text-green-800",
    medium: "bg-blue-100 text-blue-800",
    high: "bg-orange-100 text-orange-800",
    urgent: "bg-red-100 text-red-800",
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="flex flex-col space-y-2 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">{task.title}</h4>
            <Badge className={priorityColors[task.priority as keyof typeof priorityColors]}>
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </Badge>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="mr-1 h-4 w-4" />
              {task.dueDate}
            </div>
            <div className="flex items-center">
              <Avatar className="h-6 w-6 mr-2">
                <AvatarImage src={task.assignee.avatar} alt={task.assignee.name} />
                <AvatarFallback>
                  {task.assignee.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm">{task.assignee.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
