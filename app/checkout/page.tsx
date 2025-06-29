"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, CreditCard, Truck, Shield, CheckCircle, MapPin } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  const { state } = useCart()
  const [currentStep, setCurrentStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [shippingMethod, setShippingMethod] = useState("standard")

  const steps = [
    { id: 1, title: "Shipping", icon: Truck },
    { id: 2, title: "Payment", icon: CreditCard },
    { id: 3, title: "Review", icon: CheckCircle },
  ]

  const shippingOptions = [
    { id: "standard", name: "Standard Shipping", price: 0, time: "5-7 business days" },
    { id: "express", name: "Express Shipping", price: 120, time: "2-3 business days" },
    { id: "overnight", name: "Overnight Shipping", price: 300, time: "Next business day" },
  ]

  const selectedShipping = shippingOptions.find((option) => option.id === shippingMethod)
  const subtotal = state.total
  const tax = subtotal * 0.08
  const shipping = selectedShipping?.price || 0
  const total = subtotal + tax + shipping

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Add some items to your cart before checking out.</p>
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/cart" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700">
            <ArrowLeft className="w-4 h-4" />
            Back to Cart
          </Link>
        </div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isActive = currentStep === step.id
              const isCompleted = currentStep > step.id

              return (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center gap-3 ${index < steps.length - 1 ? "flex-1" : ""}`}>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isCompleted
                          ? "bg-green-600 text-white"
                          : isActive
                            ? "bg-green-100 text-green-600 border-2 border-green-600"
                            : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span
                      className={`font-medium ${
                        isActive ? "text-green-600" : isCompleted ? "text-green-600" : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-4 ${isCompleted ? "bg-green-600" : "bg-gray-200"}`} />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Shipping Information */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+880 1234-567890" />
                  </div>

                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" placeholder="123 Main Street" />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Dhaka" />
                    </div>
                    <div>
                      <Label htmlFor="state">Division</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select division" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dhaka">Dhaka</SelectItem>
                          <SelectItem value="chittagong">Chittagong</SelectItem>
                          <SelectItem value="sylhet">Sylhet</SelectItem>
                          <SelectItem value="rajshahi">Rajshahi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="zip">Postal Code</Label>
                      <Input id="zip" placeholder="1000" />
                    </div>
                  </div>

                  {/* Shipping Options */}
                  <div className="mt-6">
                    <Label className="text-base font-semibold">Shipping Method</Label>
                    <RadioGroup value={shippingMethod} onValueChange={setShippingMethod} className="mt-3">
                      {shippingOptions.map((option) => (
                        <div key={option.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                          <RadioGroupItem value={option.id} id={option.id} />
                          <div className="flex-1">
                            <Label htmlFor={option.id} className="font-medium cursor-pointer">
                              {option.name}
                            </Label>
                            <p className="text-sm text-gray-600">{option.time}</p>
                          </div>
                          <div className="font-semibold">{option.price === 0 ? "Free" : `৳${option.price}`}</div>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <Button onClick={() => setCurrentStep(2)} className="w-full bg-green-600 hover:bg-green-700">
                    Continue to Payment
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Payment Information */}
            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-3 p-3 border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                        <CreditCard className="w-4 h-4" />
                        Credit/Debit Card
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "card" && (
                    <div className="space-y-4 mt-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" placeholder="John Doe" />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="billing" />
                        <Label htmlFor="billing" className="text-sm">
                          Billing address same as shipping address
                        </Label>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setCurrentStep(1)} className="flex-1">
                      Back to Shipping
                    </Button>
                    <Button onClick={() => setCurrentStep(3)} className="flex-1 bg-green-600 hover:bg-green-700">
                      Review Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Order Review */}
            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Review Your Order
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Order Items */}
                  <div>
                    <h3 className="font-semibold mb-3">Order Items</h3>
                    <div className="space-y-3">
                      {state.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                          </div>
                          <div className="font-semibold">৳{(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shipping & Payment Summary */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Shipping Address</h3>
                      <div className="text-sm text-gray-600">
                        <p>John Doe</p>
                        <p>123 Main Street</p>
                        <p>Dhaka, Bangladesh 1000</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Payment Method</h3>
                      <div className="text-sm text-gray-600">
                        <p>Credit Card ending in 3456</p>
                        <p>Expires 12/25</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" onClick={() => setCurrentStep(2)} className="flex-1">
                      Back to Payment
                    </Button>
                    <Button className="flex-1 bg-green-600 hover:bg-green-700">Place Order</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal ({state.itemCount} items)</span>
                    <span>৳{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `৳${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>৳{tax.toFixed(2)}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>৳{total.toFixed(2)}</span>
                </div>

                {/* Security Info */}
                <div className="mt-6 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Shield className="w-4 h-4" />
                    <span>Secure checkout guaranteed</span>
                  </div>
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
