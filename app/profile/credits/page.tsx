"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useTrashCredit } from "@/lib/trash-credit-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Coins, TrendingUp, ArrowUpRight, ArrowDownRight, Recycle, Gift, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function CreditsPage() {
  const { credits, totalEarned, totalSpent, transactions } = useTrashCredit()

  const recentTransactions = transactions.slice(0, 10)
  const earnedTransactions = transactions.filter((t) => t.type === "earned")
  const spentTransactions = transactions.filter((t) => t.type === "spent")

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Trash Credits</h1>
          <p className="text-gray-600">Manage your eco-friendly rewards and track your environmental impact</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Available Credits</p>
                  <p className="text-3xl font-bold text-green-600">{credits}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Coins className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Earned</p>
                  <p className="text-3xl font-bold text-blue-600">{totalEarned}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Spent</p>
                  <p className="text-3xl font-bold text-purple-600">{totalSpent}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="all">All Transactions</TabsTrigger>
                    <TabsTrigger value="earned">Earned</TabsTrigger>
                    <TabsTrigger value="spent">Spent</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="space-y-4 mt-6">
                    {recentTransactions.map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              transaction.type === "earned" ? "bg-green-100" : "bg-red-100"
                            }`}
                          >
                            {transaction.type === "earned" ? (
                              <ArrowUpRight className="w-5 h-5 text-green-600" />
                            ) : (
                              <ArrowDownRight className="w-5 h-5 text-red-600" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{transaction.description}</p>
                            <p className="text-sm text-gray-600">{transaction.date.toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p
                            className={`font-semibold ${
                              transaction.type === "earned" ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {transaction.type === "earned" ? "+" : "-"}
                            {transaction.amount}
                          </p>
                          {transaction.packageType && (
                            <Badge variant="outline" className="text-xs">
                              {transaction.packageType}
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="earned" className="space-y-4 mt-6">
                    {earnedTransactions.map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <ArrowUpRight className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">{transaction.description}</p>
                            <p className="text-sm text-gray-600">{transaction.date.toLocaleDateString()}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600">+{transaction.amount}</p>
                          {transaction.packageType && (
                            <Badge variant="outline" className="text-xs">
                              {transaction.packageType}
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="spent" className="space-y-4 mt-6">
                    {spentTransactions.length === 0 ? (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No spending history yet</p>
                        <p className="text-sm text-gray-400">Start using your credits for discounts!</p>
                      </div>
                    ) : (
                      spentTransactions.map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                              <ArrowDownRight className="w-5 h-5 text-red-600" />
                            </div>
                            <div>
                              <p className="font-medium">{transaction.description}</p>
                              <p className="text-sm text-gray-600">{transaction.date.toLocaleDateString()}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-red-600">-{transaction.amount}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/drop-off">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Recycle className="w-4 h-4 mr-2" />
                    Drop Off Packages
                  </Button>
                </Link>
                <Button variant="outline" className="w-full bg-transparent">
                  <Gift className="w-4 h-4 mr-2" />
                  Redeem Rewards
                </Button>
              </CardContent>
            </Card>

            {/* Credit Tiers */}
            <Card>
              <CardHeader>
                <CardTitle>Credit Tiers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Bronze (0-99)</span>
                    <Badge variant="outline">1x multiplier</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Silver (100-299)</span>
                    <Badge className="bg-green-100 text-green-800">1.2x multiplier</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Gold (300+)</span>
                    <Badge variant="outline">1.5x multiplier</Badge>
                  </div>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-sm text-gray-600">
                    Current Tier: <span className="font-semibold text-green-600">Silver</span>
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "50%" }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">150 more credits to Gold</p>
                </div>
              </CardContent>
            </Card>

            {/* Environmental Impact */}
            <Card>
              <CardHeader>
                <CardTitle>Your Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Packages Recycled</span>
                  <span className="font-semibold">15</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>CO₂ Saved</span>
                  <span className="font-semibold">2.1 kg</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Waste Diverted</span>
                  <span className="font-semibold">3.2 lbs</span>
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
