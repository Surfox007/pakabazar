"use client"

import type React from "react"
import { createContext, useContext, useReducer, type ReactNode } from "react"

interface TrashCreditState {
  credits: number
  totalEarned: number
  totalSpent: number
  transactions: TrashCreditTransaction[]
}

export interface TrashCreditTransaction {
  id: string
  type: "earned" | "spent"
  amount: number
  description: string
  date: Date
  packageType?: string
}

type TrashCreditAction =
  | { type: "EARN_CREDITS"; payload: { amount: number; description: string; packageType?: string } }
  | { type: "SPEND_CREDITS"; payload: { amount: number; description: string } }
  | { type: "LOAD_CREDITS"; payload: TrashCreditState }

const TrashCreditContext = createContext<{
  credits: number
  totalEarned: number
  totalSpent: number
  transactions: TrashCreditTransaction[]
  dispatch: React.Dispatch<TrashCreditAction>
} | null>(null)

function trashCreditReducer(state: TrashCreditState, action: TrashCreditAction): TrashCreditState {
  switch (action.type) {
    case "EARN_CREDITS": {
      const newTransaction: TrashCreditTransaction = {
        id: Date.now().toString(),
        type: "earned",
        amount: action.payload.amount,
        description: action.payload.description,
        date: new Date(),
        packageType: action.payload.packageType,
      }

      return {
        ...state,
        credits: state.credits + action.payload.amount,
        totalEarned: state.totalEarned + action.payload.amount,
        transactions: [newTransaction, ...state.transactions],
      }
    }

    case "SPEND_CREDITS": {
      if (state.credits < action.payload.amount) {
        return state // Not enough credits
      }

      const newTransaction: TrashCreditTransaction = {
        id: Date.now().toString(),
        type: "spent",
        amount: action.payload.amount,
        description: action.payload.description,
        date: new Date(),
      }

      return {
        ...state,
        credits: state.credits - action.payload.amount,
        totalSpent: state.totalSpent + action.payload.amount,
        transactions: [newTransaction, ...state.transactions],
      }
    }

    case "LOAD_CREDITS":
      return action.payload

    default:
      return state
  }
}

export function TrashCreditProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(trashCreditReducer, {
    credits: 150, // Starting with some credits for demo
    totalEarned: 150,
    totalSpent: 0,
    transactions: [
      {
        id: "1",
        type: "earned",
        amount: 50,
        description: "Dropped off cardboard boxes",
        date: new Date(Date.now() - 86400000 * 2), // 2 days ago
        packageType: "cardboard",
      },
      {
        id: "2",
        type: "earned",
        amount: 30,
        description: "Dropped off plastic containers",
        date: new Date(Date.now() - 86400000 * 5), // 5 days ago
        packageType: "plastic",
      },
      {
        id: "3",
        type: "earned",
        amount: 70,
        description: "Dropped off mixed packaging",
        date: new Date(Date.now() - 86400000 * 7), // 7 days ago
        packageType: "mixed",
      },
    ],
  })

  return <TrashCreditContext.Provider value={{ ...state, dispatch }}>{children}</TrashCreditContext.Provider>
}

export function useTrashCredit() {
  const context = useContext(TrashCreditContext)
  if (!context) {
    throw new Error("useTrashCredit must be used within a TrashCreditProvider")
  }
  return context
}
