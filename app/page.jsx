import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center py-2 font-serif text-gray-600">
      <div className="my-8 md:my-16">
        <Image
          src="/balanza3gris.png"
          alt="Balanza"
          className="mx-auto w-40 md:w-56"
          width={500}
          height={500}
        />
      </div>
      <p className="text-xl max-w-3xl mx-auto shadow-lg  p-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et a nihil
        delectus sapiente laudantium beatae in officiis. Soluta, dicta adipisci
        inventore ipsum dolore molestiae dolorem.
      </p>
      <Link href="/categorias">
        <p className="p-4 my-14 inline-block w-auto  rounded-md border-2 border-gray-500 text-lg duration-200 hover:scale-105">
          Consulta nuestros servicios
        </p>
      </Link>
    </div>
  );
}
