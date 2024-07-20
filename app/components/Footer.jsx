import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-md font-serif text-gray-600 max-w-7xl mx-auto text-center my-6">
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
  );
}
