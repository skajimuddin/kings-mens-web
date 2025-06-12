"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ShoppingCart, Star, Eye } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  originalPrice: number | null
  image: string
  category: string
  isNew: boolean
  rating: number
  reviews: number
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Card
      className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-[#f7c981] hover:bg-[#e5b76d] text-[#263954] font-medium">
              NEW
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-red-500 hover:bg-red-600 text-white">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-4 right-4 bg-white/90 hover:bg-white transition-all duration-300 ${
            isLiked ? "text-red-500" : "text-gray-600"
          }`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
        </Button>

        {/* Quick Actions */}
        <div
          className={`absolute inset-x-4 bottom-4 flex gap-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button
            size="sm"
            className="flex-1 bg-[#f7c981] hover:bg-[#e5b76d] text-[#263954] font-medium"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-white/90 hover:bg-white border-[#f7c981] text-[#263954]"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="mb-2">
          <span className="text-sm text-[#f7c981] font-medium">
            {product.category}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-[#263954] mb-2 group-hover:text-[#f7c981] transition-colors">
          {product.name}
        </h3>

        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? "text-[#f7c981] fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-[#263954] ml-2">
            {product.rating} ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#263954]">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-[#f7c981] text-[#263954] hover:bg-[#f7c981] hover:text-[#263954]"
          >
            Buy Now
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
