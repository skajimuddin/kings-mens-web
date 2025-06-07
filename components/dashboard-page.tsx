"use client"

import { useState } from "react"
import { MainDashboard } from "@/components/main-dashboard"
import { TaskManagement } from "@/components/task-management"
import { EmployeeManagement } from "@/components/employee-management"
import { PropertiesView } from "@/components/properties-view"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"

export function DashboardPage() {
  const [activeView, setActiveView] = useState("dashboard")

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {activeView === "dashboard" && <MainDashboard />}
          {activeView === "tasks" && <TaskManagement />}
          {activeView === "employees" && <EmployeeManagement />}
          {activeView === "properties" && <PropertiesView />}
        </main>
      </div>
    </div>
  )
}
