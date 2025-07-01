import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, Clock, User, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "10 Smart Shopping Tips to Save Money on Groceries",
    excerpt: "Discover proven strategies to reduce your grocery bill without compromising on quality or nutrition.",
    content: "Learn how to meal plan effectively, use coupons strategically, and find the best deals...",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Shopping Tips",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
    tags: ["groceries", "budgeting", "savings"],
  },
  {
    id: 2,
    title: "The Rise of Sustainable Packaging in E-commerce",
    excerpt: "How eco-friendly packaging is changing the online shopping landscape and what it means for consumers.",
    content: "Explore the latest trends in sustainable packaging and how brands are adapting...",
    author: "Emily Rodriguez",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Sustainability",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["sustainability", "packaging", "environment"],
  },
  {
    id: 3,
    title: "Price Comparison Tools: A Complete Guide",
    excerpt: "Everything you need to know about using price comparison platforms to find the best deals online.",
    content: "Master the art of price comparison with our comprehensive guide...",
    author: "Michael Chen",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Technology",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["price comparison", "technology", "shopping"],
  },
  {
    id: 4,
    title: "Building a Conscious Consumer Mindset",
    excerpt: "How to make purchasing decisions that align with your values while still getting great deals.",
    content: "Develop a mindful approach to shopping that benefits both you and the planet...",
    author: "Sarah Johnson",
    date: "2024-01-08",
    readTime: "4 min read",
    category: "Lifestyle",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["conscious shopping", "mindfulness", "values"],
  },
  {
    id: 5,
    title: "The Future of Online Shopping: Trends to Watch",
    excerpt: "Explore emerging trends that will shape the e-commerce landscape in the coming years.",
    content: "From AI-powered recommendations to virtual try-ons, discover what's next...",
    author: "Michael Chen",
    date: "2024-01-05",
    readTime: "8 min read",
    category: "Technology",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["future", "ecommerce", "trends"],
  },
  {
    id: 6,
    title: "Seasonal Shopping: When to Buy What",
    excerpt: "A comprehensive guide to timing your purchases for maximum savings throughout the year.",
    content: "Learn the best times to buy everything from electronics to clothing...",
    author: "Emily Rodriguez",
    date: "2024-01-03",
    readTime: "6 min read",
    category: "Shopping Tips",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    tags: ["seasonal", "timing", "deals"],
  },
]

const categories = ["All", "Shopping Tips", "Sustainability", "Technology", "Lifestyle"]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-green-100 text-green-800">PakaBazar Blog</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Smart Shopping Insights</h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover tips, trends, and strategies to shop smarter, save more, and make conscious purchasing
                decisions.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input placeholder="Search articles..." className="pl-10 pr-4 h-12" />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-2 mb-8">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
                </div>

                <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative">
                      <img
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-green-600">Featured</Badge>
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <Badge variant="outline" className="w-fit mb-4">
                        {featuredPost.category}
                      </Badge>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                      <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>

                      <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </div>
                      </div>

                      <Link href={`/blog/${featuredPost.id}`}>
                        <Button className="bg-green-600 hover:bg-green-700 group">
                          Read Full Article
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Filters */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Latest Articles</h2>

                <div className="flex gap-4">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select defaultValue="newest">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow group">
                    <div className="relative">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-3 left-3" variant="outline">
                        {post.category}
                      </Badge>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</div>
                        <Link href={`/blog/${post.id}`}>
                          <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button size="lg" variant="outline">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-green-600">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-green-100 mb-8 text-lg">
                Get the latest shopping tips, deals, and insights delivered to your inbox weekly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email address" className="bg-white border-0 flex-1" />
                <Button className="bg-white text-green-600 hover:bg-gray-100">Subscribe</Button>
              </div>

              <p className="text-green-100 text-sm mt-4">Join 10,000+ smart shoppers. Unsubscribe anytime.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
