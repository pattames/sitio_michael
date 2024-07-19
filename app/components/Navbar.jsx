import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 font-serif text-gray-700 max-w-7xl mx-auto shadow-md sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/servicios">Servicios</Link>
            </li>
            <li>
              <a>Reseñas</a>
            </li>
            <li>
              <a>Nosotros</a>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-ghost text-md text-red-800 tracking-wider underline underline-offset-8 ml-4 md:text-lg"
        >
          SERVICIOS JURÍDICOS
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl xl:gap-16">
          <li>
            <Link href="/servicios">Servicios</Link>
          </li>
          <li>
            <a>Reseñas</a>
          </li>
          <li>
            <a>Nosotros</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <a className="mx-8 text-xl">Contácto</a> */}
      </div>
    </div>
  );
}
