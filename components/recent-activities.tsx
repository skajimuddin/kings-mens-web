import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivities() {
  const activities = [
    {
      id: 1,
      user: {
        name: "John Doe",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "added a new property",
      target: "123 Main St, Anytown",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "completed a task",
      target: "Update listing photos for 456 Oak Ave",
      time: "3 hours ago",
    },
    {
      id: 3,
      user: {
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "scheduled a viewing",
      target: "789 Pine Rd",
      time: "5 hours ago",
    },
    {
      id: 4,
      user: {
        name: "Emily Davis",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "closed a deal on",
      target: "567 Maple Lane",
      time: "Yesterday",
    },
    {
      id: 5,
      user: {
        name: "Robert Wilson",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      action: "created a marketing campaign for",
      target: "New Downtown Listings",
      time: "Yesterday",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-4 rounded-lg border p-4">
          <Avatar>
            <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
            <AvatarFallback>
              {activity.user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">
              <span className="font-semibold">{activity.user.name}</span> {activity.action}{" "}
              <span className="font-semibold">{activity.target}</span>
            </p>
            <p className="text-sm text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
