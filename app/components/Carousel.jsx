import resenas from "../data/resenas";
import Link from "next/link";

export default function Carousel() {
  return (
    <div className="carousel w-full">
      {resenas.map((resena) => (
        <div
          id={`slide${resena.id}`}
          key={resena.id}
          className="carousel-item relative w-full"
        >
          {resena.id > 1 ? (
            <Link href={`#slide${resena.id - 1}`} className="p-4 my-auto">
              ❮
            </Link>
          ) : (
            <div className="p-4 my-auto bg-transparent border-transparent text-transparent shadow-none pointer-events-none">
              ❮
            </div>
          )}
          <div className="text-center px-2">
            <p>"{resena.descripcion}"</p>
            <h2 className="mt-4 uppercase text-gray-700">-{resena.autor}</h2>
          </div>
          {resena.id < resenas.length ? (
            <Link href={`#slide${resena.id + 1}`} className="p-4 my-auto">
              ❯
            </Link>
          ) : (
            <div className="p-4 my-auto bg-transparent border-transparent text-transparent shadow-none pointer-events-none">
              ❮
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
