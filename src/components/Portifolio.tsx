import { portifolio } from "./dados";
import { EmblaCarouselThumbnails } from "./ui/embla-carousel-thumbnails";
import "@/components/ui/embla-carousel-thumbnails.css";
import Expandable from "./animata/expandable";
import { AppleCardsVideo } from "./AppleCardsVideo";

export default function Portifolio() {
  // Extrair apenas as URLs dos vídeos
  const videoUrls = portifolio.map(item => item.url);

  // Preparar cards para o Apple Carousel com vídeo
  const videoCards = portifolio.map((item) => ({
    src: item.url,
    title: item.title,
    category: item.description,
  }));

  return (
    <>
    <section className="z-10 w-full max-w-7xl py-10">
      <div className="text-center mb-2">
        <br /> <br /><br /> <br />
        <h1 className="text-6xl md:text-7xl lg:text-7xl font-bold text-white mb-4">
          CONHEÇA O NOSSO TRABALHO
        </h1>
        <br /> <br />
        <EmblaCarouselThumbnails 
          slides={videoUrls} 
          options={{ loop: true }}
        />
        <br /> <br />
        <div className="w-full h-full py-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 px-4">
            Nossos Projetos
          </h2>
          <AppleCardsVideo cards={videoCards} />
        </div>
        <br /> <br />
        <Expandable />
      </div>
    </section>
    </>
  );
}