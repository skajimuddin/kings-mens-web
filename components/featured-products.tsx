import { ProductCard } from "@/components/product-card"

export function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Cotton Tee",
      price: 89,
      originalPrice: 120,
      image: "/images/products/tshirt-1.jpg",
      category: "T-Shirts",
      isNew: true,
      rating: 4.9,
      reviews: 124,
    },
    {
      id: 2,
      name: "Designer Slim Jeans",
      price: 199,
      originalPrice: 250,
      image: "/images/products/jeans-1.jpg",
      category: "Jeans",
      isNew: false,
      rating: 4.8,
      reviews: 89,
    },
    {
      id: 3,
      name: "Luxury V-Neck Tee",
      price: 95,
      originalPrice: null,
      image: "/images/products/tshirt-2.jpg",
      category: "T-Shirts",
      isNew: true,
      rating: 4.9,
      reviews: 156,
    },
    {
      id: 4,
      name: "Classic Straight Jeans",
      price: 179,
      originalPrice: 220,
      image: "/images/products/jeans-2.jpg",
      category: "Jeans",
      isNew: false,
      rating: 4.7,
      reviews: 203,
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-amber-600">Collection</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium pieces that define luxury fashion
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
