"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"
import { useCart } from "@/lib/cart-context"

const deals = [
  {
    id: 1,
    title: "Oreo Original Sandwich Cookies - 154g",
    originalPrice: 599,
    currentPrice: 419,
    discount: 30,
    rating: 4.8,
    reviews: 2341,
    store: "FoodMart",
    timeLeft: "2h 15m",
    image: "/images/oreo-original.png",
  },
  {
    id: 2,
    title: "Coca-Cola Classic - 12 Pack Cans",
    originalPrice: 839,
    currentPrice: 719,
    discount: 14,
    rating: 4.9,
    reviews: 1876,
    store: "BeverageWorld",
    timeLeft: "5h 42m",
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=400&fit=crop&crop=center",
  },
  {
    id: 3,
    title: "Lay's Classic Potato Chips - Family Size",
    originalPrice: 659,
    currentPrice: 479,
    discount: 27,
    rating: 4.7,
    reviews: 3421,
    store: "SnackHub",
    timeLeft: "1h 33m",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=400&fit=crop&crop=center",
  },
  {
    id: 4,
    title: "Stouffer's Lasagna with Meat Sauce - Frozen Meal",
    originalPrice: 1079,
    currentPrice: 839,
    discount: 22,
    rating: 4.6,
    reviews: 987,
    store: "FrozenFoods",
    timeLeft: "3h 28m",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=400&fit=crop&crop=center",
  },
]

export function FeaturedDeals() {
  const { dispatch } = useCart()

  const addToCart = (deal: (typeof deals)[0]) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: deal.id,
        name: deal.title,
        price: deal.currentPrice,
        originalPrice: deal.originalPrice,
        image: deal.image,
        store: deal.store,
      },
    })
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Deals</h2>
            <p className="text-gray-600">Limited time offers you don't want to miss</p>
          </div>
          <Button variant="outline">View All Deals</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <Card key={deal.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={deal.image || "/placeholder.svg"}
                    alt={deal.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-2 left-2 bg-red-500">-{deal.discount}%</Badge>
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded px-2 py-1 text-xs font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {deal.timeLeft}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{deal.title}</h3>

                  <div className="mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-600">৳{deal.currentPrice}</span>
                      <span className="text-sm text-gray-500 line-through">৳{deal.originalPrice}</span>
                    </div>
                  </div>

                  <Button className="w-full" size="sm" onClick={() => addToCart(deal)}>
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
