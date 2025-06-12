import { Award, Truck, Shield, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 flex justify-center">
          <img
            src="/logo-05.svg"
            alt="Kings Mens Logo"
            className="h-16 w-auto logo-primary"
          />
        </div>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#263954] mb-4">
            Crafted for the{" "}
            <span className="text-[#f7c981]">Extraordinary</span>
          </h2>
          <p className="text-lg text-[#263954] max-w-3xl mx-auto leading-relaxed">
            Kings Mens represents the pinnacle of fashion excellence. Each piece
            in our collection is meticulously crafted using the finest materials
            and innovative techniques, ensuring unparalleled quality and
            timeless style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
              <Award className="h-8 w-8 text-[#f7c981]" />
            </div>
            <h3 className="text-xl font-semibold text-[#263954] mb-2">
              Premium Quality
            </h3>
            <p className="text-[#263954]">
              Handpicked materials and expert craftsmanship in every piece
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
              <Truck className="h-8 w-8 text-[#f7c981]" />
            </div>
            <h3 className="text-xl font-semibold text-[#263954] mb-2">
              Fast Delivery
            </h3>
            <p className="text-[#263954]">
              Express shipping worldwide with premium packaging
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
              <Shield className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Lifetime Warranty
            </h3>
            <p className="text-gray-600">
              Confidence in quality with comprehensive warranty coverage
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
              <Heart className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Sustainable
            </h3>
            <p className="text-gray-600">
              Ethically sourced materials and eco-friendly production
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
