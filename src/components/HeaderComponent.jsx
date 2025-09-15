import React from "react";
import MoviesSearch from "./MoviesSearch";
import SelectType from "./SelectType";
import ClearButton from "./ClearButton";
import { useNavigate } from "react-router-dom";

export default function HeaderComponent({
  query,
  setQuery,
  handleGenreSelect,
}) {
  const navigate = useNavigate();

  const onSelectGenre = (genreId, genreName) => {
    handleGenreSelect(genreId, genreName); // llama a la función de props

    setQuery(""); // limpia la búsqueda
    navigate("/genre");
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4 gap-4">
        <div>
          <p className="text-2xl sm:text-4xl font-bold font-roboto tracking-tight text-purple-700 pl-2 sm:pl-0">
            CINEXIN
          </p>
          <p className="mt-1 text-sm sm:text-lg text-gray-500 font-roboto">
            Tu buscador de películas favorito
          </p>
        </div>
        <div className="mt-4 sm:mt-0 pl-6 sm:pr-10 flex sm:flex">
          <MoviesSearch query={query} setQuery={setQuery} />
        </div>

        <div className=" sm:flex ml-auto">
          <SelectType onSelect={onSelectGenre} />
        </div>
        <div className=" sm:flex">
          <ClearButton
            clearState={() => {
              setQuery("");
              handleGenreSelect(null, null);
              navigate("/");
            }}
          />
        </div>
      </nav>
    </header>
  );
}
