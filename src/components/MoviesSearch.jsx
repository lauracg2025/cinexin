//buscador
import { useNavigate, useLocation } from "react-router-dom";

export default function MoviesSearch({ query, setQuery }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (newQuery.trim() !== "" && location.pathname !== "/search") {
      navigate("/search");
    }
    // Opcional: si borran el texto, podrías navegar a "/" u otra ruta
    if (newQuery.trim() === "" && location.pathname === "/search") {
      navigate("/");
    }
  };

  return (
    <div className="w-full max-w-xs sm:max-w-md ml-auto">
      <input
        type="search"
        value={query}
        onChange={handleChange}
        placeholder="Buscar películas..."
        className="w-full p-2 sm:w-[400px] text-sm sm:text-base text-gray-800 border border-gray-300 rounded-xl focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}
