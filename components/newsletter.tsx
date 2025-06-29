import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-16 bg-green-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Never Miss a Deal Again</h2>
          <p className="text-green-100 mb-8 text-lg">
            Get personalized price alerts and exclusive deals delivered to your inbox
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Enter your email address" className="bg-white border-0 flex-1" />
            <Button className="bg-white text-green-600 hover:bg-gray-100">Subscribe</Button>
          </div>

          <p className="text-green-100 text-sm mt-4">Join 50,000+ smart shoppers. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
