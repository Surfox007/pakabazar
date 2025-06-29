"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Search, Filter, Heart, TrendingUp, Star, Grid, List, X } from "lucide-react"
import { useCart } from "@/lib/cart-context"

const allProducts = [
  {
    id: 1,
    name: "Oreo Original Sandwich Cookies - 154g",
    category: "Snacks",
    brand: "Oreo",
    rating: 4.8,
    reviews: 2341,
    price: 419,
    originalPrice: 599,
    discount: 30,
    image: "/images/oreo-original.png",
    inStock: true,
    trending: true,
  },
  {
    id: 2,
    name: "Pringles Original Potato Crisps - 5.2oz",
    category: "Snacks",
    brand: "Pringles",
    rating: 4.8,
    reviews: 15420,
    price: 359,
    originalPrice: 399,
    discount: 10,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=400&fit=crop&crop=center",
    inStock: true,
    trending: true,
  },
  {
    id: 3,
    name: "Coca-Cola Classic - 12 Pack Cans",
    category: "Beverages",
    brand: "Coca-Cola",
    rating: 4.9,
    reviews: 1876,
    price: 719,
    originalPrice: 839,
    discount: 14,
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=400&fit=crop&crop=center",
    inStock: true,
    trending: false,
  },
  {
    id: 4,
    name: "Pepsi Cola - 6 Pack Bottles",
    category: "Beverages",
    brand: "Pepsi",
    rating: 4.6,
    reviews: 8934,
    price: 539,
    originalPrice: 599,
    discount: 10,
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&h=400&fit=crop&crop=center",
    inStock: true,
    trending: false,
  },
  {
    id: 5,
    name: "Kellogg's Corn Flakes Cereal - 18oz",
    category: "Breakfast",
    brand: "Kellogg's",
    rating: 4.7,
    reviews: 23156,
    price: 455,
    originalPrice: 499,
    discount: 9,
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop&crop=center",
    inStock: true,
    trending: true,
  },
  {
    id: 6,
    name: "Lay's Classic Potato Chips - Family Size",
    category: "Snacks",
    brand: "Lay's",
    rating: 4.7,
    reviews: 3421,
    price: 479,
    originalPrice: 659,
    discount: 27,
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=400&fit=crop&crop=center",
    inStock: true,
    trending: false,
  },
  {
    id: 7,
    name: "Doritos Nacho Cheese Tortilla Chips",
    category: "Snacks",
    brand: "Doritos",
    rating: 4.5,
    reviews: 5672,
    price: 479,
    originalPrice: 529,
    discount: 9,
    image: "https://images.unsplash.com/photo-1613919113640-25732ec5e61f?w=400&h=400&fit=crop&crop=center",
    inStock: true,
    trending: false,
  },
  {
    id: 8,
    name: "Campbell's Tomato Soup - 10.75oz Can",
    category: "Meal Solutions",
    brand: "Campbell's",
    rating: 4.9,
    reviews: 3421,
    price: 179,
    originalPrice: 239,
    discount: 25,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop&crop=center",
    inStock: true,
    trending: true,
  },
  {
    id: 9,
    name: "Ben & Jerry's Chocolate Chip Cookie Dough",
    category: "Frozen",
    brand: "Ben & Jerry's",
    rating: 4.8,
    reviews: 12890,
    price: 719,
    originalPrice: 799,
    discount: 10,
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=400&fit=crop&crop=center",
    inStock: true,
    trending: false,
  },
  {
    id: 10,
    name: "Stouffer's Lasagna with Meat Sauce - Frozen Meal",
    category: "Meal Solutions",
    brand: "Stouffer's",
    rating: 4.6,
    reviews: 987,
    price: 839,
    originalPrice: 1079,
    discount: 22,
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=400&fit=crop&crop=center",
    inStock: true,
    trending: false,
  },
  {
    id: 11,
    name: "Nestle KitKat Chocolate Bar - 4 Finger",
    category: "Snacks",
    brand: "Nestle",
    rating: 4.6,
    reviews: 8765,
    price: 89,
    originalPrice: 99,
    discount: 10,
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=400&fit=crop&crop=center",
    inStock: true,
    trending: false,
  },
  {
    id: 12,
    name: "Maggi 2-Minute Noodles - Masala",
    category: "Meal Solutions",
    brand: "Maggi",
    rating: 4.4,
    reviews: 15432,
    price: 25,
    originalPrice: 30,
    discount: 17,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=400&fit=crop&crop=center",
    inStock: true,
    trending: true,
  },
]

