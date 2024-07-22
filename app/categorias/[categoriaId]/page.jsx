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
    </div>
  );
}
