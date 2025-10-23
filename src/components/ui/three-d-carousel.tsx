"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "motion/react"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

const keywords = [
  "night",
  "city",
  "sky",
  "sunset",
  "sunrise",
  "winter",
  "skyscraper",
  "building",
  "cityscape",
  "architecture",
  "street",
  "lights",
  "downtown",
  "bridge",
]

const duration = 0.15
const transition = {
  duration,
  ease: [0.32, 0.72, 0, 1] as const,
  filter: "blur(4px)",
}
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] as const }

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (item: MediaItem, index: number) => void
    controls: ReturnType<typeof useAnimation>
    cards: MediaItem[]
    isCarouselActive: boolean
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 1200 : 1800
    const faceCount = cards.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    return (
      <div
        className="flex h-full items-center justify-center bg-mauve-dark-2"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((item, i) => (
            <motion.div
              key={`key-${item.url}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl bg-mauve-dark-2 p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(item, i)}
            >
              {item.type === 'video' ? (
                <motion.video
                  src={item.url}
                  layoutId={`media-${item.url}`}
                  className="pointer-events-none w-full rounded-xl object-cover aspect-square"
                  initial={{ filter: "blur(4px)" }}
                  layout="position"
                  animate={{ filter: "blur(0px)" }}
                  transition={transition}
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              ) : (
                <motion.img
                  src={item.url}
                  alt={`media_${i} ${item.url}`}
                  layoutId={`media-${item.url}`}
                  className="pointer-events-none w-full rounded-xl object-cover aspect-square"
                  initial={{ filter: "blur(4px)" }}
                  layout="position"
                  animate={{ filter: "blur(0px)" }}
                  transition={transition}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)

Carousel.displayName = "Carousel"

interface MediaItem {
  url: string
  type: 'image' | 'video'
}

interface ThreeDPhotoCarouselProps {
  images?: string[]
  media?: MediaItem[]
}

function ThreeDPhotoCarousel({ images, media }: ThreeDPhotoCarouselProps) {
  const [activeItem, setActiveItem] = useState<MediaItem | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const controls = useAnimation()
  
  const defaultImages = useMemo(
    () => keywords.map((keyword) => ({ url: `https://picsum.photos/200/300?${keyword}`, type: 'image' as const })),
    []
  )
  
  const cards = useMemo(() => {
    if (media && media.length > 0) return media
    if (images && images.length > 0) return images.map(url => ({ url, type: 'image' as const }))
    return defaultImages
  }, [images, media, defaultImages])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    console.log("Cards loaded:", cards)
  }, [cards])

  const handleClick = (item: MediaItem, index: number) => {
    setActiveItem(item)
    setActiveIndex(index)
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveItem(null)
    setIsCarouselActive(true)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    const nextIndex = (activeIndex + 1) % cards.length
    setActiveIndex(nextIndex)
    setActiveItem(cards[nextIndex])
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    const prevIndex = (activeIndex - 1 + cards.length) % cards.length
    setActiveIndex(prevIndex)
    setActiveItem(cards[prevIndex])
  }

  if (!isMounted) {
    return (
      <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden flex items-center justify-center">
        <div className="text-white">Carregando...</div>
      </div>
    )
  }

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeItem && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`media-container-${activeItem.url}`}
            layout="position"
            onClick={handleClose}
            className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 m-5 md:m-36 lg:mx-76 rounded-3xl"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            {/* Botão Anterior */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 md:p-4 transition-all duration-200 group"
              aria-label="Mídia anterior"
            >
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Botão Próximo */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 md:p-4 transition-all duration-200 group"
              aria-label="Próxima mídia"
            >
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {activeItem.type === 'video' ? (
              <motion.video
                layoutId={`media-${activeItem.url}`}
                src={activeItem.url}
                className="max-w-full max-h-full rounded-lg shadow-lg"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1] as const,
                }}
                style={{
                  willChange: "transform",
                }}
                controls
                autoPlay
                loop
              />
            ) : (
              <motion.img
                layoutId={`media-${activeItem.url}`}
                src={activeItem.url}
                className="max-w-full max-h-full rounded-lg shadow-lg"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1] as const,
                }}
                style={{
                  willChange: "transform",
                }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  )
}

export default ThreeDPhotoCarousel
