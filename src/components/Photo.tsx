// src/components/Photo.tsx
'use client'

import Image from 'next/image'
import { useState } from 'react'

interface PhotoProps {
  src: string
  alt: string
  date: string
  onClick: () => void
}

const Photo = ({ src, alt, date, onClick }: PhotoProps) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div 
      className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`
          object-cover
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'}
          group-hover:scale-105 transition-all
        `}
        onLoadingComplete={() => setIsLoading(false)}
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
        <p className="text-white text-sm mb-1">{alt}</p>
        <p className="text-gray-300 text-xs">{date}</p>
      </div>
    </div>
  )
}

export default Photo