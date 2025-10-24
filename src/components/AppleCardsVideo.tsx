"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";

type VideoCard = {
  src: string;
  title: string;
  category: string;
};

interface AppleCardsVideoProps {
  cards: VideoCard[];
}

export const AppleCardsVideo = ({ cards }: AppleCardsVideoProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (carouselRef.current) {
      checkScrollability();
    }
  }, []);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleVideoClick = (index: number) => {
    // Pausar o vídeo que está tocando
    if (currentPlaying !== null && currentPlaying !== index) {
      videoRefs.current[currentPlaying]?.pause();
    }

    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
        setCurrentPlaying(index);
      } else {
        video.pause();
        setCurrentPlaying(null);
      }
    }
  };

  const handleVideoPause = (index: number) => {
    if (currentPlaying === index) {
      setCurrentPlaying(null);
    }
  };

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 md:py-20 [scrollbar-width:none]"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className="flex flex-row justify-start gap-4 pl-4 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="relative h-60 w-42 md:h-120 md:w-72 shrink-0"
            >
              <div className="relative h-full w-full overflow-hidden rounded-3xl bg-neutral-900">
                {/* Vídeo */}
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  className="h-full w-full object-cover cursor-pointer"
                  src={card.src}
                  loop
                  preload="metadata"
                  onClick={() => handleVideoClick(index)}
                  onPause={() => handleVideoPause(index)}
                  playsInline
                />

                {/* Overlay escuro no topo */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-linear-to-b from-black/70 via-transparent to-transparent" />

                {/* Textos */}
                <div className="absolute top-0 left-0 right-0 z-40 p-4 md:p-6">
                  <p className="text-left font-sans text-xs font-medium text-white md:text-sm">
                    {card.category}
                  </p>
                  <p className="mt-1 text-left font-sans text-lg font-bold text-white md:text-2xl">
                    {card.title}
                  </p>
                </div>

                {/* Indicador de Play/Pause */}
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                  {currentPlaying !== index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm"
                    >
                      <svg
                        className="h-6 w-6 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Botões de navegação */}
      <div className="mr-10 flex justify-end gap-2">
        <button
          className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50 dark:bg-neutral-800"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50 dark:bg-neutral-800"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
