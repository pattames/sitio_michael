import resenas from "../data/resenas";

export default function Resenas() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="carousel w-full">
        {resenas.map((resena) => (
          <div
            id={`slide${resena.id}`}
            key={resena.id}
            className="carousel-item relative w-full"
          >
            <p>{resena.descripcion}</p>
            <h2>{resena.autor}</h2>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              {resena.id > 1 && (
                <a href={`#slide${resena.id - 1}`} className="btn btn-circle">
                  ❮
                </a>
              )}
              {resena.id < resenas.length && (
                <a href={`#slide${resena.id + 1}`} className="btn btn-circle">
                  ❯
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
