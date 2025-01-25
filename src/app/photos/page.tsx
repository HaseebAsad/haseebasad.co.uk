// src/app/photos/page.tsx
import PhotoGrid from '@/components/PhotoGrid'

export default function PhotosPage() {
  return (
    <main className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h1 className="text-4xl font-bold">Photography</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Fujifilm XF10 and iPhone 15 Pro Max
        </p>
      </div>
      <PhotoGrid />
    </main>
  )
}