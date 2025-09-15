export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-20">
        {/* Columna 1 */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">🎬 CINEXIN</h2>
          <p className="text-sm text-gray-100">
            Millones de historias,una plataforma.
          </p>
          <p className="text-sm text-gray-100">
            El mejor cine desde cualquier lugar.
          </p>
        </div>

        {/* Columna 2 */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3">Secciones</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Películas
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Series
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Mi cuenta
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Términos de uso
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Política de privacidad
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Cookies
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-gray-100 border-t border-gray-500 pt-4">
        © {new Date().getFullYear()} CINEXIN. Todos los derechos reservados.
      </div>
    </footer>
  );
}
