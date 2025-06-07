"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AllProducts() {
  const [showAll, setShowAll] = useState(false)

  const allProducts = [
    {
      id: 5,
      name: "Organic Cotton Crew Tee",
      price: 75,
      originalPrice: null,
      image: "/images/products/tshirt-1.jpg",
      category: "T-Shirts",
      isNew: false,
      rating: 4.6,
      reviews: 78,
    },
    {
      id: 6,
      name: "Distressed Denim Jeans",
      price: 159,
      originalPrice: 200,
      image: "/images/products/jeans-1.jpg",
      category: "Jeans",
      isNew: true,
      rating: 4.8,
      reviews: 92,
    },
    {
      id: 7,
      name: "Vintage Wash Tee",
      price: 85,
      originalPrice: null,
      image: "/images/products/tshirt-2.jpg",
      category: "T-Shirts",
      isNew: false,
      rating: 4.7,
      reviews: 134,
    },
    {
      id: 8,
      name: "High-Waist Skinny Jeans",
      price: 189,
      originalPrice: 230,
      image: "/images/products/jeans-2.jpg",
      category: "Jeans",
      isNew: true,
      rating: 4.9,
      reviews: 167,
    },
    {
      id: 9,
      name: "Oversized Graphic Tee",
      price: 99,
      originalPrice: null,
      image: "/images/products/tshirt-1.jpg",
      category: "T-Shirts",
      isNew: false,
      rating: 4.5,
      reviews: 89,
    },
    {
      id: 10,
      name: "Raw Hem Straight Jeans",
      price: 169,
      originalPrice: 210,
      image: "/images/products/jeans-1.jpg",
      category: "Jeans",
      isNew: false,
      rating: 4.6,
      reviews: 112,
    },
    {
      id: 11,
      name: "Luxury Pocket Tee",
      price: 79,
      originalPrice: null,
      image: "/images/products/tshirt-2.jpg",
      category: "T-Shirts",
      isNew: true,
      rating: 4.8,
      reviews: 95,
    },
    {
      id: 12,
      name: "Wide Leg Denim",
      price: 199,
      originalPrice: 250,
      image: "/images/products/jeans-2.jpg",
      category: "Jeans",
      isNew: true,
      rating: 4.7,
      reviews: 143,
    },
  ]

  const tshirts = allProducts.filter((product) => product.category === "T-Shirts")
  const jeans = allProducts.filter((product) => product.category === "Jeans")

  const displayedProducts = showAll ? allProducts : allProducts.slice(0, 6)

  return (
    <section id="products" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Complete <span className="text-amber-600">Collection</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our full range of premium fashion essentials
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="tshirts">T-Shirts</TabsTrigger>
            <TabsTrigger value="jeans">Jeans</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {!showAll && (
              <div className="text-center mt-12">
                <Button
                  onClick={() => setShowAll(true)}
                  variant="outline"
                  size="lg"
                  className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                >
                  View All Products
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="tshirts">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {tshirts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="jeans">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {jeans.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
