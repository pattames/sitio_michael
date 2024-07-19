export default function Navbar() {
  return (
    <div className="navbar bg-base-100 font-serif text-gray-700">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Principal</a>
            </li>
            <li>
              <a>Servicios</a>
            </li>
            <li>
              <a>Reseñas</a>
            </li>
            <li>
              <a>Nosotros</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-16 px-1 text-xl">
          <li>
            <a>Principal</a>
          </li>
          <li>
            <a>Servicios</a>
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
        <a className="mx-4 text-xl hidden">Contácto</a>
      </div>
    </div>
  );
}
