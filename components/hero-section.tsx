import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/banners/fashion-hero-1.jpg"
          alt="Fashion Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-[#263954] px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="h-6 w-6 text-[#f7c981] mr-2" />
          <span className="text-[#f7c981] font-medium tracking-wide uppercase text-sm">
            Luxury Fashion Collection
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
          Elevate Your
          <span className="block text-[#f7c981]">Style Statement</span>
        </h1>

        <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover our premium collection of handcrafted t-shirts and designer
          jeans. Where luxury meets comfort in every thread.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-[#f7c981] hover:bg-[#e5b76d] text-[#263954] font-medium px-8 py-3 text-lg"
          >
            Shop Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-primary hover:bg-white hover:text-[#263954] px-8 py-3 text-lg"
          >
            View Lookbook
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#f7c981] animate-bounce">
        <div className="w-6 h-10 border-2 border-[#f7c981] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
