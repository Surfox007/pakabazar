"use client"

import type { ReactNode } from "react"
import { CartProvider } from "@/lib/cart-context"
import { TrashCreditProvider } from "@/lib/trash-credit-context"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <TrashCreditProvider>{children}</TrashCreditProvider>
    </CartProvider>
  )
}
