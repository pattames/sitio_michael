import { abogados } from "../data/abogados";

export default function Nosotros() {
  return (
    <div className="max-w-7xl mx-auto font-serif text-center flex flex-wrap justify-center">
      {abogados.map((abogado) => (
        <div key={abogado.id} className="m-6">
          <img
            loading="lazy"
            src={abogado.imagen}
            alt={abogado.nombre}
            className="w-64 h-64 object-cover object-top rounded-full my-4 mx-auto"
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
