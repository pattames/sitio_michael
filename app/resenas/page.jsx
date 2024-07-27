import Carousel from "../components/Carousel";
import { resenas } from "../data/resenas";

export default function Resenas() {
  return (
    <div className="max-w-7xl mx-auto px-4 font-serif text-xl text-gray-500 pt-8 flex justify-center flex-wrap sm:pt-12">
      <Carousel />
      {resenas.map((resena) => (
        <div
          key={resena.id}
          className="text-center px-2 hidden sm:block m-5 max-w-lg p-4 border-gray-400 border-b-2 border-l-4"
        >
          <p>{resena.descripcion}</p>
          <h2 className="mt-4 uppercase text-gray-700">-{resena.autor}</h2>
        </div>
      ))}
    </div>
  );
}
