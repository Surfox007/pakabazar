"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, TrendingUp } from "lucide-react"
import { useCart } from "@/lib/cart-context"

const products = [
  {
    id: 1,
    name: "Pringles Original Potato Crisps - 5.2oz",
    category: "Snacks",
    rating: 4.8,
    reviews: 15420,
    lowestPrice: 359,
    stores: 12,
    priceChange: -5,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=400&fit=crop&crop=center",
    trending: true,
  },
  {
    id: 2,
    name: "Pepsi Cola - 6 Pack Bottles",
    category: "Beverages",
    rating: 4.6,
    reviews: 8934,
    lowestPrice: 539,
    stores: 8,
    priceChange: 12,
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&h=400&fit=crop&crop=center",
    trending: false,
  },
  {
    id: 3,
    name: "Kellogg's Corn Flakes Cereal - 18oz",
    category: "Breakfast",
    rating: 4.7,
    reviews: 23156,
    lowestPrice: 455,
    stores: 15,
    priceChange: -8,
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop&crop=center",
    trending: true,
  },
  {
    id: 4,
    name: "Doritos Nacho Cheese Tortilla Chips",
    category: "Snacks",
    rating: 4.5,
    reviews: 5672,
    lowestPrice: 479,
    stores: 9,
    priceChange: -15,
    image: "https://images.unsplash.com/photo-1613919113640-25732ec5e61f?w=400&h=400&fit=crop&crop=center",
    trending: false,
  },
  {
    id: 5,
    name: "Campbell's Tomato Soup - 10.75oz Can",
    category: "Meal Solutions",
    rating: 4.9,
    reviews: 3421,
    lowestPrice: 179,
    stores: 6,
    priceChange: -25,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop&crop=center",
    trending: true,
  },
  {
    id: 6,
    name: "Ben & Jerry's Chocolate Chip Cookie Dough",
    category: "Frozen",
    rating: 4.8,
    reviews: 12890,
    lowestPrice: 719,
    stores: 11,
    priceChange: 0,
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=400&fit=crop&crop=center",
    trending: false,
  },
]

export function ProductGrid() {
  const [sortBy, setSortBy] = useState("popular")
  const [category, setCategory] = useState("all")
  const { dispatch } = useCart()

  const addToCart = (product: (typeof products)[0]) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.lowestPrice,
        image: product.image,
      },
    })
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Products</h2>
            <p className="text-gray-600">Compare prices and find the best deals</p>
          </div>

          <div className="flex gap-4 mt-4 md:mt-0">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="snacks">Snacks</SelectItem>
                <SelectItem value="beverages">Beverages</SelectItem>
                <SelectItem value="breakfast">Breakfast</SelectItem>
                <SelectItem value="meal-solutions">Meal Solutions</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {product.trending && (
                    <Badge className="absolute top-2 left-2 bg-orange-500 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1"></div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-2xl font-bold text-green-600">৳{product.lowestPrice}</span>
                      <div
                        className={`flex items-center gap-1 text-sm ${
                          product.priceChange < 0
                            ? "text-green-600"
                            : product.priceChange > 0
                              ? "text-red-600"
                              : "text-gray-500"
                        }`}
                      >
                        {product.priceChange !== 0 && (
                          <>
                            {product.priceChange < 0 ? "↓" : "↑"}
                            {Math.abs(product.priceChange)}%
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-transparent" variant="outline" onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  )
}
