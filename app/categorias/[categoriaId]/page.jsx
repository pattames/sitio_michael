import categorias from "@/app/data/categorias";
import abogados from "@/app/data/abogados";
import Image from "next/image";
import Link from "next/link";

export default function Servicio({ params }) {
  const categoria = categorias.find(
    (categoria) => categoria.id === Number(params.categoriaId)
  );

  const abogado = abogados.find(
    (abogado) => abogado.id === categoria.abogadoId
  );

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 font-serif text-gray-800">
      <h1 className="text-xl font-semibold underline underline-offset-4">
        {categoria.titulo}
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:mr-4">
          <h2 className="pt-2 text-lg">Contratos y documentos:</h2>
          <ul>
            {categoria.documentos.map((documento) => (
              <li
                key={documento.id}
                className="my-4 border-gray-400 border-b-2 border-l-4 p-2"
              >
                <h3 className="font-semibold">{documento.titulo}</h3>
                <p>{documento.descripcion}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center md:ml-4">
          <h2 className="pt-2 text-lg max-w-72 mx-auto">
            <Link
              href={`https://wa.me/${
                abogado.telefono
              }?text=Hola!%20Estoy%20buscando%20asesoría%20jurídica%20dentro%20del%20rubro%20"${categoria.titulo.toLocaleLowerCase()}"%20debido%20a%20`}
              target="_blank"
              className="underline text-blue-700"
            >
              Contacta
            </Link>{" "}
            por WhatsApp a nuestro especialista:
          </h2>
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
          <p className="p-2 shadow-md">{abogado.descripcion}</p>
        </div>
      </div>
    </div>
  );
}
