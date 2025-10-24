import { portifolio } from "./dados";
import { EmblaCarouselThumbnails } from "./ui/embla-carousel-thumbnails";
import "@/components/ui/embla-carousel-thumbnails.css";

export default function PortifolioPage() {
  // Extrair apenas as URLs dos vídeos
  const videoUrls = portifolio.map(item => item.url);

  return (
    <section className="z-10 w-full h-full max-w-7xl px-4 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-5xl">
          <EmblaCarouselThumbnails 
            slides={videoUrls}
            options={{ loop: true }}
          />
        </div>
      </div>
    </section>
  );
}
