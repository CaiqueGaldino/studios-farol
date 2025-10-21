"use client";

import Image from "next/image";
import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card";
import { fotografias } from "@/components/dados";
import { SparklesCore } from "@/components/ui/sparkles";

// Posições e rotações aleatórias para cada card
const cardPositions = [
  { top: '45%', left: '48%', rotate: -8 },
  { top: '52%', left: '55%', rotate: 12 },
  { top: '48%', left: '42%', rotate: -15 },
  { top: '50%', left: '50%', rotate: 5 },
  { top: '46%', left: '53%', rotate: -3 },
];

export default function Fotografias() {
  return (
    <section className="z-10 w-full max-w-7xl py-20">
      <div className="text-center mb-16">
        <div className="relative">
          <h2 className="text-7xl md:text-5xl font-bold text-white mb-4 relative z-20">
            Fotografias
          </h2>
          <div className="w-full h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <SparklesCore
              id="fotografias-sparkles"
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
        </div>
        <p className="text-neutral-300 text-lg">
          Arraste os cards para explorar nosso portfólio
        </p>
      </div>
      
      <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
        <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800 z-0">
          Capturando momentos, eternizando memórias
        </p>
        {fotografias.map((foto, index) => {
          const position = cardPositions[index] || cardPositions[0];
          return (
            <div
              key={foto.id}
              className="absolute"
              style={{
                top: position.top,
                left: position.left,
                transform: `translate(-50%, -50%) rotate(${position.rotate}deg)`,
                zIndex: fotografias.length - index,
              }}
            >
              <DraggableCardBody className="cursor-grab active:cursor-grabbing">
                <div className="relative h-full flex flex-col pointer-events-none">
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={foto.image}
                      alt={foto.title}
                      fill
                      className="object-cover pointer-events-none select-none"
                      draggable={false}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                    {foto.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {foto.description}
                  </p>
                </div>
              </DraggableCardBody>
            </div>
          );
        })}
      </DraggableCardContainer>
    </section>
  );
}
