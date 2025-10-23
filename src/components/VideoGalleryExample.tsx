'use client'

import { EmblaCarouselThumbnails } from '@/components/ui/embla-carousel-thumbnails'
import '@/components/ui/embla-carousel-thumbnails.css'

export default function VideoGalleryExample() {
  // Seus vídeos - substitua pelos caminhos reais
  const videos = [
    '/portifolio/videos/video1.mp4',
    '/portifolio/videos/video2.mp4',
    '/portifolio/videos/video3.mp4',
    '/portifolio/videos/video4.mp4',
    '/portifolio/videos/video5.mp4',
  ]

  return (
    <div className="w-full py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        Nossos Trabalhos
      </h2>
      <EmblaCarouselThumbnails 
        slides={videos} 
        options={{ loop: true }}
      />
    </div>
  )
}
