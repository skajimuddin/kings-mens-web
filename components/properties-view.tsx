"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, MapPin, Bed, Bath, Square } from "lucide-react"

export function PropertiesView() {
  const [view, setView] = useState<"grid" | "list">("grid")

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Properties</h2>
        <Button className="bg-navy-900 hover:bg-navy-800">
          <Plus className="mr-2 h-4 w-4" />
          Add Property
        </Button>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row md:items-end md:justify-between md:space-y-0">
        <div className="flex flex-1 items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search properties..." className="pl-8" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Properties</SelectItem>
              <SelectItem value="for-sale">For Sale</SelectItem>
              <SelectItem value="for-rent">For Rent</SelectItem>
              <SelectItem value="sold">Sold</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant={view === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setView("grid")}
            className={view === "grid" ? "bg-navy-900 hover:bg-navy-800" : ""}
          >
            Grid
          </Button>
          <Button
            variant={view === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setView("list")}
            className={view === "list" ? "bg-navy-900 hover:bg-navy-800" : ""}
          >
            List
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="for-sale">For Sale</TabsTrigger>
          <TabsTrigger value="for-rent">For Rent</TabsTrigger>
          <TabsTrigger value="sold">Sold</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          {view === "grid" ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <PropertyCard
                title="Modern Apartment in Downtown"
                address="123 Main St, Anytown, USA"
                price="$450,000"
                status="for-sale"
                beds={2}
                baths={2}
                sqft={1200}
                image="/placeholder.svg?height=200&width=300"
              />
              <PropertyCard
                title="Luxury Condo with Ocean View"
                address="456 Ocean Ave, Beachtown, USA"
                price="$3,500/mo"
                status="for-rent"
                beds={3}
                baths={2}
                sqft={1800}
                image="/placeholder.svg?height=200&width=300"
              />
              <PropertyCard
                title="Charming Suburban Home"
                address="789 Oak St, Suburbia, USA"
                price="$650,000"
                status="pending"
                beds={4}
                baths={3}
                sqft={2400}
                image="/placeholder.svg?height=200&width=300"
              />
              <PropertyCard
                title="Downtown Loft"
                address="101 Urban Ave, Metropolis, USA"
                price="$525,000"
                status="for-sale"
                beds={1}
                baths={1}
                sqft={950}
                image="/placeholder.svg?height=200&width=300"
              />
              <PropertyCard
                title="Family Home with Large Yard"
                address="202 Family Rd, Hometown, USA"
                price="$720,000"
                status="sold"
                beds={5}
                baths={3}
                sqft={3200}
                image="/placeholder.svg?height=200&width=300"
              />
              <PropertyCard
                title="Waterfront Property"
                address="303 Lake View Dr, Lakeside, USA"
                price="$4,200/mo"
                status="for-rent"
                beds={3}
                baths={2}
                sqft={2100}
                image="/placeholder.svg?height=200&width=300"
              />
            </div>
          ) : (
            <div className="space-y-4">
              <PropertyListItem
                title="Modern Apartment in Downtown"
                address="123 Main St, Anytown, USA"
                price="$450,000"
                status="for-sale"
                beds={2}
                baths={2}
                sqft={1200}
                image="/placeholder.svg?height=80&width=120"
              />
              <PropertyListItem
                title="Luxury Condo with Ocean View"
                address="456 Ocean Ave, Beachtown, USA"
                price="$3,500/mo"
                status="for-rent"
                beds={3}
                baths={2}
                sqft={1800}
                image="/placeholder.svg?height=80&width=120"
              />
              <PropertyListItem
                title="Charming Suburban Home"
                address="789 Oak St, Suburbia, USA"
                price="$650,000"
                status="pending"
                beds={4}
                baths={3}
                sqft={2400}
                image="/placeholder.svg?height=80&width=120"
              />
              <PropertyListItem
                title="Downtown Loft"
                address="101 Urban Ave, Metropolis, USA"
                price="$525,000"
                status="for-sale"
                beds={1}
                baths={1}
                sqft={950}
                image="/placeholder.svg?height=80&width=120"
              />
              <PropertyListItem
                title="Family Home with Large Yard"
                address="202 Family Rd, Hometown, USA"
                price="$720,000"
                status="sold"
                beds={5}
                baths={3}
                sqft={3200}
                image="/placeholder.svg?height=80&width=120"
              />
              <PropertyListItem
                title="Waterfront Property"
                address="303 Lake View Dr, Lakeside, USA"
                price="$4,200/mo"
                status="for-rent"
                beds={3}
                baths={2}
                sqft={2100}
                image="/placeholder.svg?height=80&width=120"
              />
            </div>
          )}
        </TabsContent>
        <TabsContent value="for-sale" className="mt-4">
          {/* For Sale properties would go here */}
          <div className="text-center py-8 text-muted-foreground">
            Switch to the "All" tab to see example properties
          </div>
        </TabsContent>
        <TabsContent value="for-rent" className="mt-4">
          {/* For Rent properties would go here */}
          <div className="text-center py-8 text-muted-foreground">
            Switch to the "All" tab to see example properties
          </div>
        </TabsContent>
        <TabsContent value="sold" className="mt-4">
          {/* Sold properties would go here */}
          <div className="text-center py-8 text-muted-foreground">
            Switch to the "All" tab to see example properties
          </div>
        </TabsContent>
        <TabsContent value="pending" className="mt-4">
          {/* Pending properties would go here */}
          <div className="text-center py-8 text-muted-foreground">
            Switch to the "All" tab to see example properties
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface PropertyCardProps {
  title: string
  address: string
  price: string
  status: "for-sale" | "for-rent" | "sold" | "pending"
  beds: number
  baths: number
  sqft: number
  image: string
}

