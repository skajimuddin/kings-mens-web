"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Building2, LayoutDashboard, LogOut, Settings, Users, ClipboardList, Home } from "lucide-react"

interface SidebarProps {
  activeView: string
  setActiveView: (view: string) => void
}

export function Sidebar({ activeView, setActiveView }: SidebarProps) {
  const navItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      value: "dashboard",
    },
    {
      name: "Tasks",
      icon: <ClipboardList className="h-5 w-5" />,
      value: "tasks",
    },
    {
      name: "Employees",
      icon: <Users className="h-5 w-5" />,
      value: "employees",
    },
    {
      name: "Properties",
      icon: <Building2 className="h-5 w-5" />,
      value: "properties",
    },
    {
      name: "Settings",
      icon: <Settings className="h-5 w-5" />,
      value: "settings",
    },
  ]

  return (
    <div className="hidden md:flex md:w-64 md:flex-col h-screen bg-navy-900 text-white">
      <div className="flex items-center justify-center h-16 border-b border-navy-700">
        <Home className="h-6 w-6 text-yellow-400 mr-2" />
        <span className="text-xl font-bold">RealEstate CRM</span>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navItems.map((item) => (
            <Button
              key={item.value}
              variant="ghost"
              className={cn(
                "w-full justify-start text-white hover:bg-navy-700 hover:text-white",
                activeView === item.value ? "bg-navy-700 text-yellow-400" : "text-gray-300",
              )}
              onClick={() => setActiveView(item.value)}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </Button>
          ))}
        </nav>
        <div className="p-4">
          <Button
            variant="outline"
            className="w-full justify-start text-white border-navy-700 hover:bg-navy-700 hover:text-white"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}
