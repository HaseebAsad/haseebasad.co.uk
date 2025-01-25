// src/data/photos.ts
export interface Photo {
    id: string
    src: string
    alt: string
    width: number
    height: number
    category?: string
    date?: string
  }
  
  export const photos: Photo[] = [
    {
      id: '1',
      src: '/images/gallery/uni-of-toronto.jpeg',
      alt: 'Football field at the University of Toronto',
      width: 4000,
      height: 6000,
      category: 'portrait',
      date: '2024-04-14'
    },
    
    {
        id: '2',
        src: '/images/gallery/lake-district-disneyland.jpeg',
        alt: 'Disneyland jacket at Lake District',
        width: 3024,
        height: 4032,
        category: 'portrait',
        date: '2023-07-22'
      },

      {
        id: '3',
        src: '/images/gallery/man-on-desert.jpeg',
        alt: 'Sahara desert',
        width: 1536,
        height: 2048,
        category: 'portrait',
        date: '2024-05-04'
      },

      {
        id: '4',
        src: '/images/gallery/cn-tower.jpeg',
        alt: 'CN Tower',
        width: 4000,
        height: 6000,
        category: 'portrait',
        date: '2024-04-14'
      },

      {
        id: '5',
        src: '/images/gallery/ibrahim-on-quad.jpeg',
        alt: 'Ibrahim in the Sahara desert',
        width: 4284,
        height: 5712,
        category: 'portrait',
        date: '2024-05-04'
      },
  ]
  
  // Helper function to get paginated photos
  export const getPaginatedPhotos = (page: number, limit: number = 12) => {
    // Sort photos by date in descending order (newest first)
    const sortedPhotos = [...photos].sort((a, b) => 
      new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime()
    )
    
    const start = (page - 1) * limit
    const end = start + limit
    
    return {
      photos: sortedPhotos.slice(start, end),
      hasMore: end < sortedPhotos.length
    }
  }