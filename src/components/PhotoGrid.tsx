'use client'
import { useEffect, useState, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Photo from './Photo'
import { Photo as PhotoType, getPaginatedPhotos } from '@/data/photos'

const PhotoGrid = () => {
  const [photos, setPhotos] = useState<PhotoType[]>([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const { ref, inView } = useInView()
  
  // Lightbox state
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  // Memoize loadMorePhotos to prevent unnecessary re-renders
  const loadMorePhotos = useCallback(() => {
    const { photos: newPhotos, hasMore: morePhotos } = getPaginatedPhotos(page)
    setPhotos(prev => [...prev, ...newPhotos])
    setHasMore(morePhotos)
    setPage(prev => prev + 1)
  }, [page])

  useEffect(() => {
    if (inView && hasMore) {
      loadMorePhotos()
    }
  }, [inView, hasMore, loadMorePhotos]) // Added missing dependencies

  const handlePhotoClick = (index: number) => {
    setPhotoIndex(index)
    setIsOpen(true)
  }

  return (
    <>
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <Photo
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              date={photo.date || ''}
              onClick={() => handlePhotoClick(index)}
            />
          ))}
        </div>
        {hasMore && (
          <div ref={ref} className="h-10 flex items-center justify-center my-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900 dark:border-white" />
          </div>
        )}
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={photos.map(photo => ({
          src: photo.src,
          alt: photo.alt,
          title: photo.date
        }))}
      />
    </>
  )
}

export default PhotoGrid