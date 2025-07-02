"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, DollarSign, Shield, Heart } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Best Price Guarantee",
    subtitle: "Always the lowest price",
    description:
      "We continuously monitor prices across thousands of retailers to ensure you always get the best deal. If you find a lower price elsewhere, we'll match it.",
    icon: DollarSign,
    color: "from-green-500 to-emerald-600",
    features: [
      "Real-time price monitoring",
      "Price match guarantee",
      "Instant savings alerts",
      "Historical price tracking",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Quality Promise",
    subtitle: "Trusted products only",
    description:
      "Every product and retailer on our platform is carefully vetted. We partner only with reputable sellers to ensure you receive authentic, high-quality products.",
    icon: Shield,
    color: "from-blue-500 to-indigo-600",
    features: [
      "Verified seller network",
      "Authentic product guarantee",
      "Customer review system",
      "Quality assurance checks",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Social Impact",
    subtitle: "Shopping for a better world",
    description:
      "Every purchase through PakaBazar contributes to environmental and social causes. We donate a portion of our revenue to sustainability initiatives and local communities.",
    icon: Heart,
    color: "from-purple-500 to-pink-600",
    features: [
      "Carbon offset programs",
      "Community support initiatives",
      "Sustainable product highlighting",
      "Charity partnership network",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function ValuePropositionCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const currentSlideData = slides[currentSlide]
  const IconComponent = currentSlideData.icon

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PakaBazar?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're more than just a price comparison platform. We're your partner in smart, responsible shopping.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel Card */}
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 min-h-[500px]">
                {/* Content Side */}
                <div
                  className={`bg-gradient-to-br ${currentSlideData.color} p-12 text-white flex flex-col justify-center`}
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{currentSlideData.title}</h3>
                    <p className="text-lg opacity-90 mb-6">{currentSlideData.subtitle}</p>
                    <p className="text-base opacity-80 leading-relaxed mb-8">{currentSlideData.description}</p>
                  </div>

                  <div className="space-y-3">
                    {currentSlideData.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div className="relative bg-gray-100 flex items-center justify-center p-8">
                  <img
                    src={currentSlideData.image || "/placeholder.svg"}
                    alt={currentSlideData.title}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-green-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 max-w-md mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-green-600 h-1 rounded-full transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Start Saving Today
          </Button>
        </div>
      </div>
    </section>
  )
}