const categories = ["All", "Snacks", "Beverages", "Breakfast", "Meal Solutions", "Frozen"]
const brands = [
  "All",
  "Oreo",
  "Pringles",
  "Coca-Cola",
  "Pepsi",
  "Kellogg's",
  "Lay's",
  "Doritos",
  "Campbell's",
  "Ben & Jerry's",
  "Stouffer's",
  "Nestle",
  "Maggi",
]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [minRating, setMinRating] = useState(0)
  const [sortBy, setSortBy] = useState("popular")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const { dispatch } = useCart()

  const filteredProducts = useMemo(() => {
    const filtered = allProducts.filter((product) => {
      // Search filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false
      }

      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false
      }

      // Brand filter
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false
      }

      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false
      }

      // Rating filter
      if (product.rating < minRating) {
        return false
      }

      return true
    })

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "discount":
        filtered.sort((a, b) => b.discount - a.discount)
        break
      case "popular":
      default:
        filtered.sort((a, b) => b.reviews - a.reviews)
        break
    }

    return filtered
  }, [searchQuery, selectedCategories, selectedBrands, priceRange, minRating, sortBy])

  const addToCart = (product: (typeof allProducts)[0]) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
      },
    })
  }

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setPriceRange([0, 1000])
    setMinRating(0)
    setSearchQuery("")
  }

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <Label className="text-base font-semibold mb-3 block">Search Products</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <Separator />

      {/* Categories */}
      <div>
        <Label className="text-base font-semibold mb-3 block">Categories</Label>
        <div className="space-y-2">
          {categories.slice(1).map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <Label htmlFor={category} className="text-sm cursor-pointer">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Brands */}
      <div>
        <Label className="text-base font-semibold mb-3 block">Brands</Label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {brands.slice(1).map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={brand}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => toggleBrand(brand)}
              />
              <Label htmlFor={brand} className="text-sm cursor-pointer">
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div>
        <Label className="text-base font-semibold mb-3 block">
          Price Range: ৳{priceRange[0]} - ৳{priceRange[1]}
        </Label>
        <Slider value={priceRange} onValueChange={setPriceRange} max={1000} min={0} step={10} className="w-full" />
      </div>

      <Separator />

      {/* Rating */}
      <div>
        <Label className="text-base font-semibold mb-3 block">Minimum Rating</Label>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox
                id={`rating-${rating}`}
                checked={minRating === rating}
                onCheckedChange={() => setMinRating(minRating === rating ? 0 : rating)}
              />
              <Label htmlFor={`rating-${rating}`} className="flex items-center gap-1 text-sm cursor-pointer">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span>& up</span>
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Clear Filters */}
      <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
        Clear All Filters
      </Button>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
          <p className="text-gray-600">Discover and compare prices on thousands of products</p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear All
                  </Button>
                </div>
                <FilterSidebar />
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Toggle & Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <span className="text-sm text-gray-600">{filteredProducts.length} products found</span>
              </div>

              <div className="flex items-center gap-4">
                {/* View Mode Toggle */}
                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>

                {/* Sort Dropdown */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="discount">Best Discount</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Mobile Filter Panel */}
            {showFilters && (
              <Card className="lg:hidden mb-6">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <FilterSidebar />
                </CardContent>
              </Card>
            )}

            {/* Active Filters */}
            {(selectedCategories.length > 0 || selectedBrands.length > 0 || minRating > 0) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategories.map((category) => (
                  <Badge
                    key={category}
                    variant="secondary"
                    className="cursor-pointer"
                    onClick={() => toggleCategory(category)}
                  >
                    {category} <X className="w-3 h-3 ml-1" />
                  </Badge>
                ))}
                {selectedBrands.map((brand) => (
                  <Badge key={brand} variant="secondary" className="cursor-pointer" onClick={() => toggleBrand(brand)}>
                    {brand} <X className="w-3 h-3 ml-1" />
                  </Badge>
                ))}
                {minRating > 0 && (
                  <Badge variant="secondary" className="cursor-pointer" onClick={() => setMinRating(0)}>
                    {minRating}+ Stars <X className="w-3 h-3 ml-1" />
                  </Badge>
                )}
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                <Button onClick={clearFilters}>Clear All Filters</Button>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    : "space-y-4"
                }
              >
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className={`hover:shadow-lg transition-shadow group ${viewMode === "list" ? "flex" : ""}`}
                  >
                    <CardContent className={`p-0 ${viewMode === "list" ? "flex w-full" : ""}`}>
                      <div className={`relative ${viewMode === "list" ? "w-48 flex-shrink-0" : ""}`}>
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className={`object-cover ${
                            viewMode === "list" ? "w-full h-32 rounded-l-lg" : "w-full h-48 rounded-t-lg"
                          }`}
                        />
                        {product.discount > 0 && (
                          <Badge className="absolute top-2 left-2 bg-red-500">-{product.discount}%</Badge>
                        )}
                        {product.trending && (
                          <Badge className="absolute top-2 right-2 bg-orange-500 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Trending
                          </Badge>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute bottom-2 right-2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className={`p-4 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {product.category}
                            </Badge>
                            <span className="text-xs text-gray-500">{product.brand}</span>
                          </div>

                          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>

                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{product.rating}</span>
                            </div>
                            <span className="text-sm text-gray-500">({product.reviews})</span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-green-600">৳{product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">৳{product.originalPrice}</span>
                            )}
                          </div>

                          <Button
                            className="w-full"
                            size="sm"
                            onClick={() => addToCart(product)}
                            disabled={!product.inStock}
                          >
                            {product.inStock ? "Add to Cart" : "Out of Stock"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {filteredProducts.length > 0 && (
              <div className="text-center mt-12">
                <Button size="lg" variant="outline">
                  Load More Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
