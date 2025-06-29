import { Button } from "@/components/ui/button"
import { TrendingUp, Shield, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Find the Best Prices on Everything</h1>
          <p className="text-xl text-gray-600 mb-8">
            Compare prices from thousands of stores and save money on your favorite products. Get real-time price alerts
            and never miss a deal again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Shop Now
            </Button>
            <Button size="lg" variant="outline">
              Our Mission
            </Button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-time Prices</h3>
              <p className="text-gray-600">Get up-to-date pricing from all major retailers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Trusted Reviews</h3>
              <p className="text-gray-600">Read verified reviews from real customers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Price Alerts</h3>
              <p className="text-gray-600">Get notified when prices drop on items you want</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
