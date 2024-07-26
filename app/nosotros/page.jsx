import abogados from "../data/abogados";
import Image from "next/image";

export default function Nosotros() {
  return (
    <div className="max-w-7xl mx-auto font-serif text-center flex flex-wrap justify-center">
      {abogados.map((abogado) => (
        <div className="m-6">
          <Image
            src={abogado.imagen}
            width={250}
            height={250}
            alt={abogado.nombre}
            className="rounded-full my-4 mx-auto"
          />
          <h3 className="font-semibold text-lg">{abogado.nombre}</h3>
          <h4 className="tracking-wider underline underline-offset-2">
            {abogado.titulo}
          </h4>
          <p className="p-2 shadow-md max-w-sm">{abogado.descripcion}</p>
        </div>
      ))}
    </div>
  );
}
