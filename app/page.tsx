import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoryGrid } from "@/components/category-grid"
import { FeaturedDeals } from "@/components/featured-deals"
import { ProductGrid } from "@/components/product-grid"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { VideoSection } from "@/components/video-section"
import { ValuePropositionCarousel } from "@/components/value-proposition-carousel"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoryGrid />
        <FeaturedDeals />
        <ProductGrid />
        <VideoSection />
        <ValuePropositionCarousel />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
