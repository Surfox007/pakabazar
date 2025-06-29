"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    // In a real implementation, you would control the actual video playback here
  }

  return (
    <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Story & Mission</h2>
          <p className="text-green-100 text-lg mb-12 max-w-2xl mx-auto">
            Discover how GreenPrice is revolutionizing the way people shop online, making smart purchasing decisions
            accessible to everyone while creating positive impact.
          </p>

          {/* Video Container */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              {/* Video Thumbnail/Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=700"
                  alt="GreenPrice venture video thumbnail"
                  className="w-full h-full object-cover opacity-60"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    onClick={handlePlayPause}
                    size="lg"
                    className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 border-2 border-white/50"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white ml-0" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </Button>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 text-left">
                    <h3 className="text-white font-semibold text-lg mb-1">The GreenPrice Journey</h3>
                    <p className="text-gray-300 text-sm">Learn about our mission to democratize smart shopping</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                      <span>Duration: 3:42</span>
                      <span>•</span>
                      <span>Founded 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-green-200">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">৳20M+</div>
              <div className="text-green-200">Money Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-green-200">Partner Stores</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
