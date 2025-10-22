import { LayoutGrid } from "./ui/layout-grid";
import { portifolio } from "./dados";
import ThreeDPhotoCarousel from "./ui/three-d-carousel";

export default function Portifolio() {
  const mediaItems = portifolio.map(item => ({
    url: item.url,
    type: item.type
  }));

  return (
    <>
    <section className="z-10 w-full max-w-7xl py-20">
      <div className="text-center mb-16">
        <h2 className="text-7xl md:text-5xl font-bold text-white mb-4">
          Portfólio
        </h2>
        <p className="text-neutral-300 text-lg">
          Conheça os nossos trabalhos.
        </p>
        <ThreeDPhotoCarousel media={mediaItems} />
      </div>
    </section>
    </>
  );
}