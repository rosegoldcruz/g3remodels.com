'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import './luxury-gallery.css'

interface GalleryItemData {
  src: string
  alt: string
  title: string
  cols?: string
}

interface GalleryItemProps {
  src: string
  alt: string
  title: string
}

function GalleryItem({ src, alt, title }: GalleryItemProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [overlayStyle, setOverlayStyle] = useState<React.CSSProperties>({ opacity: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top

    setOverlayStyle({
      opacity: 1,
      background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 40%)`,
    })
  }

  const handleMouseLeave = () => {
    setOverlayStyle({ opacity: 0 })
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="luxury-gallery-item"
    >
      {/* Light Spotlight Overlay */}
      <div className="luxury-gallery-overlay" style={overlayStyle} />

      {/* Image */}
      <div className="luxury-gallery-image-wrapper">
        <Image
          src={src}
          alt={alt}
          fill
          className="luxury-gallery-image"
          quality={85}
        />
      </div>

      {/* Title on Hover */}
      <div className="luxury-gallery-title">
        <p>{title}</p>
      </div>
    </div>
  )
}

interface LuxuryGalleryProps {
  items?: GalleryItemData[]
}

export function LuxuryGallery({ items = defaultItems }: LuxuryGalleryProps) {
  return (
    <section className="luxury-gallery-section">
      <div className="luxury-gallery-container">
        <div className="luxury-gallery-header">
          <h2 className="luxury-gallery-title-main">The Collection</h2>
          <div className="luxury-gallery-divider" />
        </div>

        <div className="luxury-gallery-grid">
          {items.map((photo, i) => (
            <div key={i} className={`luxury-gallery-item-wrapper ${photo.cols || 'col-span-1'}`}>
              <GalleryItem src={photo.src} alt={photo.alt} title={photo.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const defaultItems: GalleryItemData[] = [
  {
    src: '/placeholder.svg?w=600&h=600',
    alt: 'Luxury Kitchen 1',
    title: 'Fusion Shaker',
    cols: 'col-span-2 row-span-2',
  },
  {
    src: '/placeholder.svg?w=400&h=400',
    alt: 'Luxury Kitchen 2',
    title: 'Slab Minimalist',
    cols: 'col-span-1',
  },
  {
    src: '/placeholder.svg?w=400&h=400',
    alt: 'Luxury Kitchen 3',
    title: 'Modern Elegance',
    cols: 'col-span-1',
  },
  {
    src: '/placeholder.svg?w=400&h=400',
    alt: 'Luxury Kitchen 4',
    title: 'Heritage Craft',
    cols: 'col-span-1',
  },
  {
    src: '/placeholder.svg?w=400&h=400',
    alt: 'Luxury Kitchen 5',
    title: 'Contemporary',
    cols: 'col-span-1 row-span-2',
  },
]
