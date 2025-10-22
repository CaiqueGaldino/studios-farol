import {LogoCarousel} from "./ui/logo-carousel";

export default function Clientes() {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-4 text-center text-white">PARCEIROS DE EXCELÊNCIA</h1>
      
      <LogoCarousel columnCount={5}/>
    </div>
  );
}
