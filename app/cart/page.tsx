"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus, Trash, ShoppingBag, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function CartPage() {
  const { state, dispatch } = useCart()

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
            </p>
            <Link href="/">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700">
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
              <Button variant="outline" onClick={clearCart} className="text-red-600 hover:text-red-700 bg-transparent">
                <Trash className="w-4 h-4 mr-2" />
                Clear Cart
              </Button>
            </div>

            <div className="space-y-4">
              {state.items.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                        {item.store && <p className="text-sm text-gray-600 mb-2">from {item.store}</p>}
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-green-600">৳{item.price}</span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">৳{item.originalPrice}</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center border rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="px-3 py-1 min-w-[3rem] text-center">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span>Items ({state.itemCount})</span>
                    <span>৳{state.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>৳{(state.total * 0.08).toFixed(2)}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between text-lg font-bold mb-6">
                  <span>Total</span>
                  <span>৳{(state.total * 1.08).toFixed(2)}</span>
                </div>

                <Link href="/checkout">
                  <Button className="w-full bg-green-600 hover:bg-green-700 mb-3" size="lg">
                    Proceed to Checkout
                  </Button>
                </Link>

                <div className="text-center">
                  <p className="text-sm text-gray-600">Free shipping on orders over ৳5000</p>
                </div>

                {/* Security badges */}
                <div className="mt-6 pt-4 border-t">
                  <p className="text-xs text-gray-500 text-center mb-2">Secure checkout guaranteed</p>
                  <div className="flex justify-center gap-2">
                    <div className="w-8 h-5 bg-gray-200 rounded text-xs flex items-center justify-center">SSL</div>
                    <div className="w-8 h-5 bg-gray-200 rounded text-xs flex items-center justify-center">256</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
