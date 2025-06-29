import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Shield, Heart, Users, Target, Lightbulb, Award, Globe } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-green-100 text-green-800">About GreenPrice</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Revolutionizing How You Shop Online</h1>
              <p className="text-xl text-gray-600 mb-8">
                We're on a mission to make smart shopping accessible to everyone while creating positive impact for our
                planet and communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Start Shopping
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Our Impact
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At GreenPrice, we believe everyone deserves access to the best prices without compromising on quality
                  or values. We're building a platform that not only saves you money but also promotes sustainable
                  shopping practices.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  By connecting conscious consumers with responsible retailers, we're creating a marketplace that
                  benefits people, planet, and profit in equal measure.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
                    <div className="text-gray-600">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">$2M+</div>
                    <div className="text-gray-600">Money Saved</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Team working together"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do and shape how we build products that matter.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                  <p className="text-gray-600">
                    We provide clear, honest pricing information with no hidden fees or misleading deals.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Trust</h3>
                  <p className="text-gray-600">
                    We partner only with verified retailers and provide authentic customer reviews.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                  <p className="text-gray-600">
                    We promote eco-friendly products and support brands making positive environmental impact.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Community</h3>
                  <p className="text-gray-600">
                    We believe in building a community of conscious consumers who support each other.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
                <p className="text-gray-600">
                  From a simple idea to a platform serving thousands of customers worldwide.
                </p>
              </div>

              <div className="space-y-12">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">The Idea (2023)</h3>
                    <p className="text-gray-600">
                      Founded by a team of passionate entrepreneurs who were frustrated with the complexity of finding
                      the best deals online while shopping responsibly. We saw an opportunity to simplify price
                      comparison while promoting sustainable consumption.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Building the Platform (2024)</h3>
                    <p className="text-gray-600">
                      We spent months researching user needs, partnering with ethical retailers, and building a platform
                      that prioritizes both savings and sustainability. Our beta launch exceeded all expectations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Growing Impact (Present)</h3>
                    <p className="text-gray-600">
                      Today, we're proud to serve over 50,000 customers, helping them save millions while supporting
                      sustainable brands. We're just getting started on our mission to transform online shopping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-gray-600">
                The passionate people behind GreenPrice who are working to make shopping better for everyone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="Sarah Johnson"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
                  <p className="text-green-600 mb-3">CEO & Co-Founder</p>
                  <p className="text-gray-600 text-sm">
                    Former e-commerce executive with 10+ years experience building consumer platforms.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="Michael Chen"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
                  <p className="text-blue-600 mb-3">CTO & Co-Founder</p>
                  <p className="text-gray-600 text-sm">
                    Tech leader passionate about using technology to create positive social impact.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="Emily Rodriguez"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">Emily Rodriguez</h3>
                  <p className="text-purple-600 mb-3">Head of Sustainability</p>
                  <p className="text-gray-600 text-sm">
                    Environmental advocate ensuring our platform promotes responsible consumption.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Globe className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
              <p className="text-green-100 text-lg mb-8">
                Ready to shop smarter and make a positive impact? Join thousands of conscious consumers who are already
                saving money while supporting sustainable brands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                    Start Shopping Now
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
