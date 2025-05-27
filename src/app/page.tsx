import Hero from '@/components/home/Hero'
import ProductShowcase from '@/components/home/ProductShowcase'
import AICollectionAnalyzer from '@/components/AI/AICollectionAnalyzer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CardConnect Hub | Premium Sports Cards & Collectibles',
  description: 'Discover premium sports cards, price guides, and collectibles resources - your trusted source for sports memorabilia and collecting expertise.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI-Powered Collection Analysis</h2>
            <p className="max-w-2xl mx-auto text-gray-600">Get insights into your collection's value and rarity with our advanced AI tool.</p>
          </div>
          <AICollectionAnalyzer />
        </div>
      </section>
    </>
  )
}
