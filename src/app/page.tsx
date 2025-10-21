import type { ReactNode } from "react";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { equipe } from "@/components/dados";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Fotografias from "@/components/Fotografias";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex min-h-screen flex-col items-center justify-between pt-24 bg-gradient-to-b from-gray-900 to-gray-800">
        {/* Seção Header/Hero */}
        <Header />
        
        {/* Seção Equipe */}
        <section className="z-10 w-full max-w-5xl mb-32 px-6">
          <AnimatedTestimonials testimonials={equipe} />
        </section>

        {/* Seção Fotografias */}
        <Fotografias />
      </main>
    </>
  );
}
