"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturedProducts } from "@/components/featured-products"
import { AllProducts } from "@/components/all-products"
import { ReviewsSection } from "@/components/reviews-section"
import { Footer } from "@/components/footer"

export function FashionWebsite() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <AllProducts />
      <ReviewsSection />
      <Footer />
    </div>
  )
}
