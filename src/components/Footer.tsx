import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-10 mt-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Marca */}
          <div>
            <h3 className="text-2xl font-bold mb-2">SegurosConfianza</h3>
            <p className="text-gray-400">
              Protegemos lo que más valoras. Seguros familiares, vehiculares y
              de salud, todo en un solo lugar.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Navegación</h4>
            <ul className="space-y-1 text-gray-300">
              <li>
                <a href="#" className="hover:underline">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Nuestros Seguros
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Asesoría
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Contáctanos</h4>
            <p className="text-gray-300">📞 +57 300 123 4567</p>
            <p className="text-gray-300">✉️ contacto@segurosconfianza.com</p>
            <p className="text-gray-300">📍 Bogotá, Colombia</p>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} SegurosConfianza. Todos los derechos
          reservados.
        </div>
      </footer>
    </>
  );
};

export default Footer;
