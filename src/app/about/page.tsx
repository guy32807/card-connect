import { Metadata } from 'next'
import AppImage from '@/components/shared/AppImage'

export const metadata: Metadata = {
  title: 'About Us | CardConnect',
  description: 'Learn about CardConnect, the premier destination for sports card collectors.',
}

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About CardConnect</h1>
          <p className="text-xl max-w-3xl">Your trusted resource for sports card collecting, authentication, and valuation.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="mb-4">At CardConnect, we're passionate about connecting collectors with premium sports cards and providing expert resources to help them build valuable collections.</p>
            <p>Whether you're a seasoned collector or just starting out, our platform offers unparalleled access to Beckett's authentication services, price guides, and exclusive collections.</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            {/* Replace Image with AppImage */}
            <AppImage 
              src="/images/about/mission.jpg" 
              alt="Our mission" 
              width={600} 
              height={400} 
              className="w-full"
            />
          </div>
        </div>

        {/* Additional sections with AppImage components */}
      </section>

      {/* More content... */}
    </div>
  )
}