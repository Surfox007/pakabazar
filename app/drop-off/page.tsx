"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTrashCredit } from "@/lib/trash-credit-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Recycle, Package, MapPin, Star, Camera, CheckCircle, Coins, Leaf } from "lucide-react"

const packageTypes = [
  { id: "cardboard", name: "Cardboard Boxes", credits: 10, icon: Package, color: "bg-orange-100 text-orange-600" },
  { id: "plastic", name: "Plastic Containers", credits: 8, icon: Recycle, color: "bg-blue-100 text-blue-600" },
  { id: "paper", name: "Paper Bags", credits: 5, icon: Package, color: "bg-green-100 text-green-600" },
  { id: "mixed", name: "Mixed Packaging", credits: 15, icon: Package, color: "bg-purple-100 text-purple-600" },
  { id: "electronics", name: "Electronics Packaging", credits: 20, icon: Package, color: "bg-red-100 text-red-600" },
]

const dropOffLocations = [
  {
    id: "1",
    name: "GreenPoint Recycling Center",
    address: "123 Eco Street, Green City",
    distance: "0.5 miles",
    rating: 4.8,
  },
  {
    id: "2",
    name: "EcoHub Collection Point",
    address: "456 Sustainable Ave, Green City",
    distance: "1.2 miles",
    rating: 4.6,
  },
  {
    id: "3",
    name: "Community Recycle Station",
    address: "789 Earth Blvd, Green City",
    distance: "2.1 miles",
    rating: 4.9,
  },
]

export default function DropOffPage() {
  const { credits, dispatch } = useTrashCredit()
  const [selectedPackageType, setSelectedPackageType] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [selectedLocation, setSelectedLocation] = useState("")
  const [notes, setNotes] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedPackageType || !selectedLocation) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const packageType = packageTypes.find((p) => p.id === selectedPackageType)
    if (packageType) {
      const creditsEarned = packageType.credits * quantity
      dispatch({
        type: "EARN_CREDITS",
        payload: {
          amount: creditsEarned,
          description: `Dropped off ${quantity}x ${packageType.name}`,
          packageType: packageType.id,
        },
      })

      setShowSuccess(true)
      setSelectedPackageType("")
      setQuantity(1)
      setSelectedLocation("")
      setNotes("")
    }

    setIsSubmitting(false)
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Drop-off Successful!</h1>
            <p className="text-gray-600 mb-8">
              Thank you for helping the environment! Your trash credits have been added to your account.
            </p>
            <div className="flex justify-center gap-4">
              <Button onClick={() => setShowSuccess(false)} className="bg-green-600 hover:bg-green-700">
                Drop Off More
              </Button>
              <Button variant="outline" onClick={() => (window.location.href = "/")}>
                Back to Shopping
              </Button>
            </div>
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
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Recycle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Drop Off Empty Packages</h1>
          <p className="text-xl text-gray-600 mb-6">Earn Trash Credits by recycling your empty packages responsibly</p>
          <div className="flex items-center justify-center gap-2 text-lg">
            <Coins className="w-5 h-5 text-green-600" />
            <span className="font-semibold">Current Credits: {credits}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Drop-off Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Package Drop-off Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Package Type Selection */}
                  <div>
                    <Label className="text-base font-semibold mb-4 block">Select Package Type</Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {packageTypes.map((packageType) => {
                        const IconComponent = packageType.icon
                        return (
                          <div
                            key={packageType.id}
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                              selectedPackageType === packageType.id
                                ? "border-green-500 bg-green-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                            onClick={() => setSelectedPackageType(packageType.id)}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-10 h-10 rounded-lg flex items-center justify-center ${packageType.color}`}
                              >
                                <IconComponent className="w-5 h-5" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-medium">{packageType.name}</h3>
                                <div className="flex items-center gap-2">
                                  <Badge variant="outline" className="text-green-600">
                                    +{packageType.credits} credits
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      max="50"
                      value={quantity}
                      onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                      className="w-32"
                    />
                  </div>

                  {/* Drop-off Location */}
                  <div>
                    <Label className="text-base font-semibold mb-4 block">Choose Drop-off Location</Label>
                    <div className="space-y-3">
                      {dropOffLocations.map((location) => (
                        <div
                          key={location.id}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            selectedLocation === location.id
                              ? "border-green-500 bg-green-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          onClick={() => setSelectedLocation(location.id)}
                        >
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                            <div className="flex-1">
                              <h3 className="font-medium">{location.name}</h3>
                              <p className="text-sm text-gray-600 mb-2">{location.address}</p>
                              <div className="flex items-center gap-4 text-sm">
                                <span className="text-green-600">{location.distance}</span>
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  <span>{location.rating}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Photo Upload */}
                  <div>
                    <Label htmlFor="photo">Upload Photo (Optional)</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any additional information about your drop-off..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={!selectedPackageType || !selectedLocation || isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700"
                    size="lg"
                  >
                    {isSubmitting ? "Processing Drop-off..." : "Complete Drop-off"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Credits Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coins className="w-5 h-5" />
                  Your Trash Credits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-green-600 mb-1">{credits}</div>
                  <div className="text-sm text-gray-600">Available Credits</div>
                </div>
                {selectedPackageType && (
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">You'll earn:</div>
                    <div className="text-lg font-semibold text-green-600">
                      +{(packageTypes.find((p) => p.id === selectedPackageType)?.credits || 0) * quantity} credits
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card>
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-green-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Select Package Type</h4>
                    <p className="text-sm text-gray-600">Choose what you're dropping off</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-green-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Choose Location</h4>
                    <p className="text-sm text-gray-600">Find a nearby drop-off point</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-green-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Earn Credits</h4>
                    <p className="text-sm text-gray-600">Get credits for future purchases</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Environmental Impact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  Environmental Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Packages Recycled</span>
                    <span className="font-semibold">247</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CO₂ Saved</span>
                    <span className="font-semibold">12.3 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trees Saved</span>
                    <span className="font-semibold">0.8</span>
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
