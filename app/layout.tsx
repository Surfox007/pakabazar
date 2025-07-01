import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Providers from "@/components/providers"
import { DevelopmentTicker } from "@/components/development-ticker"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pakabazar - Find the Best Prices",
  description: "Compare prices and find the best deals online",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DevelopmentTicker />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
