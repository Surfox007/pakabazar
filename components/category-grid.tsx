import { Card, CardContent } from "@/components/ui/card"

const categories = [
  { name: "Snacks", image: "/placeholder.svg?height=80&width=80", color: "bg-blue-100 text-blue-600" },
  { name: "Meal Solutions", image: "/placeholder.svg?height=80&width=80", color: "bg-purple-100 text-purple-600" },
  { name: "Breakfast", image: "/placeholder.svg?height=80&width=80", color: "bg-pink-100 text-pink-600" },
  { name: "Beverage", image: "/placeholder.svg?height=80&width=80", color: "bg-green-100 text-green-600" },
  { name: "Beauty", image: "/placeholder.svg?height=80&width=80", color: "bg-red-100 text-red-600" },
  { name: "Lifestyle", image: "/placeholder.svg?height=80&width=80", color: "bg-indigo-100 text-indigo-600" },
  { name: "Wellness", image: "/placeholder.svg?height=80&width=80", color: "bg-yellow-100 text-yellow-600" },
  { name: "Household", image: "/placeholder.svg?height=80&width=80", color: "bg-orange-100 text-orange-600" },
]

export function CategoryGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600">Discover the best deals across all categories</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => {
            return (
              <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-lg overflow-hidden mx-auto mb-3 bg-gray-100">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-sm">{category.name}</h3>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
