import {LogoCarousel} from "./ui/logo-carousel";

export default function Clientes() {
  return (
    <div className="w-full max-w-7xl py-20 px-6 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-12 text-center text-white">PARCEIROS DE EXCELÊNCIA</h1>

      <LogoCarousel columnCount={5}/>
    </div>
  );
}
