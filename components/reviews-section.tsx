"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ReviewsSection() {
  const [isPaused, setIsPaused] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/images/people/model-1.jpg",
      rating: 5,
      review:
        "Absolutely love my new Kings Mens pieces! The quality is exceptional and the fit is perfect. The premium cotton tee is so comfortable and the jeans have the perfect cut. Will definitely be ordering more!",
      product: "Premium Cotton Tee & Designer Slim Jeans",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/images/people/model-2.jpg",
      rating: 5,
      review:
        "The attention to detail in these clothes is remarkable. You can really feel the luxury in every thread. The customer service was also outstanding - they helped me find the perfect size.",
      product: "Luxury V-Neck Tee",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      avatar: "/images/people/model-3.jpg",
      rating: 5,
      review:
        "I've been searching for the perfect jeans for years, and I finally found them at Kings Mens. The fit is incredible and they're so well-made. Worth every penny!",
      product: "High-Waist Skinny Jeans",
      date: "3 weeks ago",
    },
    {
      id: 4,
      name: "David Thompson",
      avatar: "/images/people/model-4.jpg",
      rating: 4,
      review:
        "Great quality clothing with fast shipping. The packaging was beautiful too - felt like opening a luxury gift. The only minor issue was sizing ran a bit large, but customer service quickly helped with an exchange.",
      product: "Classic Straight Jeans",
      date: "1 week ago",
    },
    {
      id: 5,
      name: "Lisa Park",
      avatar: "/images/people/model-5.jpg",
      rating: 5,
      review:
        "Kings Mens has become my go-to brand for premium basics. The quality is consistent and the designs are timeless. I love that they're also committed to sustainable practices.",
      product: "Organic Cotton Crew Tee",
      date: "2 months ago",
    },
    {
      id: 6,
      name: "James Wilson",
      avatar: "/images/people/model-6.jpg",
      rating: 5,
      review:
        "Exceptional quality and style. These pieces have become staples in my wardrobe. The investment is worth it for clothing that lasts and looks great wash after wash.",
      product: "Vintage Wash Tee",
      date: "1 month ago",
    },
    {
      id: 7,
      name: "Anna Martinez",
      avatar: "/images/people/model-7.jpg",
      rating: 5,
      review:
        "The fabric quality is outstanding and the designs are so versatile. I can dress these pieces up or down for any occasion. Customer service is also top-notch!",
      product: "Distressed Denim Jeans",
      date: "5 days ago",
    },
    {
      id: 8,
      name: "Robert Kim",
      avatar: "/images/people/model-8.jpg",
      rating: 4,
      review:
        "Really impressed with the sustainable approach and ethical manufacturing. The clothes feel premium and the fit is consistent across different styles.",
      product: "Organic Cotton Crew Tee",
      date: "3 weeks ago",
    },
  ]

  // Auto-scroll functionality with smooth animation
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container || isPaused) return

    let animationId: number
    let startTime: number | null = null
    const scrollSpeed = 0.5 // pixels per frame

    const smoothScroll = (timestamp: number) => {
      if (startTime === null) startTime = timestamp

      const currentScrollLeft = container.scrollLeft
      const maxScrollLeft = container.scrollWidth - container.clientWidth

      // Reset to beginning when reaching the end
      if (currentScrollLeft >= maxScrollLeft) {
        container.scrollLeft = 0
        startTime = timestamp
      } else {
        container.scrollLeft += scrollSpeed
      }

      animationId = requestAnimationFrame(smoothScroll)
    }

    animationId = requestAnimationFrame(smoothScroll)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isPaused])

  // Check scroll position for navigation buttons
  const checkScrollPosition = () => {
    const container = scrollContainerRef.current
    if (!container) return

    setCanScrollLeft(container.scrollLeft > 0)
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth)
  }

  // Manual scroll functions
  const scrollLeft = () => {
    const container = scrollContainerRef.current
    if (!container) return
    container.scrollBy({ left: -320, behavior: "smooth" })
  }

  const scrollRight = () => {
    const container = scrollContainerRef.current
    if (!container) return
    container.scrollBy({ left: 320, behavior: "smooth" })
  }

  return (
    <section id="reviews" className="py-8 sm:py-12 lg:py-16 xl:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-amber-600">Customers Say</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile */}
          <Button
            variant="outline"
            size="icon"
            className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg border-gray-200 hidden sm:flex ${
              !canScrollLeft ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg border-gray-200 hidden sm:flex ${
              !canScrollRight ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="scroll-container flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 relative"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitScrollbar: { display: "none" },
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onScroll={checkScrollPosition}
          >
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="review-card flex-shrink-0 w-72 sm:w-80 lg:w-96 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-4 sm:p-6 h-full flex flex-col">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-amber-600 mb-2" />
                  </div>

                  <div className="star-rating flex items-center mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`star h-3 w-3 sm:h-4 sm:w-4 transition-all duration-200 ${i < review.rating ? "text-amber-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed flex-grow">
                    "{review.review}"
                  </p>

                  <div className="border-t pt-3 sm:pt-4 mt-auto">
                    <div className="flex items-center mb-2">
                      <Avatar className="h-10 w-10 sm:h-12 sm:w-12 mr-3 sm:mr-4">
                        <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                        <AvatarFallback className="text-xs sm:text-sm">
                          {review.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{review.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-600">{review.date}</p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-amber-600 font-medium truncate">
                      Purchased: {review.product}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Overall Rating Summary */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 fill-current" />
                ))}
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-900 ml-3">4.8</span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-2">Based on 1,247+ verified reviews</p>
            <p className="text-xs sm:text-sm text-gray-500">Join thousands of satisfied customers who trust Kings Mens</p>
          </div>
        </div>

        {/* Mobile scroll indicator */}
        <div className="flex justify-center mt-4 sm:hidden">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-gray-300 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  /* Smooth scroll animation */
  .scrollbar-hide {
    scroll-behavior: smooth;
  }
  
  /* Card entrance animation */
  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  /* Card hover animation */
  @keyframes cardFloat {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }
  
  /* Pulse animation for rating stars */
  @keyframes starPulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
  
  /* Apply animations */
  .review-card {
    animation: slideInFromRight 0.6s ease-out;
  }
  
  .review-card:hover {
    animation: cardFloat 2s ease-in-out infinite;
  }
  
  .star-rating:hover .star {
    animation: starPulse 0.3s ease-in-out;
  }
  
  /* Gradient overlay for smooth infinite scroll effect */
  .scroll-container::before,
  .scroll-container::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 40px;
    z-index: 2;
    pointer-events: none;
  }
  
  .scroll-container::before {
    left: 0;
    background: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0));
  }
  
  .scroll-container::after {
    right: 0;
    background: linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0));
  }
  
  /* Smooth transition for pause/resume */
  .scroll-container {
    transition: scroll-behavior 0.3s ease;
  }
`}</style>
    </section>
  )
}
