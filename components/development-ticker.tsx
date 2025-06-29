"use client"

import { AlertTriangle } from "lucide-react"

export function DevelopmentTicker() {
  return (
    <div className="bg-yellow-400 text-black py-2 overflow-hidden relative">
      <div className="animate-scroll whitespace-nowrap">
        <div className="inline-flex items-center gap-8 text-sm font-medium">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span>🚧 This website is currently under development</span>
          </div>
          <span>•</span>
          <span>Some features may not work as expected</span>
          <span>•</span>
          <span>Thank you for your patience</span>
          <span>•</span>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span>🚧 This website is currently under development</span>
          </div>
          <span>•</span>
          <span>Some features may not work as expected</span>
          <span>•</span>
          <span>Thank you for your patience</span>
          <span>•</span>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            <span>🚧 This website is currently under development</span>
          </div>
          <span>•</span>
          <span>Some features may not work as expected</span>
          <span>•</span>
          <span>Thank you for your patience</span>
          <span>•</span>
        </div>
      </div>
    </div>
  )
}
