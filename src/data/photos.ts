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
      id: '43',
      src: '/images/gallery/brasenose.jpeg',
      alt: 'Brasenose College, Oxford',
      width: 4000,
      height: 6000,
      category: 'FujiFilm XF10',
      date: '2025-08-09'
    },

    {
      id: '42',
      src: '/images/gallery/bruce-lee-sf.jpeg',
      alt: 'Bruce Lee mural, Chinatown, San Francisco',
      width: 4284,
      height: 5712,
      category: 'iphone 15 Pro',
      date: '2025-07-12'
    },
    
    {
      id: '41',
      src: '/images/gallery/palace-of-fine-arts.jpeg',
      alt: 'Palace of Fine Arts, San Francisco',
      width: 3024,
      height: 4032,
      category: 'iphone 15 Pro',
      date: '2025-07-11'
    },

    {
      id: '40',
      src: '/images/gallery/karate-kid-bs.jpeg',
      alt: 'Big Sur',
      width: 4000,
      height: 6000,
      category: 'FujiFilm XF10',
      date: '2025-07-11'
    },

    {
      id: '39',
      src: '/images/gallery/big-sur.jpeg',
      alt: 'Drive to Big Sur',
      width: 4284,
      height: 5712,
      category: 'iPhone 15 Pro',
      date: '2025-07-11'
    },

    {
      id: '38',
      src: '/images/gallery/gotham-sf.jpeg',
      alt: 'San Francisco',
      width: 3024,
      height: 4032,
      category: 'iPhone 15 Pro',
      date: '2025-07-10'
    },

    {
      id: '37',
      src: '/images/gallery/secret-beach.jpeg',
      alt: 'Secret Beach, Lake Tahoe',
      width: 3024,
      height: 4032,
      category: 'iPhone 15 Pro',
      date: '2025-07-09'
    },

    {
      id: '36',
      src: '/images/gallery/glacier-point.jpeg',
      alt: 'Star gazing at Glacier Point, Yosemite',
      width: 3024,
      height: 4032,
      category: 'iPhone 15 Pro',
      date: '2025-07-08'
    },

    {
      id: '35',
      src: '/images/gallery/vernal-falls.jpeg',
      alt: 'Vernal Falls, Yosemite',
      width: 4000,
      height: 6000,
      category: 'FujiFilm XF10',
      date: '2025-07-08'
    },

    {
      id: '34',
      src: '/images/gallery/supra-yosemite.jpeg',
      alt: 'Road to Yosemite',
      width: 3024,
      height: 4032,
      category: 'iPhone 15 Pro',
      date: '2025-07-08'
    },

    {
      id: '33',
      src: '/images/gallery/death-valley.jpeg',
      alt: 'Signs of Life, Death Valley',
      width: 3024,
      height: 4032,
      category: 'iPhone 15 Pro',
      date: '2025-07-07'
    },

    {
      id: '32',
      src: '/images/gallery/fremont-street.jpeg',
      alt: 'Fremont Street, Las Vegas',
      width: 4284,
      height: 5712,
      category: 'iPhone 15 Pro',
      date: '2025-07-06'
    },

    {
      id: '31',
      src: '/images/gallery/las-vegas.jpeg',
      alt: 'Las Vegas',
      width: 3024,
      height: 4032,
      category: 'iPhone 15 Pro',
      date: '2025-07-05'
    },

    {
      id: '30',
      src: '/images/gallery/zion.jpeg',
      alt: 'Zion National Park',
      width: 4000,
      height: 6000,
      category: 'FujiFilm XF10',
      date: '2025-07-04'
    },

    {
      id: '29',
      src: '/images/gallery/4th-july.jpeg',
      alt: '4th of July Parade, Zion National Park',
      width: 3098,
      height: 4131,
      category: 'iPhone 15 Pro',
      date: '2025-07-04'
    },
    
    {
      id: '28',
      src: '/images/gallery/grand-canyon2.jpeg',
      alt: 'Exploring the Grand Canyon',
      width: 3024,
      height: 4032,
      category: 'iPhone 15 Pro',
      date: '2025-07-03'
    },

    {
      id: '27',
      src: '/images/gallery/grand-canyon.jpeg',
      alt: 'Chasing the sunset, Grand Canyon',
      width: 6000,
      height: 4000,
      category: 'FujiFilm XF10',
      date: '2025-07-03'
    },

    {
      id: '26',
      src: '/images/gallery/shohei-ohtani.jpeg',
      alt: 'A star in his home, Dodger Stadium',
      width: 3024,
      height: 4032,
      category: 'iPhone 15 Pro',
      date: '2025-07-01'
    },

    {
      id: '25',
      src: '/images/gallery/the-getty.jpeg',
      alt: 'The Getty Museum',
      width: 4000,
      height: 6000,
      category: 'FujiFilm XF10',
      date: '2025-06-29'
    },

    {
      id: '24',
      src: '/images/gallery/santa-monica-pier.jpeg',
      alt: 'Ocean mist, Santa Monica Pier',
      width: 6000,
      height: 4000,
      category: 'FujiFilm XF10',
      date: '2025-06-29'
    },

    {
      id: '23',
      src: '/images/gallery/muscle-beach.jpeg',
      alt: 'Muscle Beach, Santa Monica',
      width: 4000,
      height: 6000,
      category: 'FujiFilm XF10',
      date: '2025-06-29'
    },

    {
      id: '22',
      src: '/images/gallery/griffith-observatory.jpeg',
      alt: 'Griffith Observatory',
      width: 4000,
      height: 6000,
      category: 'FujiFilm XF10',
      date: '2025-06-28'
    },


    {
      id: '21',
      src: '/images/gallery/paris-gardens.jpeg',
      alt: 'Paris',
      width: 4032,
      height: 3024,
      category: 'iPhone 12 Pro Max',
      date: '2023-07-01'
    },

    {
      id: '20',
      src: '/images/gallery/free-palestine.jpeg',
      alt: 'Fight for freedom',
      width: 3024,
      height: 4032,
      category: 'iPhone 15 Pro',
      date: '2023-11-11'
    },

    {
      id: '19',
      src: '/images/gallery/harthouse-toronto.jpeg',
      alt: 'Hart House, U of T',
      width: 4000,
      height: 6000,
      category: 'FujiFilm XF10',
      date: '2024-04-14'
    },

    {
      id: '18',
      src: '/images/gallery/sahara-stars.jpeg',
      alt: 'Hitchiker\'s guide to the Galaxy',
      width: 3024,
      height: 4032,
      category: 'iPhone 15 Pro',
      date: '2024-05-07'
    },

    {
      id: '17',
      src: '/images/gallery/jersey-shore.jpeg',
      alt: 'Expensive real estate, in Jersey',
      width: 5207,
      height: 3471,
      category: 'Fujifilm XF10',
      date: '2024-05-18'
    },

    {
      id: '16',
      src: '/images/gallery/bmw-autobahn.jpeg',
      alt: 'God gave us BMWs, the Autobahn and sunsets',
      width: 4284,
      height: 5712,
      category: 'iPhone 15 Pro',
      date: '2024-05-26'
    },

    {
      id: '15',
      src: '/images/gallery/nur-energie.jpeg',
      alt: 'Nur Energie!',
      width: 2729,
      height: 3638,
      category: 'iPhone 15 Pro',
      date: '2024-05-26'
    },

    {
      id: '14',
      src: '/images/gallery/gentlemen-of-troy.jpeg',
      alt: 'Gentlemen of Troy',
      width: 2733,
      height: 1822,
      category: 'Fujifilm XF10',
      date: '2024-07-04'
    },

    {
      id: '13',
      src: '/images/gallery/kathmandu-temple.jpeg',
      alt: 'Secret gardens of Kathmandu',
      width: 6000,
      height: 4000,
      category: 'Fujifilm XF10',
      date: '2024-09-21'
    },

    {
      id: '12',
      src: '/images/gallery/kathmandu-from-above.jpeg',
      alt: 'Views from the top...',
      width: 6000,
      height: 4000,
      category: 'Fujifilm XF10',
      date: '2024-09-21'
    },


    {
      id: '11',
      src: '/images/gallery/kathmandu-karting.jpeg',
      alt: 'Finding Senna in Kathmandu...',
      width: 4284,
      height: 5712,
      category: 'iPhone 15 Pro',
      date: '2024-09-23'
    },


    {
      id: '10',
      src: '/images/gallery/eeshas-wedding.jpeg',
      alt: 'Eesha\'s wedding',
      width: 3024,
      height: 4032,
      category: 'iPhone 15 Pro',
      date: '2024-12-25'
    },


    {
      id: '9',
      src: '/images/gallery/annapurna-jungle.jpeg',
      alt: 'On the way up to Annapurna',
      width: 4284,
      height: 5712,
      category: 'iPhone 15 Pro',
      date: '2024-09-25'
    },

    {
      id: '8',
      src: '/images/gallery/mother-and-son.jpeg',
      alt: 'Mother and son...',
      width: 3024,
      height: 4032,
      category: 'iPhone 15 Pro',
      date: '2024-09-25'
    },

    {
      id: '7',
      src: '/images/gallery/annapurna-massif.jpeg',
      alt: 'Annapurna after camp, day 1',
      width: 5712,
      height: 4284,
      category: 'iPhone 15 Pro',
      date: '2024-09-24'
    },

    {
      id: '1',
      src: '/images/gallery/uni-of-toronto.jpeg',
      alt: 'Football field at the University of Toronto',
      width: 4000,
      height: 6000,
      category: 'Fujifilm XF10',
      date: '2024-04-14'
    },
    
    {
        id: '2',
        src: '/images/gallery/lake-district-disneyland.jpeg',
        alt: 'Disneyland jacket at Lake District',
        width: 3024,
        height: 4032,
        category: 'iPhone 12 Pro Max',
        date: '2023-07-22'
      },

      {
        id: '3',
        src: '/images/gallery/man-on-desert.jpeg',
        alt: 'Sahara desert',
        width: 1536,
        height: 2048,
        category: 'iPhone 13',
        date: '2024-05-04'
      },

      {
        id: '4',
        src: '/images/gallery/cn-tower.jpeg',
        alt: 'CN Tower',
        width: 4000,
        height: 6000,
        category: 'Fujifilm XF10',
        date: '2024-04-14'
      },

      {
        id: '5',
        src: '/images/gallery/ibrahim-on-quad.jpeg',
        alt: 'Chemistry in the Sahara',
        width: 4284,
        height: 5712,
        category: 'iPhone 15 Pro',
        date: '2024-05-04'
      },

      {
        id: '6',
        src: '/images/gallery/guangzhou-at-night.jpeg',
        alt: 'Guangzhou from above',
        width: 5712,
        height: 4284,
        category: 'iPhone 15 Pro',
        date: '2024-09-30'
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