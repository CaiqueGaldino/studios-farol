import type { ReactNode } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Portifolio from "@/components/Portifolio";
import Clientes from "@/components/Clientes";
import Equipe from "@/components/Equipe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex min-h-screen flex-col items-center justify-between">
        {/* Seção Header/Hero - Fundo escuro com gradiente */}
        <div className="w-full bg-gradient-to-b from-[#362B23] via-[#2a221c] to-[#1a1410] pt-24">
          <Header />
        </div>

        {/* Seção Portifólio - Fundo preto */}
        <div className="w-full bg-black flex justify-center">
          <Portifolio />
        </div>

        {/* Seção Clientes - Fundo cinza escuro */}
        <div className="w-full bg-gray-900 flex justify-center">
          <Clientes />
        </div>

        {/* Seção Equipe - Fundo com gradiente azul escuro */}
        <Equipe />

      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
