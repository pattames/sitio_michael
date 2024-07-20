import Image from "next/image";
import categorias from "../data/categorias";

export default function Servicios() {
  return (
    <div className="max-w-7xl mx-auto font-serif flex flex-wrap md:py-10">
      {categorias.map((categoria) => (
        <div className="p-4 max-w-md shadow-md my-5 mx-auto z-0">
          <div className="h-32 w-38 relative">
            <Image
              src={categoria.imagen}
              fill
              alt={categoria.titulo}
              className="object-cover"
            />
          </div>
          <h1 className="font-bold text-gray-800 text-xl my-2 ">
            {categoria.titulo}
          </h1>
          <p className="text-gray-600">{categoria.descripcion}</p>
        </div>
      ))}
    </div>
  );
}
