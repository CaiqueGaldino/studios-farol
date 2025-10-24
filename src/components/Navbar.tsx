"use client";

import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  onMenuClick?: () => void;
  menuButtonRef?: React.RefObject<HTMLButtonElement | null>;
}

export default function Navbar({ onMenuClick, menuButtonRef }: NavbarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto bg-black/60 backdrop-blur-md rounded-2xl shadow-lg px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo à esquerda */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/simbolo-branco.webp"
                alt="Studios Farol Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Botão de menu à direita */}
          <button
            ref={menuButtonRef}
            onClick={onMenuClick}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}