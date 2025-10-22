"use client";

import Image from "next/image";
import Link from "next/link";
import { Rationale } from "next/font/google";

const rationale = Rationale({
  subsets: ["latin"],
  variable: "--font-rationale",
  weight: "400"
});

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto bg-black/40 dark:bg-neutral-900/80 backdrop-blur-md rounded-2xl shadow-lg  px-6 py-3">
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

        {/* Links ao centro */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/portfolio"
            className="text-white dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium"
          >
            Portfólio
          </Link>
          <Link
            href="/servicos"
            className="text-white dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium"
          >
            Serviços
          </Link>
          <Link
            href="/equipe"
            className="text-white dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium"
          >
            Equipe
          </Link>
        </div>

        {/* Botão à direita */}
        <div className="shrink-0">
          <Link
            href="/contato"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Contratar
          </Link>
        </div>
        </div>
      </nav>
    </div>
  );
}