function PropertyCard({ title, address, price, status, beds, baths, sqft, image }: PropertyCardProps) {
  const statusColors = {
    "for-sale": "bg-green-100 text-green-800",
    "for-rent": "bg-blue-100 text-blue-800",
    sold: "bg-gray-100 text-gray-800",
    pending: "bg-yellow-100 text-yellow-800",
  }

  const statusText = {
    "for-sale": "For Sale",
    "for-rent": "For Rent",
    sold: "Sold",
    pending: "Pending",
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover" />
        <Badge className={`absolute top-2 right-2 ${statusColors[status]}`}>{statusText[status]}</Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center text-sm text-muted-foreground mt-1">
          <MapPin className="h-3.5 w-3.5 mr-1" />
          {address}
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="text-lg font-bold text-navy-900">{price}</div>
          <Button variant="outline" size="sm">
            Details
          </Button>
        </div>
        <div className="mt-4 flex justify-between text-sm">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            {beds} Beds
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            {baths} Baths
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            {sqft} sqft
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

interface PropertyListItemProps extends PropertyCardProps {}

function PropertyListItem({ title, address, price, status, beds, baths, sqft, image }: PropertyListItemProps) {
  const statusColors = {
    "for-sale": "bg-green-100 text-green-800",
    "for-rent": "bg-blue-100 text-blue-800",
    sold: "bg-gray-100 text-gray-800",
    pending: "bg-yellow-100 text-yellow-800",
  }

  const statusText = {
    "for-sale": "For Sale",
    "for-rent": "For Rent",
    sold: "Sold",
    pending: "Pending",
  }

  return (
    <div className="flex border rounded-lg overflow-hidden hover:bg-slate-50">
      <div className="w-32 h-24 flex-shrink-0">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 p-4">
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold">{title}</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              {address}
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-navy-900">{price}</div>
            <Badge className={statusColors[status]}>{statusText[status]}</Badge>
          </div>
        </div>
        <div className="mt-2 flex justify-between text-sm">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            {beds} Beds
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            {baths} Baths
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            {sqft} sqft
          </div>
          <Button variant="outline" size="sm">
            Details
          </Button>
        </div>
      </div>
    </div>
  )
}
