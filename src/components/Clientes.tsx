import {LogoCarousel} from "./ui/logo-carousel";

export default function Clientes() {
  return (
    <div className="w-full max-w-7xl py-6 px-6 flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">PARCEIROS DE EXCELÊNCIA</h1>

      <div className="w-full flex justify-center items-center min-h-20">
        <LogoCarousel columnCount={5}/>
      </div>
    </div>
  );
}
