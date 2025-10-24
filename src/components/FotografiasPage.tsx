import Expandable from "./animata/expandable";

export default function FotografiasPage() {
  return (
    <section className="z-10 w-full max-w-7xl px-4 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center py-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          FOTOGRAFIAS
        </h1>
        <Expandable />
      </div>
    </section>
  );
}
