"use client";

import { useState } from "react";
import Header from "@/components/Header";
import PortifolioPage from "@/components/PortifolioPage";
import TrabalhosPage from "@/components/TrabalhosPage";
import FotografiasPage from "@/components/FotografiasPage";
import Equipe from "@/components/Equipe";
import Footer from "@/components/Footer";
import { StaggeredMenu } from "@/components/bits/StaggeredMenu";

type PageType = "home" | "portfolio" | "trabalhos" | "fotografias" | "equipe" | "servicos" | "contato";

export default function PageManager() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  const menuItems: { label: string; link: string; ariaLabel: string; }[] = [
    { label: "Home", link: "#home", ariaLabel: "Navegar para Home" },
    { label: "Portfólio", link: "#portfolio", ariaLabel: "Navegar para Portfólio" },
    { label: "Trabalhos", link: "#trabalhos", ariaLabel: "Navegar para Trabalhos" },
    { label: "Fotografias", link: "#fotografias", ariaLabel: "Navegar para Fotografias" },
    { label: "Equipe", link: "#equipe", ariaLabel: "Navegar para Equipe" },
    { label: "Serviços", link: "#servicos", ariaLabel: "Navegar para Serviços" },
    { label: "Contato", link: "#contato", ariaLabel: "Navegar para Contato" },
  ];

  const socialItems: { label: string; link: string; }[] = [
    { label: "Instagram", link: "https://instagram.com", },
    { label: "Facebook", link: "https://facebook.com" },
    { label: "YouTube", link: "https://youtube.com" },
  ];

  // Interceptar cliques nos links do menu
  const handleMenuOpen = () => {
    // Adicionar event listeners quando o menu abre
    setTimeout(() => {
      const menuLinks = document.querySelectorAll('.sm-panel-item');
      menuLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const pages: PageType[] = ["home", "portfolio", "trabalhos", "fotografias", "equipe", "servicos", "contato"];
          setCurrentPage(pages[index]);
        });
      });
    }, 100);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <div className="w-full h-full flex flex-col">
            <div className="flex-1 flex items-center justify-center">
              <Header />
            </div>
            <Footer />
          </div>
        );
      case "portfolio":
        return (
          <div className="w-full h-full flex flex-col overflow-y-auto hide-scrollbar">
            <div className="flex-1 flex items-center justify-center">
              <PortifolioPage />
            </div>
            <Footer />
          </div>
        );
      case "trabalhos":
        return (
          <div className="w-full h-full flex flex-col overflow-y-auto hide-scrollbar">
            <div className="flex-1">
              <TrabalhosPage />
            </div>
            <Footer />
          </div>
        );
      case "fotografias":
        return (
          <div className="w-full h-full flex flex-col overflow-y-auto hide-scrollbar">
            <div className="flex-1 flex items-center justify-center">
              <FotografiasPage />
            </div>
            <Footer />
          </div>
        );
      case "equipe":
        return (
          <div className="w-full h-full flex flex-col overflow-y-auto hide-scrollbar">
            <div className="flex-1 flex items-center justify-center">
              <Equipe />
            </div>
            <Footer />
          </div>
        );
      case "servicos":
        return (
          <div className="w-full h-full flex flex-col">
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">Serviços</h1>
                <p className="text-xl text-gray-400">Em breve...</p>
              </div>
            </div>
            <Footer />
          </div>
        );
      case "contato":
        return (
          <div className="w-full h-full flex flex-col">
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">Contato</h1>
                <p className="text-xl text-gray-400">Em breve...</p>
              </div>
            </div>
            <Footer />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-linear-to-b from-[#362B23] via-[#1a1410] to-black">
      {/* StaggeredMenu - Navbar fixa */}
      <div className="fixed top-0 left-0 w-full z-50">
        <StaggeredMenu
          position="right"
          colors={["#362B23", "#1a1410"]}
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          logoUrl="/images/simbolo-branco.webp"
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          accentColor="#8B4513"
          changeMenuColorOnOpen={true}
          isFixed={false}
          onMenuOpen={handleMenuOpen}
        />
      </div>

      {/* Conteúdo da página atual */}
      <main className="w-full h-full pt-20">
        {renderPage()}
      </main>
    </div>
  );
}
