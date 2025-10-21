"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full py-32 text-center">
      {/* Logo Studios Farol */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center">
          <Image
            src="/images/logo-preto.webp"
            alt="Studios Farol Logo"
            width={600}
            height={200}
            className="w-auto h-48 md:h-64 lg:h-80"
            priority
          />
        </div>
      </div>
    </header>
  );
}
