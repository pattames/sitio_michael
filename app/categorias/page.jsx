import Image from "next/image";
import categorias from "../data/categorias";
import Link from "next/link";

export default function Servicios() {
  return (
    <div className="md:py-8 font-serif">
      <h1 className="text-center text-2xl font-semibold underline underline-offset-4 text-gray-800 mt-6 md:m-4">
        Categorías
      </h1>
      <div className="max-w-7xl mx-auto flex flex-wrap">
        {categorias.map((categoria) => (
          <Link
            href={`/categorias/${categoria.id}`}
            key={categoria.id}
            className="p-4 max-w-md shadow-md my-5 mx-auto z-0 duration-200 hover:scale-105"
          >
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
          </Link>
        ))}
      </div>
    </div>
  );
}
