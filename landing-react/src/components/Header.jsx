import { useState } from "react";
import { FaCompactDisc, FaBars } from "react-icons/fa";

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-pink-200 shadow-md">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <h1 className="text-3xl font-bold flex items-center gap-2 text-pink-900">
          <FaCompactDisc className="text-pink-600"/>
          Hallyu
        </h1>

        {/* Menú PC */}
        <nav className="hidden md:flex gap-6 text-pink-800 font-medium">
          <a href="#albums" className="hover:underline">Álbumes</a>
          <a href="#contacto" className="hover:underline">Contacto</a>
        </nav>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-3xl text-pink-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>

      </div>

      {/* Menú celular */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 pb-4 text-pink-800 font-medium">
          <a href="#albums" onClick={() => setMenuOpen(false)}>Álbumes</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
        </nav>
      )}

    </header>
  );
}
