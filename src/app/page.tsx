import Image from 'next/image'
import Link from 'next/link'
import { getPaginatedPhotos } from '@/data/photos'

export default function HomePage() {
  // Get latest photo for preview
  const { photos } = getPaginatedPhotos(1, 1)
  const latestPhoto = photos[0]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/man-on-desert.jpeg" // Your featured photo
            alt="Featured photograph"
            className="object-cover"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Haseeb Asad
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Photography & Writings
          </p>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        {/* Photography Preview */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Photography</h2>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={latestPhoto.src}
              alt={latestPhoto.alt}
              className="object-cover hover:scale-105 transition-transform duration-300"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Explore my collection of photographs capturing moments, landscapes, and stories.
          </p>
          <Link 
            href="/photos"
            className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Gallery
          </Link>
        </div>

        {/* Blog Preview */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Blog</h2>
          <div className="space-y-4">
            <article className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Generating Alpha</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Preview of your latest blog post...
              </p>
              <span className="text-sm text-gray-500">January 24, 2025</span>
            </article>
          </div>
          <Link 
            href="/blog"
            className="inline-block px-6 py-3 border border-black text-black dark:border-white dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Read More
          </Link>
        </div>
      </section>
    </div>
  )
}