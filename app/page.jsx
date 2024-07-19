import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center p-2 font-serif text-gray-600">
      <div className="my-8 md:my-16">
        <Image
          src="/balanza3gris.png"
          width={150}
          height={150}
          alt="Balanza"
          className="mx-auto w-38 h-auto md:w-56"
        />
      </div>
      <p className="text-xl max-w-3xl mx-auto shadow-lg rounded-md p-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et a nihil
        delectus sapiente laudantium beatae in officiis. Soluta, dicta adipisci
        inventore ipsum dolore molestiae dolorem.
      </p>
      <div className="text-lg my-10">
        <p>¿No sabes qué tipo de servicio necesitas?</p>
        <p>
          <Link
            href="https://wa.me/525586889492?text=Hola!%20Estoy%20buscando%20asesoría%20jurídica%20debido%20a%20"
            target="_blank"
            className="underline text-blue-700"
          >
            Contáctanos
          </Link>{" "}
          por WhatsApp
        </p>
      </div>
    </div>
  );
}
