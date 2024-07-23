import categorias from "@/app/data/categorias";

export default function Servicio({ params }) {
  const categoria = categorias.find(
    (categoria) => categoria.id === Number(params.categoriaId)
  );

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 font-serif">
      <h1 className="text-xl font-semibold underline underline-offset-4 text-gray-800">
        {categoria.titulo}
      </h1>
      <h2 className="pt-2 text-lg text-gray-800">Contratos y documentos:</h2>
      <ul className="max-w-2xl">
        {categoria.documentos.map((documento) => (
          <li className="my-4">
            <h3 className="font-semibold text-gray-800">{documento.titulo}</h3>
            <p>{documento.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
