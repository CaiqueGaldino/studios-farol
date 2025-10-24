import { portifolio } from "./dados";
import { AppleCardsVideo } from "./AppleCardsVideo";
import Clientes from "./Clientes";

export default function TrabalhosPage() {
  // Preparar cards para o Apple Carousel com vídeo
  const videoCards = portifolio.map((item) => ({
    src: item.url,
    title: item.title,
    category: item.description,
  }));

  return (
    <section className="z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-start py-8">
      <div className="w-full flex flex-col items-center">
        <div className="mb-12 w-full">
          <Clientes />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          Nossos Projetos
        </h2>
        <div className="w-full">
          <AppleCardsVideo cards={videoCards} />
        </div>
      </div>
    </section>
  );
}
