"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full py-32 text-center">
      {/* Logo Studios Farol */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative flex justify-center items-center h-48 md:h-64 lg:h-80">
          {/* Imagem de fundo */}
          <Image
            src="/images/logo-cega-branco.webp"
            alt="Studios Farol Logo"
            width={600}
            height={200}
            className="w-auto h-48 md:h-64 lg:h-80"
            priority
          />
          {/* Imagem sobreposta (centralizada sobre a primeira) */}
          <Image
            src="/images/simbolo-branco.webp"
            alt="Studios Farol Símbolo"
            width={80}
            height={80}
            className="absolute h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       transition-all duration-500 ease-in-out
                       hover:rotate-180 hover:scale-150
                       hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]
                       hover:brightness-125
                       
                       cursor-pointer"
            priority
          />
        </div>
      </div>
    </header>
  );
}
